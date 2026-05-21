import React from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  BookOpen,
  Target,
  Users,
  Zap,
  TrendingUp,
  Award,
  ClipboardCheck,
} from 'lucide-react';

export default function WhyChooseUs() {

  const features = [
    {
      icon: Brain,
      title: 'Concept Clarity',
      desc: 'Easy and deep understanding of every commerce concept with smart teaching methods.',
    },

    {
      icon: BookOpen,
      title: 'Regular Practice',
      desc: 'Daily writing practice, revisions, and homework for strong preparation.',
    },

    {
      icon: ClipboardCheck,
      title: 'Weekly Tests',
      desc: 'Regular tests and paper solving sessions to improve confidence and performance.',
    },

    {
      icon: Target,
      title: 'Exam-Oriented',
      desc: 'Board-focused preparation with smart strategies and proper guidance.',
    },

    {
      icon: Users,
      title: 'Personal Attention',
      desc: 'Every student receives individual guidance and doubt solving support.',
    },

    {
      icon: Award,
      title: '20+ Years Experience',
      desc: 'Trusted commerce coaching with years of academic excellence and toppers.',
    },

    {
      icon: Zap,
      title: 'Discipline & Guidance',
      desc: 'Structured study plans with motivation, consistency, and discipline.',
    },

    {
      icon: TrendingUp,
      title: 'Excellent Results',
      desc: 'Strong concepts and regular practice help students achieve better scores.',
    },
  ];

  return (

    <section
      className="
      relative
      overflow-hidden
      py-24
      px-6
      bg-gradient-to-b
      from-[#04113A]
      via-[#061547]
      to-[#071A52]
      "
    >

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
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
            mb-5
            "
          >

            Why <span className="text-accent">Choose Us</span>

          </h2>

          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-5" />

          <p
            className="
            text-white/70
            text-base
            md:text-xl
            leading-relaxed
            max-w-3xl
            mx-auto
            "
          >

            Building Strong Commerce Foundations With Smart Learning,
            Personal Attention, And Consistent Academic Results.

          </p>

        </motion.div>

        {/* Cards */}
        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-8
          "
        >

          {features.map((feature, i) => {

            const Icon = feature.icon;

            return (

              <motion.div
                key={i}

                initial={{
                  opacity: 0,
                  y: 40,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                }}

                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}

                className="
                relative
                overflow-hidden
                rounded-[30px]
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                p-8
                group
                shadow-[0_10px_30px_rgba(0,0,0,0.25)]
                hover:shadow-[0_20px_50px_rgba(255,122,26,0.20)]
                transition-all
                duration-500
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
                  leading-snug
                  "
                >

                  {feature.title}

                </h3>

                {/* Description */}
                <p
                  className="
                  relative
                  z-10
                  text-white/70
                  text-base
                  leading-relaxed
                  "
                >

                  {feature.desc}

                </p>

              </motion.div>

            );
          })}

        </div>

      </div>

    </section>

  );
}