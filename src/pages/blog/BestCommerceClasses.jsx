import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Trophy,
  CheckCircle,
  BarChart3,
  Users,
  MessageCircle,
} from 'lucide-react';

export default function BestCommerceClasses() {

  const features = [
    'Experienced Commerce Faculty',
    'Weekly Tests & Performance Tracking',
    'Accounts & Statistics Special Guidance',
    'Personal Attention For Every Student',
    'Board Exam Focused Preparation',
    'Trusted By Thousands Of Students',
  ];

  return (

    <>
    
      {/* SEO */}
      <Helmet>

        <title>
          Best Commerce Classes In Ahmedabad | Dattu Sir's Commerce Academy
        </title>

        <meta
          name="description"
          content="
          Looking for the best commerce classes in Ahmedabad?
          Dattu Sir's Commerce Academy provides expert coaching
          for Class 11 & 12 Commerce students with Accounts,
          Statistics, Weekly Tests & Board Preparation.
          "
        />

        <meta
          name="keywords"
          content="
          Best Commerce Classes Ahmedabad,
          Commerce Coaching Ahmedabad,
          Class 11 Commerce Tuition,
          Class 12 Commerce Coaching,
          Accounts Coaching Ahmedabad,
          Statistics Coaching Ahmedabad,
          Commerce Classes Maninagar
          "
        />

      </Helmet>

      <section
        className="
        relative
        overflow-hidden
        bg-[#061547]
        py-28
        px-6
        "
      >

        {/* GLOW EFFECTS */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/20 blur-[140px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 blur-[140px] rounded-full"></div>

        <div className="max-w-7xl mx-auto relative z-10">

          {/* TOP TAG */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
            inline-flex
            items-center
            gap-3
            bg-white/5
            border
            border-white/10
            backdrop-blur-xl
            px-6
            py-3
            rounded-full
            mb-8
            "
          >

            <Trophy className="text-accent w-5 h-5" />

            <span className="text-accent font-semibold">
              Trusted Since 2003
            </span>

          </motion.div>

          {/* HERO */}
          <div
            className="
            grid
            lg:grid-cols-2
            gap-16
            items-center
            "
          >

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >

              <h1
                className="
                text-5xl
                md:text-7xl
                font-black
                leading-tight
                text-white
                mb-8
                "
              >

                Best
                <span className="text-accent">
                  {" "}Commerce Classes
                </span>

                <br />

                In Ahmedabad

              </h1>

              <div className="w-28 h-1 bg-accent rounded-full mb-8"></div>

              <p
                className="
                text-white/70
                text-lg
                md:text-xl
                leading-relaxed
                mb-10
                "
              >
                Dattu Sir’s Commerce Academy is one of Ahmedabad’s
                trusted coaching institutes for Class 11 & 12 Commerce students.
                We focus on concept clarity, weekly tests, Accounts,
                Statistics, and complete board exam preparation.
              </p>

              {/* FEATURES */}
              <div
                className="
                grid
                sm:grid-cols-2
                gap-4
                mb-12
                "
              >

                {features.map((feature, i) => (

                  <div
                    key={i}
                    className="
                    flex
                    items-center
                    gap-3
                    bg-white/5
                    border
                    border-white/10
                    rounded-2xl
                    px-4
                    py-4
                    "
                  >

                    <CheckCircle className="text-accent w-5 h-5" />

                    <span className="text-white/80 text-sm">
                      {feature}
                    </span>

                  </div>

                ))}

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

                <a
                  href="https://wa.me/919825249281"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  inline-flex
                  items-center
                  justify-center
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

                  Contact On WhatsApp

                </a>

                <a
                  href="/"
                  className="
                  inline-flex
                  items-center
                  justify-center
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  text-white
                  px-8
                  py-5
                  rounded-2xl
                  font-bold
                  text-lg
                  hover:border-accent/50
                  hover:bg-white/10
                  transition-all
                  duration-300
                  "
                >

                  Visit Homepage

                </a>

              </div>

            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >

              {/* MAIN CARD */}
              <div
                className="
                relative
                rounded-[40px]
                border
                border-white/10
                bg-white/5
                backdrop-blur-2xl
                p-10
                overflow-hidden
                "
              >

                <div className="absolute top-0 right-0 w-40 h-40 bg-accent/20 blur-[80px] rounded-full"></div>

                <div className="grid grid-cols-2 gap-6">

                  <div className="card-premium rounded-3xl p-8 text-center">

                    <Users className="text-accent w-10 h-10 mx-auto mb-5" />

                    <h3 className="text-5xl font-black text-white mb-3">
                      5000+
                    </h3>

                    <p className="text-white/70">
                      Students
                    </p>

                  </div>

                  <div className="card-premium rounded-3xl p-8 text-center">

                    <BookOpen className="text-accent w-10 h-10 mx-auto mb-5" />

                    <h3 className="text-5xl font-black text-white mb-3">
                      20+
                    </h3>

                    <p className="text-white/70">
                      Years Experience
                    </p>

                  </div>

                  <div className="card-premium rounded-3xl p-8 text-center">

                    <BarChart3 className="text-accent w-10 h-10 mx-auto mb-5" />

                    <h3 className="text-5xl font-black text-white mb-3">
                      100%
                    </h3>

                    <p className="text-white/70">
                      Result Focused
                    </p>

                  </div>

                  <div className="card-premium rounded-3xl p-8 text-center">

                    <Trophy className="text-accent w-10 h-10 mx-auto mb-5" />

                    <h3 className="text-5xl font-black text-white mb-3">
                      Top
                    </h3>

                    <p className="text-white/70">
                      Commerce Coaching
                    </p>

                  </div>

                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

    </>

  );

}