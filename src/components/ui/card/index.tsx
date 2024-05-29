import { memo, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Text } from "./Text";
import { Title } from "./Title";
import { Image } from "./Image";
import { openSpring, closeSpring } from "./animations";
import { useScrollConstraints } from "@/utils/use-scroll-constraints";
import { debouncedSpringTo, /*useWheelScroll */ } from "@/utils/use-wheel-scroll";
import { cn } from "@/utils/cn";
import { HomeIcon, SquareChevronLeftIcon } from "lucide-react";
import { Project } from "@/data/models";

interface ProjectType extends Project { }
interface Props extends ProjectType {
    id: string;
    pointOfInterest: number;
    isSelected: boolean;
}

// Distance in pixels a user has to scroll a card down before we recognise
// a swipe-to dismiss action.
//const dismissDistance = 50;

const Card = memo(
    (props: Props) => {
        const val = useMotionValue(0);
        // const zIndex = useMotionValue(isSelected ? 2 : 0);

        const y = useSpring(val, { stiffness: 400, damping: 40 });

        // Function to navtigate the route
        const navigate = useNavigate();

        // Maintain the visual border radius when we perform the layoutTransition by inverting its scaleX/Y
        // const inverted = useInvertedBorderRadius(20);

        // We'll use the opened card element to calculate the scroll constraints
        const cardRef = useRef(null);
        const constraints = useScrollConstraints(cardRef, props.isSelected);

        const exitSelection = () => {
            debouncedSpringTo.cancel();
            navigate("/");
            y.set(constraints.bottom);
        };

        //function checkSwipeToDismiss() {
        //if (y.get() > constraints.bottom) {
        // exitSelection();
        //} else if (y.get() < constraints.top - dismissDistance) {
        // exitSelection();
        //}
        //}

        useEffect(() => {
            const handleEsc = (event: KeyboardEvent) => {
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
        // useWheelScroll(
        // containerRef,
        // y,
        // constraints,
        // checkSwipeToDismiss,
        // props.isSelected,
        // );

        return (
            <li ref={containerRef} className={`card`}>
                <Overlay isSelected={props.isSelected} onExit={exitSelection} />
                <div
                    className={cn(
                        "pointer-events-none relative block h-full w-full",
                        props.isSelected && "fixed bottom-0 left-0 right-0 top-0 z-10",
                    )}
                >
                    <motion.div
                        ref={cardRef}
                        className={cn(
                            "pointer-events-auto relative scrollbar-hide mx-0 my-auto h-full w-full overflow-hidden x-8 py-4 backdrop-blur-xl",
                            props.isSelected && "fixed top-12 z-20 overflow-scroll",
                        )}
                        style={{ y }}
                        initial={{ borderRadius: 24 }}
                        // layout
                        transition={props.isSelected ? openSpring : closeSpring}
                    // drag={isSelected ? "y" : false}
                    // dragConstraints={constraints}
                    // onDrag={checkSwipeToDismiss}
                    // onUpdate={checkZIndex}
                    >
                        <motion.div layout>
                            {props.isSelected && (
                                <SquareChevronLeftIcon
                                    className="ml-2 md:ml-20 md:fixed mb-2 z-10 h-12 w-12 cursor-pointer text-white"
                                    onClick={() => exitSelection()}
                                />
                            )}

                            {!props.isSelected && (
                                <h2 className="mb-4 text-center text-2xl font-medium">
                                    {props.name}
                                </h2>
                            )}
                            <Image
                                imgSrc={props.image}
                                isSelected={props.isSelected}
                                pointOfInterest={props.pointOfInterest}
                            />
                            <Title title={props.name} isSelected={props.isSelected} />
                            <Text text={props.detail} />
                            <div className="mx-4 md:mx-20 mb-40 flex justify-end">
                                <div className="border-4 text-white rounded-lg flex gap-2 p-2 cursor-pointer" onClick={() => exitSelection()}>
                                    Return to <HomeIcon />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
                {!props.isSelected && (
                    <Link
                        to={`/projects/${props.id}`}
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
