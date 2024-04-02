import { memo, useRef } from "react";
import { ResolvedValues, motion, useMotionValue } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useInvertedBorderRadius } from "@/utils/use-inverted-border-radius";
import { ContentPlaceholder } from "./ContentPlaceholder";
import { Title } from "./Title";
import { Image } from "./Image";
import { openSpring, closeSpring } from "./animations";
import { useScrollConstraints } from "@/utils/use-scroll-constraints";
import { useWheelScroll } from "@/utils/use-wheel-scroll";
import { cn } from "@/utils/cn";

export interface CardData {
  id: string;
  category: string;
  title: string;
  pointOfInterest: number;
  backgroundColor: string;
}

interface Props extends CardData {
  isSelected: boolean;
}

// Distance in pixels a user has to scroll a card down before we recognise
// a swipe-to dismiss action.
const dismissDistance = 150;

const Card = memo(
  ({
    isSelected,
    id,
    title,
    category,
    pointOfInterest,
    backgroundColor,
  }: Props) => {
    const y = useMotionValue(0);
    const zIndex = useMotionValue(isSelected ? 2 : 0);

    // Function to navtigate the route
    const navigate = useNavigate();

    // Maintain the visual border radius when we perform the layoutTransition by inverting its scaleX/Y
    const inverted = useInvertedBorderRadius(20);

    // We'll use the opened card element to calculate the scroll constraints
    const cardRef = useRef(null);
    const constraints = useScrollConstraints(cardRef, isSelected);

    function checkSwipeToDismiss() {
      y.get() > dismissDistance && navigate("/");
    }

    function checkZIndex(latest: ResolvedValues) {
      const scaleX = latest.scaleX as number;

      if (isSelected) {
        zIndex.set(2);
      } else if (!isSelected && scaleX < 1.01) {
        zIndex.set(0);
      }
    }

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
        <Overlay isSelected={isSelected} />
        <div
          className={cn(
            "pointer-events-none relative block h-full w-full",
            isSelected &&
              "fixed bottom-0 left-0 right-0 top-0 z-10 overflow-hidden ",
          )}
        >
          <motion.div
            ref={cardRef}
            className={cn(
              "pointer-events-auto relative mx-0 my-auto h-full w-full overflow-hidden rounded-3xl bg-[#1c1c1e]",
              isSelected && "fixed top-12 h-auto overflow-hidden",
            )}
            style={{ ...inverted, zIndex, y }}
            layout
            transition={isSelected ? openSpring : closeSpring}
            drag={isSelected ? "y" : false}
            dragConstraints={constraints}
            onDrag={checkSwipeToDismiss}
            onUpdate={checkZIndex}
          >
            <Image
              id={id}
              isSelected={isSelected}
              pointOfInterest={pointOfInterest}
              backgroundColor={backgroundColor}
            />
            <Title title={title} category={category} isSelected={isSelected} />
            <ContentPlaceholder />
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

const Overlay = ({ isSelected }: { isSelected: boolean }) => (
  <motion.div
    initial={false}
    animate={{ opacity: isSelected ? 1 : 0 }}
    transition={{ duration: 0.2 }}
    style={{ pointerEvents: isSelected ? "auto" : "none" }}
    className="overlay fixed bottom-0 left-1/2 top-0 z-10 w-full max-w-[2048px] -translate-x-1/2"
  >
    <Link
      to="/"
      className="fixed bottom-0 left-1/2 top-0 block w-full -translate-x-1/2"
    />
  </motion.div>
);
