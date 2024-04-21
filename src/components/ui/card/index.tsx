import { memo, useEffect, useRef } from "react";
import {
  ResolvedValues,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { ContentPlaceholder } from "./ContentPlaceholder";
import { Title } from "./Title";
import { Image } from "./Image";
import { openSpring, closeSpring } from "./animations";
import { useScrollConstraints } from "@/utils/use-scroll-constraints";
import { useWheelScroll } from "@/utils/use-wheel-scroll";
import { cn } from "@/utils/cn";
import { SquareChevronLeftIcon } from "lucide-react";

export interface CardData {
  id: string;
  title: string;
  pointOfInterest: number;
  backgroundColor: string;
}

interface Props extends CardData {
  isSelected: boolean;
}

// Distance in pixels a user has to scroll a card down before we recognise
// a swipe-to dismiss action.
const dismissDistance = 50;

const Card = memo(
  ({ isSelected, id, title, pointOfInterest }: Props) => {
    const val = useMotionValue(0);
    // const zIndex = useMotionValue(isSelected ? 2 : 0);

    const y = useSpring(val, { stiffness: 400, damping: 40 });

    // Function to navtigate the route
    const navigate = useNavigate();

    // Maintain the visual border radius when we perform the layoutTransition by inverting its scaleX/Y
    // const inverted = useInvertedBorderRadius(20);

    // We'll use the opened card element to calculate the scroll constraints
    const cardRef = useRef(null);
    const constraints = useScrollConstraints(cardRef, isSelected);

    const exitSelection = () => {
      isSelected = false;
      navigate("/");
      y.set(constraints.bottom);
    };

    function checkSwipeToDismiss() {
      if (y.get() > constraints.bottom) {
        exitSelection();
      } else if (y.get() < constraints.top - dismissDistance) {
        exitSelection();
      }
    }

    useEffect(() => {
      const handleEsc = (event) => {
        if (event.key === "Escape") {
          exitSelection();
        }
      };
      window.addEventListener("keydown", handleEsc);

      return () => {
        window.removeEventListener("keydown", handleEsc);
      };
    }, []);

    // function checkZIndex(latest: ResolvedValues) {
    //   const scaleX = latest.scaleX as number;

    //   if (isSelected) {
    //     zIndex.set(20);
    //   } else if (!isSelected && scaleX < 1.01) {
    //     zIndex.set(0);
    //   }
    // }

    // When this card is selected, attach a wheel event listener
    const containerRef = useRef(null);
    useWheelScroll(
      containerRef,
      y,
      constraints,
      checkSwipeToDismiss,
      isSelected,
    );

    return (
      <li ref={containerRef} className={`card`}>
        <Overlay isSelected={isSelected} onExit={exitSelection} />
        <div
          className={cn(
            "pointer-events-none relative block h-full w-full",
            isSelected && "fixed bottom-0 left-0 right-0 top-0 z-10  ",
          )}
        >
          <motion.div
            ref={cardRef}
            className={cn(
              "pointer-events-auto relative mx-0 my-auto h-full w-full overflow-hidden px-8 py-4 backdrop-blur-xl",
              isSelected && "fixed top-12 z-20 h-auto overflow-scroll",
            )}
            // bg-[#1c1c1e]
            style={{ y }}
            initial={{ borderRadius: 24 }}
            layout
            transition={isSelected ? openSpring : closeSpring}
            drag={isSelected ? "y" : false}
            dragConstraints={constraints}
            onDrag={checkSwipeToDismiss}
            // onUpdate={checkZIndex}
          >
            <motion.div layout>
              {isSelected && (
                <SquareChevronLeftIcon
                  className="fixed z-10 h-12 w-12 cursor-pointer text-white"
                  onClick={() => exitSelection()}
                />
              )}
              <Image
                id={id}
                isSelected={isSelected}
                pointOfInterest={pointOfInterest}
              />
              <Title title={title} isSelected={isSelected} />
              <ContentPlaceholder />
            </motion.div>
          </motion.div>
        </div>
        {!isSelected && (
          <Link
            to={`/projects/${id}`}
            className="absolute bottom-0 left-0 right-0 top-0"
          />
        )}
      </li>
    );
  },
  (prev, next) => prev.isSelected === next.isSelected,
);

Card.displayName = "Card";
export default Card;

interface OverlayInteface {
  isSelected: boolean;
  onExit: () => void;
}
const Overlay = ({ isSelected, onExit }: OverlayInteface) => (
  <motion.div
    initial={false}
    animate={{ opacity: isSelected ? 1 : 0 }}
    transition={{ duration: 0.2 }}
    style={{ pointerEvents: isSelected ? "auto" : "none" }}
    className="overlay fixed bottom-0 left-1/2 top-0 z-10 w-full max-w-[2048px] -translate-x-1/2"
  >
    <Link
      to="/"
      onClick={() => onExit()}
      className="fixed bottom-0 left-1/2 top-0 block w-full -translate-x-1/2"
    />
  </motion.div>
);
