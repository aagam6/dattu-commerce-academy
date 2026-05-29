import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageCircle, ChevronRight } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { label: "Home", href: "/#home" },
    { label: "About", href: "/#about" },
    { label: "Results", href: "/#results" },
    { label: "Testimonials", href: "/#testimonials" },
    { label: "Contact", href: "/#contact" },
  ];

  // स्क्रॉल होने पर हेडर का स्टाइल बदलने के लिए
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -120 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#071547]/85 backdrop-blur-3xl border-b border-accent/20 shadow-[0_8px_30px_rgba(255,122,26,0.08)]"
            : "bg-[#071547]/70 backdrop-blur-2xl border-b border-white/10"
        }`}
      >
        <div
          className={`max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between transition-all duration-300 ${
            isScrolled ? "h-[72px]" : "h-[84px]"
          }`}
        >
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0" aria-label="Go to homepage">
            <motion.img
              whileHover={{ scale: 1.06, rotate: 2 }}
              src="/logo.png"
              alt="Dattu Sir's Commerce Academy Logo"
              className="w-14 h-14 object-contain rounded-full drop-shadow-[0_0_20px_rgba(255,122,26,0.35)]"
            />
            <div className="leading-tight">
              <h2 className="text-white font-display text-[22px] font-bold">
                Dattu Sir's
              </h2>
              <p className="text-white/70 text-sm">Commerce Academy</p>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-12" aria-label="Main Navigation">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="relative text-[16px] font-medium transition-all duration-300 group text-white/80 hover:text-accent"
              >
                {link.label}
                <span className="absolute left-0 -bottom-2 h-[2px] bg-accent transition-all duration-300 origin-left w-0 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* RIGHT SIDE CTA (DESKTOP) */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+919825249281"
              aria-label="Call Us"
              className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-accent hover:border-accent transition-all duration-300"
            >
              <Phone size={20} aria-hidden="true" />
            </a>

            <a
              href="https://wa.me/919825249281"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Admissions Open - Contact via WhatsApp"
              className="relative btn-primary rounded-2xl px-7 py-4 shadow-[0_15px_40px_rgba(255,122,26,0.30)] hover:scale-105 transition-transform duration-300"
            >
              <span className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
              <div className="flex items-center gap-3 font-bold text-white">
                <MessageCircle size={20} aria-hidden="true" />
                Admissions Open
              </div>
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
            aria-controls="mobile-menu"
            className="lg:hidden w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white backdrop-blur-xl hover:bg-white/10 transition-colors"
          >
            {isMenuOpen ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
          </button>
        </div>
      </motion.header>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            role="navigation"
            aria-label="Mobile Navigation"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#071547]/95 backdrop-blur-3xl lg:hidden pt-32 px-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  whileHover={{ x: 5 }}
                  className="flex items-center justify-between px-6 py-5 rounded-3xl text-lg font-semibold bg-white/5 text-white/80 hover:bg-white/10 transition-colors"
                >
                  {link.label}
                  <ChevronRight size={20} aria-hidden="true" />
                </motion.a>
              ))}
            </div>

            {/* Mobile Bottom CTA */}
            <div className="mt-8 flex gap-4">
              <a
                href="tel:+919825249281"
                className="flex-1 flex items-center justify-center gap-2 bg-white/5 border border-white/10 rounded-2xl py-4 text-white font-semibold"
              >
                <Phone size={20} />
                Call
              </a>
              <a
                href="https://wa.me/919825249281"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-[2] flex items-center justify-center gap-2 bg-accent text-white rounded-2xl py-4 font-bold shadow-[0_10px_30px_rgba(255,122,26,0.3)]"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}