import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function StickyWhatsApp() {

  return (

    <motion.a
      href="https://wa.me/919825249281"
      target="_blank"
      rel="noopener noreferrer"

      initial={{
        scale: 0,
        opacity: 0,
      }}

      animate={{
        scale: 1,
        opacity: 1,
      }}

      transition={{
        delay: 1,
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
      bottom-6
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
        bg-green-500/40
        blur-xl
        animate-pulse
        "
      />

      {/* Main Button */}
      <div
        className="
        relative
        w-16
        h-16
        rounded-full
        bg-gradient-to-br
        from-green-500
        to-green-700
        shadow-[0_10px_35px_rgba(34,197,94,0.45)]
        border
        border-white/20
        flex
        items-center
        justify-center
        backdrop-blur-xl
        "
      >

        {/* Ping Ring */}
        <span
          className="
          absolute
          w-full
          h-full
          rounded-full
          border-2
          border-green-400
          animate-ping
          opacity-30
          "
        />

        {/* Icon Animation */}
        <motion.div
          animate={{
            rotate: [0, 12, -12, 12, 0],
          }}

          transition={{
            duration: 1.8,
            repeat: Infinity,
          }}
        >

          <MessageCircle
            size={30}
            className="text-white"
          />

        </motion.div>

        {/* Notification Dot */}
        <span
          className="
          absolute
          top-1
          right-1
          w-4
          h-4
          rounded-full
          bg-red-500
          border-2
          border-white
          animate-pulse
          "
        />

      </div>

    </motion.a>

  );
}