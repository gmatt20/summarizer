import React from "react";
import { motion } from "framer-motion";

const Spinner = () => {
  return (
    <div className="relative w-12 h-12 my-5">
      <motion.span
        className="block w-12 h-12 border-7 border-solid border-t-7 border-t-[#2D3134] border-[#eee] rounded-full absolute top-0 left-0"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          ease: "easeInOut",
          duration: 1,
        }}
      />
    </div>
  );
};

export default Spinner;
