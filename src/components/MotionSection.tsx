import { ReactNode } from "react";
import { motion } from "framer-motion";

interface MotionSectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

const MotionSection = ({ id, className, children }: MotionSectionProps) => {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.section>
  );
};

export default MotionSection;
