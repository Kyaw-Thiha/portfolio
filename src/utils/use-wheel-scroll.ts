import { RefObject } from "react";
import { useDomEvent, MotionValue } from "framer-motion";
import { animate, spring } from "popmotion";
import { mix } from "@popmotion/popcorn";

import pkg from "lodash";
const { debounce } = pkg;

interface Constraints {
  top: number;
  bottom: number;
}

// Absolute distance a wheel scroll event can travel outside of
// the defined constraints before we fire a "snap back" animation
const deltaThreshold = 3;

// If wheel event fires beyond constraints, multiple the delta by this amount
// const elasticFactor = 0.2;
const elasticFactor = 0.8;

function springTo(value: MotionValue, from: number, to: number) {
  if (value.isAnimating()) return;

  // value.start((complete) => {
  //   const animation = spring({
  //     from,
  //     to,
  //     velocity: value.getVelocity(),
  //     stiffness: 400,
  //     damping: 40,
  //   }).start({
  //     update: (v: number) => value.set(v),
  //     complete,
  //   });

  //   return () => animation.stop();
  // });

  value.on("change", () => {
    const animation = animate({
      from,
      to,
      velocity: value.getVelocity(),
      stiffness: 400,
      damping: 40,
      type: "spring",
      onUpdate(latest) {
        if (latest == value.get()) {
          value.set(latest);
        }
      },
    });

    return () => animation.stop();
  });
}

let isDebounced = false;

// const debouncedSpringTo = debounce(springTo, 100);

const debouncedSpringTo = debounce(
  (value: MotionValue, to: number) => value.set(to),
  100,
);
/**
 * Re-implements wheel scroll for overlflow: hidden elements.
 *
 * Adds Apple Watch crown-style constraints, where the user
 * must continue to input wheel events of a certain delta at a certain
 * speed or the scrollable container will spring back to the nearest
 * constraint.
 *
 * Currently achieves this using event.deltaY and a debounce, which
 * feels pretty good during direct input but it'd be better to increase
 * the deltaY threshold during momentum scroll.
 *
 * TODOs before inclusion in Framer Motion:
 * - Detect momentum scroll and increase delta threshold before spring
 * - Remove padding hack
 * - Handle x-axis
 * - Perhaps handle arrow and space keyboard events?
 *
 * @param ref - Ref of the Element to attach listener to
 * @param y - MotionValue for the scrollable element - might be different to the Element
 * @param constraints - top/bottom scroll constraints in pixels.
 * @param isActive - `true` if this listener should fire.
 */
export function useWheelScroll(
  ref: RefObject<Element>,
  y: MotionValue<number>,
  constraints: Constraints | null,
  onWheelCallback: (e: WheelEvent) => void,
  isActive: boolean,
) {
  const onWheel = (event: WheelEvent) => {
    if (isActive) {
      event.preventDefault();

      const currentY = y.get();
      let newY = currentY - event.deltaY;
      let startedAnimation = false;
      const isWithinBounds =
        constraints && newY >= constraints.top && newY <= constraints.bottom;

      if (constraints && !isWithinBounds) {
        newY = mix(currentY, newY, elasticFactor);

        // If user scrolls below the bottom boundary
        if (newY < constraints.top) {
          if (event.deltaY <= deltaThreshold) {
            y.set(constraints.top);
            startedAnimation = true;
          } else {
            isDebounced = true;
            debouncedSpringTo(y, constraints.top);
          }
        }

        // If user scrolls above the top boundary
        if (newY > constraints.bottom) {
          if (event.deltaY >= -deltaThreshold) {
            y.set(constraints.bottom);
            startedAnimation = true;
          } else {
            isDebounced = true;
            debouncedSpringTo(y, constraints.bottom);
          }
        }
      }

      if (!startedAnimation) {
        y.stop();
        y.set(newY);
      } else {
        debouncedSpringTo.cancel();
      }

      onWheelCallback(event);
    } else {
      // This is to ensure that its doesnt scroll to the boundary when it is closed.
      // Especially when scrolling down past the bottom boundary
      if (isDebounced) {
        debouncedSpringTo.cancel();
        isDebounced = false;
      }
    }
  };

  useDomEvent(ref, "wheel", onWheel, { passive: false });
}
