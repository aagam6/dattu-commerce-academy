import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  Calculator,
  Trophy,
  CheckCircle,
  BookOpen,
  Target,
  MessageCircle,
  PenTool,
  ClipboardList,
  TrendingUp
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

  // SEO: Article Schema Markup to help Google understand the content
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How To Score 100 In Accounts | Commerce Coaching Ahmedabad",
    "description": "Learn how to score 100 marks in Accountancy with expert guidance from Dattu Sir's Commerce Academy Ahmedabad. Accounts preparation tips, board exam strategy.",
    "author": {
      "@type": "Organization",
      "name": "Dattu Sir's Commerce Academy"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Dattu Sir's Commerce Academy",
      "logo": {
        "@type": "ImageObject",
        "url": "https://dattusiracademy.com/logo.png" // Update with your actual logo URL
      }
    }
  };

  return (
    <>
      {/* --- ADVANCED SEO HEAD --- */}
      <Helmet>
        <title>How To Score 100 In Accounts | Commerce Coaching Ahmedabad</title>
        <meta
          name="description"
          content="Learn how to score 100 marks in Accountancy with expert guidance from Dattu Sir's Commerce Academy Ahmedabad. Accounts preparation tips, practice methods, board exam strategy & weekly test system."
        />
        <meta
          name="keywords"
          content="Score 100 In Accounts, Accountancy Preparation Tips, Accounts Coaching Ahmedabad, Commerce Coaching Ahmedabad, Class 12 Accounts Tips, Board Exam Preparation Accounts, GSEB Accounts Tricks, CBSE Accounts Strategy"
        />
        {/* Injecting Schema Markup */}
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
          
          {/* TAG */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-xl px-6 py-3 rounded-full mb-8"
          >
            <Calculator className="text-accent w-5 h-5" aria-hidden="true" />
            <span className="text-accent font-semibold">
              Accounts Preparation Guide
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
                How To Score <span className="text-accent">100 Marks</span>
                <br /> In Accounts
              </h1>

              <div className="w-28 h-1 bg-accent rounded-full mb-8" aria-hidden="true"></div>

              <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10">
                Scoring high marks in Accountancy requires concept clarity, daily practice, proper presentation, and smart revision. At Dattu Sir’s Commerce Academy Ahmedabad, students receive expert guidance for board exam success.
              </p>

              {/* TIPS BULLETS */}
              <div className="grid sm:grid-cols-2 gap-4 mb-12">
                {tips.map((tip, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-4">
                    <CheckCircle className="text-accent w-5 h-5 flex-shrink-0" aria-hidden="true" />
                    <span className="text-white/80 text-sm font-medium">{tip}</span>
                  </div>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-5">
                <a
                  href="https://wa.me/919825249281"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Join Accounts Coaching via WhatsApp"
                  className="inline-flex items-center justify-center gap-3 bg-accent text-white px-8 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-[0_15px_40px_rgba(255,122,26,0.35)]"
                >
                  <MessageCircle className="w-6 h-6" aria-hidden="true" />
                  Join Accounts Coaching
                </a>

                <a
                  href="/"
                  aria-label="Go back to Homepage"
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
                      <h3 className="text-2xl font-bold text-white">Daily Practice</h3>
                    </div>
                    <p className="text-white/70 leading-8">
                      Consistent practice of journal entries, ledger posting, and financial statements improves speed and accuracy.
                    </p>
                  </div>

                  {/* CARD 2 */}
                  <div className="card-premium rounded-3xl p-8 bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-4 mb-5">
                      <BookOpen className="text-accent w-10 h-10" aria-hidden="true" />
                      <h3 className="text-2xl font-bold text-white">Smart Revision</h3>
                    </div>
                    <p className="text-white/70 leading-8">
                      Weekly revisions and board pattern mock tests help students gain confidence before exams.
                    </p>
                  </div>

                  {/* CARD 3 */}
                  <div className="card-premium rounded-3xl p-8 bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-4 mb-5">
                      <Trophy className="text-accent w-10 h-10" aria-hidden="true" />
                      <h3 className="text-2xl font-bold text-white">Board Exam Strategy</h3>
                    </div>
                    <p className="text-white/70 leading-8">
                      Proper presentation, time management, and conceptual clarity are the keys to scoring 100 marks in Accounts.
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
              Mastering Class 12 Accountancy: <span className="text-accent">The Roadmap to 100/100</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              Accountancy is the backbone of the Commerce stream. Many students fear the lengthy balance sheets and complex calculations, but with the right guidance at Dattu Sir's Commerce Academy, securing a perfect score is highly achievable. Here is the blueprint our toppers use for GSEB & CBSE board exams.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* SEO Box 1 */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300">
              <ClipboardList className="text-accent w-10 h-10 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Clear Your Concepts First</h3>
              <p className="text-white/60 leading-relaxed">
                Before jumping into long 8-mark questions, ensure your base is strong. Topics like Partnership Fundamentals, Share Capital, and Cash Flow require pure logic. Do not memorize formats; understand the "why" behind every debit and credit.
              </p>
            </div>

            {/* SEO Box 2 */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300">
              <PenTool className="text-accent w-10 h-10 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Presentation is Everything</h3>
              <p className="text-white/60 leading-relaxed">
                Board examiners look for clean work. Always draw proper ledger lines using a pencil. Clearly highlight your "Working Notes" at the bottom of your answer—they carry step marks. A neat balance sheet creates a great impression.
              </p>
            </div>

            {/* SEO Box 3 */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300">
              <TrendingUp className="text-accent w-10 h-10 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Mock Tests & Time Management</h3>
              <p className="text-white/60 leading-relaxed">
                The Accounts paper is notoriously lengthy. Solving past 5-year board papers under a strict 3-hour timer is crucial. At our academy, we conduct weekly mock tests to train students to finish the paper 15 minutes early for revision.
              </p>
            </div>

          </div>

          <div className="mt-16 bg-gradient-to-r from-accent/10 to-transparent border-l-4 border-accent p-8 rounded-r-2xl">
            <h3 className="text-2xl font-bold text-white mb-3">Learn From The Experts in Ahmedabad</h3>
            <p className="text-white/70 leading-relaxed">
              For over 20 years, Dattu Sir has been decoding Accountancy for Class 11 and 12 students. Our specialized teaching techniques, individual doubt-solving sessions, and strict test series have produced hundreds of 100/100 scorers. If you are aiming for top marks this year, enroll in our upcoming batches today.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}