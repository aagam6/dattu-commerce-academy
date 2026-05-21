import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

import {
  ChevronDown,
  Phone,
  MessageCircle,
  Users,
  Trophy,
  Calendar,
  Smile,
} from 'lucide-react';

export default function Hero() {

  const stats = [
    {
      icon: <Users size={32} />,
      value: 2500,
      suffix: '+',
      label: 'Successful Students',
    },

    {
      icon: <Calendar size={32} />,
      value: 20,
      suffix: '+',
      label: 'Years Experience',
    },

    {
      icon: <Smile size={32} />,
      value: 5000,
      suffix: '+',
      label: 'Happy Parents',
    },

    {
      icon: <Trophy size={32} />,
      value: 100,
      suffix: '%',
      label: 'Result Focus',
    },
  ];

  return (

    <section
      id="home"
      className="
      relative
      overflow-hidden
      min-h-screen
      flex
      items-center
      bg-[linear-gradient(135deg,#04113A_0%,#061547_45%,#0A1F66_100%)]
      pt-40
      pb-20
      "
    >

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/20" />

      {/* CENTER GLOW */}
      <div
        className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_center,rgba(255,122,26,0.18),transparent_45%)]
        "
      />

      {/* TOP RIGHT BLUR */}
      <div
        className="
        absolute
        top-10
        right-0
        w-[450px]
        h-[450px]
        bg-accent/10
        blur-3xl
        rounded-full
        "
      />

      {/* BOTTOM LEFT BLUR */}
      <div
        className="
        absolute
        bottom-0
        left-0
        w-[350px]
        h-[350px]
        bg-blue-500/10
        blur-3xl
        rounded-full
        "
      />

      <div
        className="
        relative
        z-10
        max-w-7xl
        mx-auto
        px-6
        lg:px-10
        grid
        lg:grid-cols-2
        gap-16
        items-center
        "
      >

        {/* LEFT SIDE */}
        <motion.div
          initial={{
            opacity: 0,
            x: -50,
          }}

          animate={{
            opacity: 1,
            x: 0,
          }}

          transition={{
            duration: 0.8,
          }}
        >

          {/* TOP TAG */}
          <div
            className="
            inline-flex
            items-center
            gap-3
            bg-white/5
            border
            border-white/10
            backdrop-blur-xl
            px-5
            py-3
            rounded-full
            mb-6
            "
          >

            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />

            <span
              className="
              text-accent
              text-sm
              md:text-base
              font-semibold
              tracking-wide
              "
            >
              Admissions Open • Est. 2003
            </span>

          </div>

          {/* MAIN HEADING */}
          <h1
            className="
            text-4xl
            sm:text-5xl
            lg:text-7xl
            font-display
            font-black
            leading-tight
            mb-6
            "
          >

            <span className="text-white">
              Building Future
            </span>

            <br />

            <span className="text-accent">
              Commerce Leaders
            </span>

            <br />

            <span className="text-white">
              Since 2003
            </span>

          </h1>

          {/* LINE */}
          <div
            className="
            w-28
            h-1.5
            bg-accent
            rounded-full
            mb-8
            "
          />

          {/* DESCRIPTION */}
          <p
            className="
            text-gray-300
            text-lg
            md:text-xl
            leading-relaxed
            mb-10
            max-w-2xl
            "
          >

            Trusted Commerce Coaching For Class 11 & 12 Students
            In Ahmedabad With Concept Clarity, Weekly Tests,
            Writing Practice, Personal Attention & Board Exam Preparation.

          </p>

          {/* QUOTE */}
          <div
            className="
            bg-white/5
            border
            border-white/10
            rounded-3xl
            p-6
            backdrop-blur-xl
            mb-10
            max-w-xl
            shadow-[0_10px_40px_rgba(0,0,0,0.25)]
            "
          >

            <p
              className="
              text-2xl
              md:text-3xl
              font-display
              italic
              text-accent
              leading-relaxed
              "
            >

              “There Is No Substitute For Hard Work.”

            </p>

          </div>

          {/* BUTTONS */}
          <div
            className="
            flex
            flex-col
            sm:flex-row
            gap-5
            "
          >

            {/* WHATSAPP */}
            <motion.a
              whileHover={{
                scale: 1.05,
              }}

              whileTap={{
                scale: 0.95,
              }}

              href="https://wa.me/919825249281"
              target="_blank"
              rel="noreferrer"

              className="
              bg-accent
              hover:bg-[#ff8f3d]
              text-white
              px-8
              py-5
              rounded-2xl
              font-bold
              text-lg
              flex
              items-center
              justify-center
              gap-3
              transition-all
              duration-300
              shadow-[0_15px_40px_rgba(255,122,26,0.35)]
              "
            >

              <MessageCircle size={24} />

              WhatsApp Now

            </motion.a>

            {/* CALL */}
            <motion.a
              whileHover={{
                scale: 1.05,
              }}

              whileTap={{
                scale: 0.95,
              }}

              href="tel:+919825249281"

              className="
              border-2
              border-accent
              hover:bg-accent
              text-white
              px-8
              py-5
              rounded-2xl
              font-bold
              text-lg
              flex
              items-center
              justify-center
              gap-3
              transition-all
              duration-300
              "
            >

              <Phone size={24} />

              Call Now

            </motion.a>

          </div>

          {/* TRUST TEXT */}
          <p
            className="
            text-white/60
            text-sm
            mt-6
            "
          >

            Trusted By Thousands Of Commerce Students Since 2003

          </p>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{
            opacity: 0,
            x: 50,
          }}

          animate={{
            opacity: 1,
            x: 0,
          }}

          transition={{
            duration: 0.8,
          }}

          className="relative"
        >

      {/* PREMIUM BADGE */}
<div
  className="
  absolute
  top-10
  left-6
  lg:top-8
  lg:left-2
  z-20
  bg-accent
  text-white
  px-5
  py-3
  rounded-full
  font-bold
  text-xs
  sm:text-sm
  md:text-base
  shadow-[0_10px_35px_rgba(255,122,26,0.45)]
  border
  border-white/10
  backdrop-blur-xl
  whitespace-nowrap
  "
>

  Trusted Since 2003

</div>

          
          {/* LOGO */}
          <div
            className="
            flex
            justify-center
            items-center
            mb-10
            mt-12
            lg:mt-0
            relative
            "
          >

            {/* Glow */}
            <div
              className="
              absolute
              w-[280px]
              h-[280px]
              lg:w-[380px]
              lg:h-[380px]
              bg-accent/15
              blur-3xl
              rounded-full
              "
            />

            <motion.img
              animate={{
                y: [0, -10, 0],
              }}

              transition={{
                duration: 4,
                repeat: Infinity,
              }}

              src="/logo.png"

              alt="Dattu Sir's Commerce Academy"

              className="
              relative
              z-10
              w-64
              sm:w-72
              md:w-80
              lg:w-[340px]
              object-contain
              drop-shadow-[0_0_45px_rgba(255,122,26,0.45)]
              "
            />

          </div>

          {/* STATS */}
          <div
            className="
            grid
            grid-cols-2
            gap-5
            "
          >

            {stats.map((stat, i) => (

              <motion.div
                key={i}

                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}

                className="
                bg-white/5
                border
                border-white/10
                rounded-3xl
                p-6
                text-center
                backdrop-blur-xl
                transition-all
                duration-300
                shadow-[0_10px_30px_rgba(0,0,0,0.25)]
                "
              >

                {/* ICON */}
                <div
                  className="
                  flex
                  justify-center
                  mb-4
                  text-accent
                  "
                >

                  {stat.icon}

                </div>

                {/* VALUE */}
                <h3
                  className="
                  text-3xl
                  md:text-4xl
                  font-bold
                  text-white
                  mb-2
                  "
                >

                  <CountUp
                    end={stat.value}
                    duration={3}
                  />

                  {stat.suffix}

                </h3>

                {/* LABEL */}
                <p
                  className="
                  text-gray-300
                  text-sm
                  md:text-base
                  "
                >

                  {stat.label}

                </p>

              </motion.div>

            ))}

          </div>

        </motion.div>

      </div>

  

    </section>

  );
}