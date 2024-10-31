import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

const getVariant = (direction) => {
    switch(direction){
        case "left":
            return {
                hidden: { opacity: 0 , translateX: 30},
                visible: { opacity: 1, translateX: 0}
            }
        case "up":
            return {
                hidden: { opacity: 0 , translateY: 30},
                visible: { opacity: 1, translateY: 0}
            }
        default:
            return {
                hidden: { opacity: 0 , translateX: 30},
                visible: { opacity: 1, translateX: 0}
            }
    }
}

const SlideIn = ({children, styles, direction, delay=0, margin=""}) => {
    const ref = useRef(null);
    const isInview = useInView(ref, { 
        margin: margin, 
        once: true 
    });
    const controls = useAnimation();
    const variant = getVariant(direction)

    useEffect(() => {
        if (isInview) {
            controls.start("visible")
        }
    }, [isInview])

    return (
        <motion.div
            ref={ref}
            variants={variant}
            transition={{
                type: "spring",
                duration: 0.4,
                delay: delay,
                damping: 8,
                stiffness: 100,
            }}
            initial="hidden"
            animate={controls}
            className={styles}
        >
            {children}
        </motion.div>
    )
}

export default SlideIn