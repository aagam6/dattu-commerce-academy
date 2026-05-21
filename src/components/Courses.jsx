import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Calculator,
  TrendingUp,
  FileText,
  Target,
  Award,
} from 'lucide-react';

export default function Courses() {

  const courses = [
    {
      icon: GraduationCap,
      title: 'Class 11 Commerce',
      desc: 'Strong foundation building with complete concept clarity and regular practice.',
      points: ['Accounts', 'Economics', 'Business Studies'],
    },

    {
      icon: Calculator,
      title: 'Class 12 Commerce',
      desc: 'Board-focused preparation with smart writing techniques and revisions.',
      points: ['Accounts', 'Statistics', 'Economics'],
    },

    {
      icon: TrendingUp,
      title: 'Accounts Mastery',
      desc: 'Special focus on scoring high marks in Accountancy with practical understanding.',
      points: ['Journal', 'Ledger', 'Final Accounts'],
    },

    {
      icon: FileText,
      title: 'Board Preparation',
      desc: 'Weekly tests, paper solving, revisions, and exam-oriented guidance.',
      points: ['Mock Tests', 'Paper Practice', 'Time Management'],
    },

    {
      icon: Target,
      title: 'Statistics Coaching',
      desc: 'Easy learning methods for Statistics with step-by-step explanation.',
      points: ['Probability', 'Regression', 'Distribution'],
    },

    {
      icon: Award,
      title: 'Result-Oriented Learning',
      desc: 'Consistent toppers and strong academic performance every year.',
      points: ['Top Results', 'Personal Attention', 'Mentorship'],
    },
  ];

  return (

    <section
      id="courses"
      className="
      section
      bg-gradient-to-b
      from-[#061547]
      via-[#071A52]
      to-[#061547]
      py-24
      "
    >

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >

        <h2
          className="
          text-4xl
          md:text-6xl
          font-display
          font-bold
          text-white
          mb-4
          "
        >

          Our <span className="text-accent">Courses</span>

        </h2>

        <p
          className="
          text-white/70
          text-base
          md:text-xl
          max-w-3xl
          mx-auto
          "
        >

          Complete Commerce Coaching For Class 11 & 12 Students With Strong Concepts, Weekly Tests, And Board Preparation.

        </p>

      </motion.div>

      {/* Cards */}
      <div
        className="
        max-w-7xl
        mx-auto
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-8
        "
      >

        {courses.map((course, i) => {

          const Icon = course.icon;

          return (

            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              p-8
              group
              "
            >

              {/* Glow */}
              <div
                className="
                absolute
                top-0
                right-0
                w-40
                h-40
                bg-accent/10
                blur-3xl
                rounded-full
                group-hover:bg-accent/20
                transition-all
                duration-500
                "
              />

              {/* Icon */}
              <div
                className="
                relative
                z-10
                w-20
                h-20
                rounded-2xl
                bg-accent/10
                border
                border-accent/20
                flex
                items-center
                justify-center
                mb-6
                group-hover:bg-accent
                transition-all
                duration-300
                "
              >

                <Icon
                  className="
                  w-10
                  h-10
                  text-accent
                  group-hover:text-white
                  transition-all
                  duration-300
                  "
                />

              </div>

              {/* Title */}
              <h3
                className="
                relative
                z-10
                text-2xl
                font-display
                font-bold
                text-white
                mb-4
                "
              >

                {course.title}

              </h3>

              {/* Desc */}
              <p
                className="
                relative
                z-10
                text-white/70
                leading-relaxed
                mb-6
                "
              >

                {course.desc}

              </p>

              {/* Points */}
              <div className="relative z-10 space-y-3">

                {course.points.map((point, idx) => (

                  <div
                    key={idx}
                    className="
                    flex
                    items-center
                    gap-3
                    text-white/80
                    "
                  >

                    <div
                      className="
                      w-2.5
                      h-2.5
                      rounded-full
                      bg-accent
                      "
                    />

                    <span>{point}</span>

                  </div>

                ))}

              </div>

            </motion.div>

          );
        })}

      </div>

    </section>

  );
}