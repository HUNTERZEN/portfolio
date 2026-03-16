import React from "react";
import useMeasure from "react-use-measure";
// eslint-disable-next-line no-unused-vars
import { useMotionValue, animate, motion } from "motion/react";

export function InfiniteSlider({
  children,
  duration = 20,
  reverse = false,
  className = "",
}) {
  const [ref, { width }] = useMeasure();
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = React.useState(false);
  const [animationControls, setAnimationControls] = React.useState(null);

  React.useEffect(() => {
    if (!width) return;

    // Create an animation that moves `x`
    // We want to translate from 0 to -width/2 (since we duplicate the content)
    const contentWidth = width / 2;
    
    // Set initial position based on direction
    const initialPos = reverse ? -contentWidth : 0;
    const finalPos = reverse ? 0 : -contentWidth;

    x.set(initialPos);

    const controls = animate(x, finalPos, {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
      // Important to keep moving from current x value on resume
    });

    setAnimationControls(controls);

    return () => controls.stop();
  }, [x, width, duration, reverse]);

  // Pause on hover
  React.useEffect(() => {
    if (animationControls) {
      if (isHovered) {
        animationControls.pause();
      } else {
        animationControls.play();
      }
    }
  }, [isHovered, animationControls]);

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        ref={ref}
        style={{ x }}
        className="flex w-fit"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}
