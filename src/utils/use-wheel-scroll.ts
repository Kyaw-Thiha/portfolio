import { RefObject } from "react";
import { useDomEvent, MotionValue } from "framer-motion";
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

export const debouncedSpringTo = debounce(
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
    const scrollSpeedModifier = 100;
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
            debouncedSpringTo(y, constraints.top);
          }
        }

        // If user scrolls above the top boundary
        if (newY > constraints.bottom) {
          if (event.deltaY >= -deltaThreshold) {
            y.set(constraints.bottom);
            startedAnimation = true;
          } else {
            debouncedSpringTo(y, constraints.bottom);
          }
        }
      }

      if (!startedAnimation) {
        y.stop();

        // When scrolling down, amplify the scroll speed
        if (newY < y.get()) {
          y.set(newY - scrollSpeedModifier);
        } else {
          // When scrolling up, amplify the scroll speed
          y.set(newY + scrollSpeedModifier);
        }
      } else {
        debouncedSpringTo.cancel();
      }

      onWheelCallback(event);
    }
  };

  useDomEvent(ref, "wheel", onWheel as unknown as EventListener, {
    passive: false,
  });
}
