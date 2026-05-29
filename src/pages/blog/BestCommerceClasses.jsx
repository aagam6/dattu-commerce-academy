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
  Calendar,
  Smile,
  Target,
  Award,
  BookMarked
} from 'lucide-react';

export default function BestCommerceClasses() {
  const features = [
    'Experienced Commerce Faculty',
    'Weekly Tests & Performance Tracking',
    'Accounts & Statistics Special Guidance',
    'Personal Attention For Every Student',
    'Board Exam Focused Preparation',
    'Trusted By 20,000+ Parents',
  ];

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Dattu Sir's Commerce Academy",
    "description": "Top-rated commerce coaching institute in Ahmedabad providing expert guidance for Class 11 and 12 students in Accounts, Statistics, and Board Exams.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ahmedabad",
      "addressRegion": "Gujarat",
      "addressCountry": "IN"
    },
    "url": "https://dattusiracademy.com",
    "sameAs": [
      "https://www.facebook.com/dattusir",
      "https://www.instagram.com/dattusir"
    ]
  };

  return (
    <>
      <Helmet>
        <title>Best Commerce Classes In Ahmedabad | Dattu Sir's Commerce Academy</title>
        <meta
          name="description"
          content="Looking for the best commerce classes in Ahmedabad? Dattu Sir's Commerce Academy provides expert coaching for Class 11 & 12 Commerce students with Accounts, Statistics, Weekly Tests & Board Preparation."
        />
        <meta
          name="keywords"
          content="Best Commerce Classes Ahmedabad, Commerce Coaching Ahmedabad, Class 11 Commerce Tuition, Class 12 Commerce Coaching, Accounts Coaching Ahmedabad, Statistics Coaching Ahmedabad, Commerce Classes Maninagar"
        />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden bg-[#061547] py-28 px-6">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/20 blur-[140px] rounded-full" aria-hidden="true"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 blur-[140px] rounded-full" aria-hidden="true"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-xl px-6 py-3 rounded-full mb-8"
          >
            <Trophy className="text-accent w-5 h-5" aria-hidden="true" />
            <span className="text-accent font-semibold">Trusted Since 2003</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* LEFT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-5xl md:text-7xl font-black leading-tight text-white mb-8">
                Best <span className="text-accent">Commerce Classes</span>
                <br /> In Ahmedabad
              </h1>

              <div className="w-28 h-1 bg-accent rounded-full mb-8" aria-hidden="true"></div>

              <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10">
                Dattu Sir’s Commerce Academy is one of Ahmedabad’s trusted coaching institutes for Class 11 & 12 Commerce students. We focus on concept clarity, weekly tests, Accounts, Statistics, and complete board exam preparation.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-12">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-4">
                    <CheckCircle className="text-accent w-5 h-5 flex-shrink-0" aria-hidden="true" />
                    <span className="text-white/80 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-5 mb-8">
                <a
                  href="https://wa.me/919825249281"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-accent text-white px-8 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-[0_15px_40px_rgba(255,122,26,0.35)]"
                >
                  <MessageCircle className="w-6 h-6" aria-hidden="true" />
                  Contact On WhatsApp
                </a>
                <a
                  href="/"
                  className="inline-flex items-center justify-center border border-white/10 bg-white/5 backdrop-blur-xl text-white px-8 py-5 rounded-2xl font-bold text-lg hover:border-accent/50 hover:bg-white/10 transition-all duration-300"
                >
                  Visit Homepage
                </a>
              </div>

              <p className="text-white/50 text-sm md:text-base font-medium tracking-wide">
                Trusted by 20,000+ Parents & 10,000+ Students Across Ahmedabad Since 2003
              </p>
            </motion.div>

            {/* RIGHT SIDE (STATS) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl p-10 overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-accent/20 blur-[80px] rounded-full" aria-hidden="true"></div>

                <div className="grid grid-cols-2 gap-6 relative z-10">
                  <div className="rounded-3xl p-6 md:p-8 text-center bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                    <Users className="text-accent w-10 h-10 mx-auto mb-5" aria-hidden="true" />
                    <h3 className="text-4xl md:text-5xl font-black text-white mb-3">10,000+</h3>
                    <p className="text-white/70 font-medium">Successful Students</p>
                  </div>
                  <div className="rounded-3xl p-6 md:p-8 text-center bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                    <Calendar className="text-accent w-10 h-10 mx-auto mb-5" aria-hidden="true" />
                    <h3 className="text-4xl md:text-5xl font-black text-white mb-3">20+</h3>
                    <p className="text-white/70 font-medium">Years Experience</p>
                  </div>
                  <div className="rounded-3xl p-6 md:p-8 text-center bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                    <Smile className="text-accent w-10 h-10 mx-auto mb-5" aria-hidden="true" />
                    <h3 className="text-4xl md:text-5xl font-black text-white mb-3">20,000+</h3>
                    <p className="text-white/70 font-medium">Happy Parents</p>
                  </div>
                  <div className="rounded-3xl p-6 md:p-8 text-center bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                    <Trophy className="text-accent w-10 h-10 mx-auto mb-5" aria-hidden="true" />
                    <h3 className="text-4xl md:text-5xl font-black text-white mb-3">100%</h3>
                    <p className="text-white/70 font-medium">Result Focus</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- NEW DETAILED SEO TEXT SECTION --- */}
      <section className="bg-[#04113A] py-24 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
              Why Dattu Sir's Commerce Academy is the <span className="text-accent">Top Choice in Ahmedabad?</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              When it comes to building a strong foundation in commerce, finding the right guidance makes all the difference. With over two decades of legacy, we have established ourselves as the premier destination for Class 11 and 12 commerce coaching (GSEB & CBSE boards).
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Box 1 */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300">
              <BookMarked className="text-accent w-10 h-10 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Master Core Subjects</h3>
              <p className="text-white/60 leading-relaxed">
                We specialize in making complex subjects like <strong>Accountancy (Accounts)</strong> and <strong>Statistics</strong> exceptionally easy to understand. Our unique teaching methodology ensures that students don't just memorize, but logically understand every concept.
              </p>
            </div>

            {/* Box 2 */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300">
              <Target className="text-accent w-10 h-10 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Board Exam Strategy</h3>
              <p className="text-white/60 leading-relaxed">
                Scoring high in Class 12 board exams requires strategy. We provide comprehensive study materials, strictly adhere to the latest GSEB and CBSE syllabus patterns, and conduct rigorous mock exams to eliminate exam fear.
              </p>
            </div>

            {/* Box 3 */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300">
              <Award className="text-accent w-10 h-10 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Proven Track Record</h3>
              <p className="text-white/60 leading-relaxed">
                Our results speak for themselves. Year after year, our students achieve top state and city ranks. We take pride in our history of producing toppers and helping thousands of students secure admission into premium colleges.
              </p>
            </div>

          </div>

          <div className="mt-16 bg-gradient-to-r from-accent/10 to-transparent border-l-4 border-accent p-8 rounded-r-2xl">
            <h3 className="text-2xl font-bold text-white mb-3">Join the Best Commerce Tuition Near You</h3>
            <p className="text-white/70 leading-relaxed">
              Located conveniently in Ahmedabad, our academy provides a distraction-free, highly competitive, and supportive environment. Whether you are struggling with journal entries, balance sheets, or probability, Dattu Sir and the expert faculty are here to mentor you toward a perfect 100/100 score. 
            </p>
          </div>

        </div>
      </section>
    </>
  );
}