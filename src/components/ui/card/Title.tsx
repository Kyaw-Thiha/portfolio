import { motion } from "framer-motion";
import { closeSpring, openSpring } from "./animations";

interface TitleProps {
  title: string;
  isSelected: boolean;
}
export const Title = ({ title, isSelected }: TitleProps) => {
  const x = isSelected ? 30 : 15;
  const y = x;

  return (
    <motion.div
      className="mb-12 text-center text-2xl text-white"
      // initial={false}
      initial={{ x, y }}
      animate={{ x, y }}
      transition={isSelected ? openSpring : closeSpring}
      transformTemplate={scaleTranslate}
      style={{ originX: 0, originY: 0 }}
      layout
    >
      <h2>{title}</h2>
    </motion.div>
  );
};

/**
 * `transform` is order-dependent, so if you scale(0.5) before translateX(100px),
 * the visual translate will only be 50px.
 *
 * The intuitive pattern is to translate before doing things like scale and
 * rotate that will affect the coordinate space. So Framer Motion takes an
 * opinion on that and allows you to animate them
 * individually without having to write a whole transform string.
 *
 * However in this component we're doing something novel by inverting
 * the scale of the parent component. Because of this we want to translate
 * through scaled coordinate space, and can use the transformTemplate prop to do so.
 */
interface ScaleTranslateProps {
  x: number;
  y: number;
  scaleX: number;
  scaleY: number;
}
const scaleTranslate = ({ x, y, scaleX, scaleY }: ScaleTranslateProps) =>
  `scaleX(${scaleX}) scaleY(${scaleY}) translate(${x}, ${y}) translateZ(0)`;
