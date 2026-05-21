import React from 'react';
import { motion } from 'framer-motion';

export default function LoadingScreen() {

  return (

    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="
      fixed
      inset-0
      z-[999]
      overflow-hidden
      bg-gradient-to-b
      from-[#061547]
      via-[#04113A]
      to-[#020B2B]
      flex
      items-center
      justify-center
      "
    >

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/20 blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">

        {/* Logo */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: 1,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="relative mb-8"
        >

          {/* Glow Ring */}
          <div
            className="
            absolute
            inset-0
            w-40
            h-40
            mx-auto
            rounded-full
            bg-accent/20
            blur-3xl
            "
          />

          <img
            src="/logo.png"
            alt="Dattu Sir Logo"
            className="
            relative
            z-10
            w-32
            h-32
            md:w-40
            md:h-40
            mx-auto
            object-contain
            "
          />

        </motion.div>

        {/* Academy Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="
          text-4xl
          md:text-6xl
          font-display
          font-bold
          text-white
          mb-3
          "
        >

          Dattu Sir's

        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="
          text-accent
          text-lg
          md:text-2xl
          font-semibold
          mb-8
          "
        >

          Commerce Academy

        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="
          text-white/70
          text-base
          md:text-xl
          mb-10
          "
        >

          Building Commerce Success Since 2003

        </motion.p>

        {/* Premium Loader */}
        <div className="flex justify-center">

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="
            w-14
            h-14
            rounded-full
            border-[4px]
            border-accent/20
            border-t-accent
            "
          />

        </div>

      </div>

    </motion.div>

  );
}