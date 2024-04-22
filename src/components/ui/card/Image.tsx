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
      className=" left-0 top-0 flex w-screen overflow-hidden backdrop-blur-xl"
      style={{ /*backgroundColor,*/ originX: 0, originY: 0 }}
      layout
    >
      <motion.img
        className={cn("h-[480px] rounded-xl", isSelected && "mx-auto mt-4")}
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
