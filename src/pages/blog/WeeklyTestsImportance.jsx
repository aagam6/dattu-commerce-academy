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
  Clock,
  Brain,
  BarChart
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

  // SEO: Article Schema Markup
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Importance Of Weekly Tests For Commerce Students | Ahmedabad",
    "description": "Discover why weekly tests are important for Class 11 & 12 Commerce students. Dattu Sir's Commerce Academy Ahmedabad helps students improve confidence, time management, writing practice, and board exam performance.",
    "author": {
      "@type": "Organization",
      "name": "Dattu Sir's Commerce Academy"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Dattu Sir's Commerce Academy",
      "logo": {
        "@type": "ImageObject",
        "url": "https://dattusiracademy.com/logo.png" // Update with actual logo URL
      }
    }
  };

  return (
    <>
      {/* --- ADVANCED SEO HEAD --- */}
      <Helmet>
        <title>Importance Of Weekly Tests For Commerce Students | Ahmedabad</title>
        <meta
          name="description"
          content="Discover why weekly tests are important for Class 11 & 12 Commerce students. Dattu Sir's Commerce Academy Ahmedabad helps students improve confidence, time management, writing practice, and board exam performance."
        />
        <meta
          name="keywords"
          content="Weekly Tests Commerce Coaching, Commerce Coaching Ahmedabad, Board Exam Preparation, Class 12 Commerce Tips, Weekly Test Importance, Commerce Tuition Ahmedabad, GSEB Board Tips, CBSE Time Management"
        />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden bg-[#061547] py-28 px-6">
        {/* BACKGROUND GLOW */}
        <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-accent/20 blur-[150px] rounded-full" aria-hidden="true"></div>
        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-blue-500/20 blur-[150px] rounded-full" aria-hidden="true"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* TOP TAG */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-xl px-6 py-3 rounded-full mb-8"
          >
            <ClipboardCheck className="text-accent w-5 h-5" aria-hidden="true" />
            <span className="text-accent font-semibold">
              Weekly Test System
            </span>
          </motion.div>

          {/* MAIN GRID */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* LEFT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-5xl md:text-7xl font-black leading-tight text-white mb-8">
                Why <span className="text-accent">Weekly Tests</span>
                <br /> Are Important
              </h1>

              <div className="w-28 h-1 bg-accent rounded-full mb-8" aria-hidden="true"></div>

              <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10">
                Weekly tests help Commerce students improve writing speed, confidence, revision habits, and board exam preparation. At Dattu Sir’s Commerce Academy Ahmedabad, regular testing is a key part of academic success.
              </p>

              {/* BENEFITS */}
              <div className="grid sm:grid-cols-2 gap-4 mb-12">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-4">
                    <CheckCircle className="text-accent w-5 h-5 flex-shrink-0" aria-hidden="true" />
                    <span className="text-white/80 text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-5">
                <a
                  href="https://wa.me/919825249281"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Join Weekly Test Batch via WhatsApp"
                  className="inline-flex items-center justify-center gap-3 bg-accent text-white px-8 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-[0_15px_40px_rgba(255,122,26,0.35)]"
                >
                  <MessageCircle className="w-6 h-6" aria-hidden="true" />
                  Join Weekly Test Batch
                </a>

                <a
                  href="/"
                  aria-label="Back to Homepage"
                  className="inline-flex items-center justify-center border border-white/10 bg-white/5 backdrop-blur-xl text-white px-8 py-5 rounded-2xl font-bold text-lg hover:border-accent/50 hover:bg-white/10 transition-all duration-300"
                >
                  Back To Homepage
                </a>
              </div>
            </motion.div>

            {/* RIGHT SIDE (CARDS) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl p-10 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-44 h-44 bg-accent/20 blur-[90px] rounded-full" aria-hidden="true"></div>

                <div className="space-y-6 relative z-10">
                  
                  {/* CARD 1 */}
                  <div className="card-premium rounded-3xl p-8 bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-4 mb-5">
                      <Target className="text-accent w-10 h-10" aria-hidden="true" />
                      <h3 className="text-2xl font-bold text-white">Time Management</h3>
                    </div>
                    <p className="text-white/70 leading-8">
                      Weekly tests train students to complete papers within proper exam timing and improve writing speed.
                    </p>
                  </div>

                  {/* CARD 2 */}
                  <div className="card-premium rounded-3xl p-8 bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-4 mb-5">
                      <TrendingUp className="text-accent w-10 h-10" aria-hidden="true" />
                      <h3 className="text-2xl font-bold text-white">Performance Improvement</h3>
                    </div>
                    <p className="text-white/70 leading-8">
                      Regular testing helps identify weak areas early and improves overall academic performance.
                    </p>
                  </div>

                  {/* CARD 3 */}
                  <div className="card-premium rounded-3xl p-8 bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-4 mb-5">
                      <Trophy className="text-accent w-10 h-10" aria-hidden="true" />
                      <h3 className="text-2xl font-bold text-white">Board Exam Confidence</h3>
                    </div>
                    <p className="text-white/70 leading-8">
                      Students become more confident and disciplined before final board examinations through weekly practice.
                    </p>
                  </div>

                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- DETAILED SEO CONTENT SECTION --- */}
      <section className="bg-[#04113A] py-24 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
              Why Consistent Evaluation is the <span className="text-accent">Secret to Board Success</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              Studying theory is only half the battle. For Class 11 and 12 Commerce students, the real challenge lies in applying that knowledge during a 3-hour exam. Our rigorous weekly test system at Dattu Sir's Commerce Academy ensures that students are perfectly tailored for GSEB and CBSE board patterns.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* SEO Box 1 */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300">
              <Brain className="text-accent w-10 h-10 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Beating Exam Anxiety</h3>
              <p className="text-white/60 leading-relaxed">
                Many students go blank during final exams due to nervousness. Taking a test every week familiarizes the brain with the examination environment, completely eliminating exam phobia and anxiety.
              </p>
            </div>

            {/* SEO Box 2 */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300">
              <Clock className="text-accent w-10 h-10 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Mastering the Clock</h3>
              <p className="text-white/60 leading-relaxed">
                Accountancy and Statistics papers are lengthy. Without practice, leaving a 10-mark question unattempted is common. Weekly tests build the muscle memory required to write fast, calculate accurately, and finish on time.
              </p>
            </div>

            {/* SEO Box 3 */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300">
              <BarChart className="text-accent w-10 h-10 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Tracking Progress</h3>
              <p className="text-white/60 leading-relaxed">
                You can't improve what you don't measure. Regular evaluation provides a clear performance graph to both students and parents. It helps in identifying weak chapters so we can provide special attention well before the finals.
              </p>
            </div>

          </div>

          <div className="mt-16 bg-gradient-to-r from-accent/10 to-transparent border-l-4 border-accent p-8 rounded-r-2xl">
            <h3 className="text-2xl font-bold text-white mb-3">Join Ahmedabad's Most Disciplined Coaching</h3>
            <p className="text-white/70 leading-relaxed">
              We don't just teach; we prepare you to perform. By writing 40+ tests before the actual board exams, our students naturally achieve 90+ marks. Experience the difference a structured test series can make to your career.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}