"use client";
import { chakra, Box } from "@chakra-ui/react";
import { motion, useReducedMotion } from "framer-motion";

const MotionBox = motion(chakra.div);

function variantsFrom(direction = "left", distance = 40) {
  const x = direction === "left" ? -distance : distance;
  return {
    hidden: { opacity: 0, x },
    show:   { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };
}

/**
 * Props:
 * - direction: "left" | "right"
 * - distance: offset en px (défaut 40)
 * - once: true pour animer une seule fois (défaut true)
 */
export default function RevealOnScroll({ children, direction = "left", distance = 40, once = true, ...rest }) {
  const reduceMotion = useReducedMotion();
  return (
    <MotionBox
      initial="hidden"
      whileInView={reduceMotion ? "show" : "show"}
      variants={reduceMotion ? { hidden:{opacity:1,x:0}, show:{opacity:1,x:0} } : variantsFrom(direction, distance)}
      viewport={{ once, amount: 0.2 }} // déclenche vers ~20% de visibilité
      {...rest}
    >
      {children}
    </MotionBox>
  );
}
