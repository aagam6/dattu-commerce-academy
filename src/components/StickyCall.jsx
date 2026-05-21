import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

export default function StickyCall() {

  return (

    <motion.a
      href="tel:+919825249281"

      initial={{
        scale: 0,
        opacity: 0,
      }}

      animate={{
        scale: 1,
        opacity: 1,
      }}

      transition={{
        delay: 1.2,
        duration: 0.5,
      }}

      whileHover={{
        scale: 1.12,
      }}

      whileTap={{
        scale: 0.95,
      }}

      className="
      fixed
      bottom-28
      right-5
      md:right-7
      z-50
      "
    >

      {/* Glow */}
      <div
        className="
        absolute
        inset-0
        rounded-full
        bg-blue-500/40
        blur-xl
        animate-pulse
        "
      />

      {/* Button */}
      <div
        className="
        relative
        w-16
        h-16
        rounded-full
        bg-gradient-to-br
        from-blue-500
        to-blue-700
        shadow-[0_10px_35px_rgba(59,130,246,0.45)]
        border
        border-white/20
        flex
        items-center
        justify-center
        backdrop-blur-xl
        "
      >

        {/* Ring Animation */}
        <span
          className="
          absolute
          w-full
          h-full
          rounded-full
          border-2
          border-blue-400
          animate-ping
          opacity-30
          "
        />

        {/* Icon */}
        <motion.div
          animate={{
            rotate: [0, -12, 12, -12, 0],
          }}

          transition={{
            duration: 1.8,
            repeat: Infinity,
          }}
        >

          <Phone
            size={28}
            className="text-white"
          />

        </motion.div>

      </div>

    </motion.a>

  );
}