import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      id="about"
      className="section pt-24 md:pt-32 bg-gradient-to-b from-[#071A52] to-[#061547]"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-title"
        >

          <h2 className="text-white text-3xl md:text-5xl">
            About <span className="text-accent">Dattu Sir's Academy</span>
          </h2>

          <p className="text-white/70 mt-3 text-sm md:text-lg">
            A Legacy of Excellence and Trust
          </p>

        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center mt-10 md:mt-16">

          {/* LEFT SIDE IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >

            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[430px] lg:h-[430px]">

              {/* Glow */}
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 bg-accent opacity-20 rounded-full blur-3xl"
              />

              {/* Image */}
              <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-[5px] border-accent shadow-[0_0_80px_rgba(255,122,26,0.45)]">

                <img
                  src="/dattu-sir.jpg"
                  alt="Dattu Sir"
                  className="w-full h-full object-cover"
                />

              </div>

              {/* TOP BADGE */}
              <div
                className="
                absolute
                top-2
                right-2
                lg:top-5
                lg:right-5
                z-30
                bg-accent
                text-white
                rounded-full
                w-20
                h-20
                lg:w-28
                lg:h-28
                border-4
                border-[#061547]
                flex
                items-center
                justify-center
                shadow-[0_0_35px_rgba(255,122,26,0.55)]
                "
              >

                <div className="text-center leading-tight">

                  <p className="text-sm lg:text-lg font-bold">
                    20+
                  </p>

                  <p className="text-[9px] lg:text-xs font-semibold">
                    Years
                  </p>

                  <p className="text-[9px] lg:text-xs font-semibold">
                    Excellence
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

          {/* RIGHT SIDE CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <h3 className="text-3xl md:text-4xl lg:text-5xl font-display mb-6 leading-tight text-center lg:text-left">

              <span className="text-white">
                Meet
              </span>

              {' '}

              <span className="text-accent">
                Dattu Sir
              </span>

            </h3>

            <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed mb-8 text-center lg:text-left">

              Education isn't just about completing the syllabus —
              it's about building confidence, strong concepts,
              and guiding students toward consistent success.

              <br /><br />

              At Dattu Sir Commerce Academy, every student receives
              personal attention, disciplined preparation,
              and result-oriented mentorship.

            </p>

            {/* Quote Box */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="card-premium mb-10 text-center lg:text-left"
            >

              <p className="text-xl md:text-2xl font-display text-accent italic mb-4 leading-relaxed">

                "Success in commerce begins with strong concepts
                and disciplined practice."

              </p>

              <p className="text-white/70 text-sm md:text-base">
                — Dattu Sir, Founder & Accounts Faculty
              </p>

            </motion.div>

            {/* Features */}
            <div className="space-y-6 max-w-xl mx-auto lg:mx-0">

              {/* Feature */}
              <div className="flex items-start gap-4">

                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 shadow-lg">
                  ✓
                </div>

                <div>

                  <h4 className="text-lg md:text-xl font-bold text-white mb-2">
                    Concept Clarity First
                  </h4>

                  <p className="text-white/70 text-sm md:text-base">
                    Strong fundamentals are built before exam preparation.
                  </p>

                </div>

              </div>

              {/* Feature */}
              <div className="flex items-start gap-4">

                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 shadow-lg">
                  ✓
                </div>

                <div>

                  <h4 className="text-lg md:text-xl font-bold text-white mb-2">
                    Personal Attention
                  </h4>

                  <p className="text-white/70 text-sm md:text-base">
                    Every student receives individual guidance and support.
                  </p>

                </div>

              </div>

              {/* Feature */}
              <div className="flex items-start gap-4">

                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 shadow-lg">
                  ✓
                </div>

                <div>

                  <h4 className="text-lg md:text-xl font-bold text-white mb-2">
                    Result-Oriented Teaching
                  </h4>

                  <p className="text-white/70 text-sm md:text-base">
                    20+ years of consistent academic excellence and toppers.
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}