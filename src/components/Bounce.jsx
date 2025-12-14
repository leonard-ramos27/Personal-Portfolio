import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

const Bounce = ({children, styles, margin=""}) => {
  const ref = useRef(null);
  const isInview = useInView(ref, { 
    margin: margin, 
    once: true 
  });
  const controls = useAnimation();

  useEffect(() => {
    if (isInview) {
      controls.start({
        y: [0, -5, 0],
        transition: {
          duration: 0.8,
          repeat: Infinity,
          repeatType: "loop",
        }
      })
    }
  }, [isInview])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      className={styles}
    >
      {children}
    </motion.div>
  );
}

export default Bounce
