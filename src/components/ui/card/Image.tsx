import { motion, useDeprecatedInvertedScale } from "framer-motion";
import { closeSpring } from "./animations";

interface ImageProps {
  id: string;
  isSelected: boolean;
  pointOfInterest: number;
  backgroundColor: string;
}
export const Image = ({
  id,
  isSelected,
  pointOfInterest = 0,
  backgroundColor,
}: ImageProps) => {
  const inverted = useDeprecatedInvertedScale();

  return (
    <motion.div
      className="card-image-container absolute left-0 top-0 h-[420px] w-screen overflow-hidden"
      style={{ ...inverted, backgroundColor, originX: 0, originY: 0 }}
    >
      <motion.img
        className="card-image h-auto"
        src={`images/${id}.png`}
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
