import React from 'react';
import { motion } from 'framer-motion';

import {
  MapPin,
  Phone,
  Clock3,
  ArrowUpRight,
  MessageCircle,
  Star,
} from 'lucide-react';

export default function Footer() {

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Results', href: '#results' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (

    <footer
      className="
      relative
      overflow-hidden
      bg-gradient-to-b
      from-[#061547]
      via-[#04113A]
      to-[#020B2B]
      border-t
      border-white/10
      "
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 blur-[120px]" />

      {/* NOISE EFFECT */}
      <div
        className="
        absolute
        inset-0
        opacity-[0.03]
        bg-[url('/noise.png')]
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">

        {/* TOP GRID */}
        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
          gap-16
          "
        >

          {/* LOGO SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >

            <div className="flex items-center gap-4 mb-6">

              <motion.img
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                src="/logo.png"
                alt="Dattu Sir's Commerce Academy Ahmedabad"
                className="
                w-16
                h-16
                object-contain
                rounded-full
                drop-shadow-[0_0_20px_rgba(255,122,26,0.35)]
                "
              />

              <div>

                <h3
                  className="
                  text-2xl
                  font-display
                  text-white
                  "
                >
                  Dattu Sir's
                </h3>

                <p className="text-white/60 text-sm">
                  Commerce Academy
                </p>

              </div>

            </div>

            <p
              className="
              text-white/70
              leading-8
              text-[16px]
              "
            >
              Building strong concepts, disciplined study habits,
              and consistent academic success since 2003.
            </p>

            {/* TRUST TAGS */}
            <div className="mt-8 flex flex-wrap gap-3">

              <span
                className="
                bg-white/5
                border
                border-white/10
                px-4
                py-2
                rounded-full
                text-sm
                text-white/70
                "
              >
                Weekly Tests
              </span>

              <span
                className="
                bg-white/5
                border
                border-white/10
                px-4
                py-2
                rounded-full
                text-sm
                text-white/70
                "
              >
                Personal Attention
              </span>

              <span
                className="
                bg-white/5
                border
                border-white/10
                px-4
                py-2
                rounded-full
                text-sm
                text-white/70
                "
              >
                20+ Years Experience
              </span>

            </div>

          </motion.div>

          {/* QUICK LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
          >

            <h4
              className="
              text-2xl
              font-display
              text-white
              mb-7
              "
            >
              Quick Links
            </h4>

            <ul className="space-y-5">

              {links.map((link, i) => (

                <li key={i}>

                  <a
                    href={link.href}
                    className="
                    flex
                    items-center
                    gap-2
                    text-white/70
                    hover:text-accent
                    hover:translate-x-2
                    transition-all
                    duration-300
                    group
                    "
                  >

                    <ArrowUpRight
                      size={16}
                      className="
                      opacity-0
                      -translate-x-2
                      group-hover:opacity-100
                      group-hover:translate-x-0
                      transition-all
                      "
                    />

                    {link.name}

                  </a>

                </li>

              ))}

            </ul>

          </motion.div>

          {/* CONTACT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
          >

            <h4
              className="
              text-2xl
              font-display
              text-white
              mb-7
              "
            >
              Contact
            </h4>

            <div className="space-y-6">

              {/* ADDRESS */}
              <div className="flex gap-4">

                <div
                  className="
                  min-w-[45px]
                  h-[45px]
                  rounded-2xl
                  bg-accent/10
                  flex
                  items-center
                  justify-center
                  "
                >

                  <MapPin className="text-accent w-5 h-5" />

                </div>

                <div>

                  <p className="text-white/70 leading-7">

                    3rd Floor, Purushottam Mahal,
                    <br />

                    Beside Swaminarayan Clock Tower,
                    <br />

                    Near Jayhind Char Rasta,
                    <br />

                    Maninagar, Ahmedabad

                  </p>

                  {/* MAP BUTTON */}
                  <a
                    href="https://maps.app.goo.gl/zXtXWsDPWKjRSEaa8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    inline-flex
                    items-center
                    gap-2
                    mt-4
                    text-accent
                    hover:text-orange-300
                    transition-all
                    text-sm
                    "
                  >

                    View On Google Maps

                    <ArrowUpRight size={15} />

                  </a>

                </div>

              </div>

              {/* PHONE */}
              <div className="flex gap-4 items-center">

                <div
                  className="
                  min-w-[45px]
                  h-[45px]
                  rounded-2xl
                  bg-accent/10
                  flex
                  items-center
                  justify-center
                  "
                >

                  <Phone className="text-accent w-5 h-5" />

                </div>

                <a
                  href="tel:+919825249281"
                  className="
                  text-white/70
                  hover:text-accent
                  transition-all
                  text-lg
                  "
                >
                  +91 98252 49281
                </a>

              </div>

            </div>

          </motion.div>

          {/* HOURS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
          >

            <h4
              className="
              text-2xl
              font-display
              text-white
              mb-7
              "
            >
              Academy Hours
            </h4>

            <div className="space-y-5">

              <div className="flex gap-4 items-start">

                <div
                  className="
                  min-w-[45px]
                  h-[45px]
                  rounded-2xl
                  bg-accent/10
                  flex
                  items-center
                  justify-center
                  "
                >

                  <Clock3 className="text-accent w-5 h-5" />

                </div>

                <div>

                  <p className="text-white text-lg">
                    Mon - Sat
                  </p>

                  <p className="text-white/70">
                    3:00 PM - 9:00 PM
                  </p>

                </div>

              </div>

              {/* ADMISSION BOX */}
              <div
                className="
                mt-6
                p-5
                rounded-3xl
                bg-white/5
                border
                border-white/10
                "
              >

                <p className="text-accent font-semibold text-lg">
                  Admissions Open
                </p>

                <p
                  className="
                  text-white/70
                  mt-2
                  text-sm
                  leading-7
                  "
                >
                  Board Exam Focused Coaching
                  For Class 11 & 12 Commerce Students.
                </p>

              </div>

            </div>

          </motion.div>

        </div>

        {/* CTA BAR */}
        <div
          className="
          mt-20
          rounded-[36px]
          border
          border-white/10
          bg-white/[0.05]
          backdrop-blur-2xl
          p-10
          flex
          flex-col
          lg:flex-row
          items-center
          justify-between
          gap-8
          "
        >

          <div>

            <h3
              className="
              text-3xl
              md:text-4xl
              font-black
              text-white
              "
            >
              Ready To Join Ahmedabad’s
              <span className="text-accent">
                {" "}Best Commerce Academy?
              </span>
            </h3>

            <p className="text-white/60 mt-4 text-lg">
              Admissions Open For Class 11 & 12 Commerce Students.
            </p>

          </div>

          <a
            href="https://wa.me/919825249281"
            target="_blank"
            rel="noopener noreferrer"
            className="
            inline-flex
            items-center
            gap-3
            bg-accent
            text-white
            px-8
            py-5
            rounded-2xl
            font-bold
            text-lg
            hover:scale-105
            transition-all
            duration-300
            shadow-[0_15px_40px_rgba(255,122,26,0.35)]
            "
          >

            <MessageCircle className="w-6 h-6" />

            Apply Now

          </a>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 my-14" />

        {/* BOTTOM */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-5
          text-center
          "
        >

          <div>

            <p className="text-white/60 text-sm md:text-base">
              © 2026 Dattu Sir’s Commerce Academy.
              All Rights Reserved.
            </p>

            <p className="text-white/40 text-sm mt-2">
              Built With ❤️ For Future Commerce Leaders
            </p>

          </div>

          {/* GOOGLE REVIEW */}
          <div
            className="
            flex
            items-center
            gap-3
            bg-white/5
            border
            border-white/10
            px-5
            py-3
            rounded-full
            "
          >

            <div className="flex gap-1">

              {[1,2,3,4,5].map((star) => (

                <Star
                  key={star}
                  className="
                  w-4
                  h-4
                  text-yellow-400
                  fill-yellow-400
                  "
                />

              ))}

            </div>

            <p className="text-white/70 text-sm">
              5.0 Rated By Students & Parents
            </p>

          </div>

          {/* CREDIT */}
          <p className="text-white/60 text-sm md:text-base">

            Website By{" "}

            <a
              href="https://vardhmancreativestudio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
              text-accent
              hover:text-orange-300
              transition-all
              "
            >
              Vardhman Creative Studio
            </a>

          </p>

        </motion.div>

      </div>

    </footer>

  );

}