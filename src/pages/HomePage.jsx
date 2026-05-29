import React from 'react';

import Hero from '../components/Hero';
import About from '../components/About';
import WhyChooseUs from '../components/WhyChooseUs';
import Results from '../components/Results';
import Testimonials from '../components/Testimonials';
import BlogPreview from '../components/BlogPreview';
import Contact from '../components/Contact';

import { MessageCircle, PhoneCall, Sparkles } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-[#061547]">
      {/* HERO */}
      <Hero />

      {/* ABOUT */}
      <About />

      {/* WHY CHOOSE US */}
      <WhyChooseUs />

      {/* RESULTS */}
      <Results />

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* BLOG PREVIEW */}
      <BlogPreview />

      {/* FINAL PREMIUM CTA */}
      <section className="relative overflow-hidden py-32 px-6 bg-gradient-to-b from-[#071A57] via-[#04113A] to-[#020B2B]">
        
        {/* GLOW EFFECTS */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/20 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 blur-[140px] rounded-full" />

        {/* NOISE EFFECT */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')]" />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* PREMIUM BOX */}
          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.05] backdrop-blur-2xl px-8 md:px-16 py-20 text-center shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
            
            {/* BADGE */}
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent px-5 py-3 rounded-full text-sm font-semibold tracking-wide mb-8">
              <Sparkles className="w-4 h-4" />
              Admissions Open 2026-27
            </div>

            {/* TITLE */}
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
              Ready To Build Your
              <span className="text-accent"> Commerce Career?</span>
            </h2>

            {/* LINE */}
            <div className="w-28 h-1.5 bg-accent rounded-full mx-auto mt-8 mb-10" />

            {/* DESCRIPTION */}
            <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-14">
              Join Ahmedabad’s Trusted Commerce Coaching Academy For Class 11 & 12 Students With Expert Guidance, Weekly Tests, Personal Attention & Proven Results.
            </p>

            {/* TRUST TAGS */}
            <div className="flex flex-wrap justify-center gap-4 mb-14">
              {[
                '20+ Years Experience',
                'Weekly Tests',
                'Personal Attention',
                'Board Exam Focused',
                'Trusted By 20,000+ Parents',
              ].map((item, i) => (
                <div
                  key={i}
                  className="px-5 py-3 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm md:text-base"
                >
                  {item}
                </div>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              {/* WHATSAPP */}
              <a
                href="https://wa.me/919825249281"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-accent text-white px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-[0_15px_40px_rgba(255,122,26,0.35)]"
              >
                <MessageCircle className="w-6 h-6" />
                Apply For Admission
              </a>

              {/* CALL */}
              <a
                href="tel:+919825249281"
                className="inline-flex items-center justify-center gap-3 border border-white/10 bg-white/5 backdrop-blur-xl text-white px-10 py-5 rounded-2xl font-bold text-lg hover:border-accent/50 hover:bg-white/10 hover:scale-105 transition-all duration-300"
              >
                <PhoneCall className="w-6 h-6" />
                Call Now
              </a>
            </div>

            {/* TRUST TEXT - UPDATED FOR SEO & IMPACT */}
            <p className="text-white/50 text-sm md:text-base font-medium mt-10 tracking-wide">
              Trusted by 20,000+ Parents & 10,000+ Students Across Ahmedabad Since 2003
            </p>

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <Contact />
    </main>
  );
}