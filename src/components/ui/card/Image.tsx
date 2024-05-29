import { motion } from "framer-motion";
import { closeSpring } from "./animations";
import { cn } from "@/utils/cn";

interface ImageProps {
  imgSrc: string;
  isSelected: boolean;
  pointOfInterest: number;
}
export const Image = ({
  imgSrc,
  isSelected,
  pointOfInterest = 0,
}: ImageProps) => {
  return (
    <motion.div
      className="ml-0 xl:ml-16 w-screen overflow-hidden backdrop-blur-xl"
      style={{ /*backgroundColor,*/ /* originX: 0, originY: 0 */ }}
      layout
    >
      <motion.img
        className={cn("w-auto h-[240px] md:w-[540px] md:h-auto rounded-xl", isSelected && "mx-auto mt-4 md:w-[960px]")}
        src={imgSrc}
        alt=""
        initial={false}
        animate={
          isSelected ? { x: -20, y: -20 } : { x: -pointOfInterest, y: 0 }
        }
        transition={closeSpring}
      />
    </motion.div>
  );
};
