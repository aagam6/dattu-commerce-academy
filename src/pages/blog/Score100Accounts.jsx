import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

import {
  Calculator,
  Trophy,
  CheckCircle,
  BookOpen,
  Target,
  MessageCircle,
} from 'lucide-react';

export default function Score100Accounts() {

  const tips = [
    'Understand Journal & Ledger Concepts',
    'Practice Financial Statements Daily',
    'Solve Previous Board Papers',
    'Improve Presentation & Formats',
    'Focus On Rectification & Final Accounts',
    'Weekly Revision & Mock Tests',
  ];

  return (

    <>

      {/* SEO */}
      <Helmet>

        <title>
          How To Score 100 In Accounts | Commerce Coaching Ahmedabad
        </title>

        <meta
          name="description"
          content="
          Learn how to score 100 marks in Accountancy with expert guidance
          from Dattu Sir's Commerce Academy Ahmedabad.
          Accounts preparation tips, practice methods,
          board exam strategy & weekly test system.
          "
        />

        <meta
          name="keywords"
          content="
          Score 100 In Accounts,
          Accountancy Preparation Tips,
          Accounts Coaching Ahmedabad,
          Commerce Coaching Ahmedabad,
          Class 12 Accounts Tips,
          Board Exam Preparation Accounts
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

          {/* TAG */}
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

            <Calculator className="text-accent w-5 h-5" />

            <span className="text-accent font-semibold">
              Accounts Preparation Guide
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

                How To Score
                <span className="text-accent">
                  {" "}100 Marks
                </span>

                <br />

                In Accounts

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
                Scoring high marks in Accountancy requires concept clarity,
                daily practice, proper presentation, and smart revision.
                At Dattu Sir’s Commerce Academy Ahmedabad,
                students receive expert guidance for board exam success.
              </p>

              {/* TIPS */}
              <div
                className="
                grid
                sm:grid-cols-2
                gap-4
                mb-12
                "
              >

                {tips.map((tip, i) => (

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
                      {tip}
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

                  Join Accounts Coaching

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
                        Daily Practice
                      </h3>

                    </div>

                    <p className="text-white/70 leading-8">
                      Consistent practice of journal entries,
                      ledger posting, and financial statements
                      improves speed and accuracy.
                    </p>

                  </div>

                  {/* CARD */}
                  <div className="card-premium rounded-3xl p-8">

                    <div className="flex items-center gap-4 mb-5">

                      <BookOpen className="text-accent w-10 h-10" />

                      <h3 className="text-2xl font-bold text-white">
                        Smart Revision
                      </h3>

                    </div>

                    <p className="text-white/70 leading-8">
                      Weekly revisions and board pattern mock tests
                      help students gain confidence before exams.
                    </p>

                  </div>

                  {/* CARD */}
                  <div className="card-premium rounded-3xl p-8">

                    <div className="flex items-center gap-4 mb-5">

                      <Trophy className="text-accent w-10 h-10" />

                      <h3 className="text-2xl font-bold text-white">
                        Board Exam Strategy
                      </h3>

                    </div>

                    <p className="text-white/70 leading-8">
                      Proper presentation, time management,
                      and conceptual clarity are the keys
                      to scoring 100 marks in Accounts.
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