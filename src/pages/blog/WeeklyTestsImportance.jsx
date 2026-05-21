import React from 'react';

import { Helmet } from 'react-helmet-async';

import { motion } from 'framer-motion';

import {
  ClipboardCheck,
  TrendingUp,
  Trophy,
  Target,
  CheckCircle,
  MessageCircle,
} from 'lucide-react';

export default function WeeklyTestsImportance() {

  const benefits = [
    'Improves Writing Speed',
    'Builds Exam Confidence',
    'Helps In Time Management',
    'Identifies Weak Topics Early',
    'Creates Consistent Study Habit',
    'Boosts Board Exam Performance',
  ];

  return (

    <>

      {/* SEO */}
      <Helmet>

        <title>
          Importance Of Weekly Tests For Commerce Students | Ahmedabad
        </title>

        <meta
          name="description"
          content="
          Discover why weekly tests are important for Class 11 & 12 Commerce students.
          Dattu Sir's Commerce Academy Ahmedabad helps students improve confidence,
          time management, writing practice, and board exam performance.
          "
        />

        <meta
          name="keywords"
          content="
          Weekly Tests Commerce Coaching,
          Commerce Coaching Ahmedabad,
          Board Exam Preparation,
          Class 12 Commerce Tips,
          Weekly Test Importance,
          Commerce Tuition Ahmedabad
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

        {/* BACKGROUND GLOW */}
        <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-accent/20 blur-[150px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-blue-500/20 blur-[150px] rounded-full"></div>

        <div className="max-w-7xl mx-auto relative z-10">

          {/* TOP TAG */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
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

            <ClipboardCheck className="text-accent w-5 h-5" />

            <span className="text-accent font-semibold">
              Weekly Test System
            </span>

          </motion.div>

          {/* MAIN */}
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

                Why
                <span className="text-accent">
                  {" "}Weekly Tests
                </span>

                <br />

                Are Important

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
                Weekly tests help Commerce students improve writing speed,
                confidence, revision habits, and board exam preparation.
                At Dattu Sir’s Commerce Academy Ahmedabad,
                regular testing is a key part of academic success.
              </p>

              {/* BENEFITS */}
              <div
                className="
                grid
                sm:grid-cols-2
                gap-4
                mb-12
                "
              >

                {benefits.map((benefit, i) => (

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
                      {benefit}
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

                  Join Weekly Test Batch

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

                  Back To Homepage

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

              <div
                className="
                rounded-[40px]
                border
                border-white/10
                bg-white/5
                backdrop-blur-2xl
                p-10
                overflow-hidden
                "
              >

                <div className="absolute top-0 right-0 w-44 h-44 bg-accent/20 blur-[90px] rounded-full"></div>

                <div className="space-y-6">

                  {/* CARD */}
                  <div className="card-premium rounded-3xl p-8">

                    <div className="flex items-center gap-4 mb-5">

                      <Target className="text-accent w-10 h-10" />

                      <h3 className="text-2xl font-bold text-white">
                        Time Management
                      </h3>

                    </div>

                    <p className="text-white/70 leading-8">
                      Weekly tests train students to complete papers
                      within proper exam timing and improve writing speed.
                    </p>

                  </div>

                  {/* CARD */}
                  <div className="card-premium rounded-3xl p-8">

                    <div className="flex items-center gap-4 mb-5">

                      <TrendingUp className="text-accent w-10 h-10" />

                      <h3 className="text-2xl font-bold text-white">
                        Performance Improvement
                      </h3>

                    </div>

                    <p className="text-white/70 leading-8">
                      Regular testing helps identify weak areas early
                      and improves overall academic performance.
                    </p>

                  </div>

                  {/* CARD */}
                  <div className="card-premium rounded-3xl p-8">

                    <div className="flex items-center gap-4 mb-5">

                      <Trophy className="text-accent w-10 h-10" />

                      <h3 className="text-2xl font-bold text-white">
                        Board Exam Confidence
                      </h3>

                    </div>

                    <p className="text-white/70 leading-8">
                      Students become more confident and disciplined
                      before final board examinations through weekly practice.
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