import React, { useEffect, useState } from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  Menu,
  X,
  Phone,
  MessageCircle,
  ChevronRight,
} from "lucide-react";

export default function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [activeSection, setActiveSection] = useState("#home");

  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Results", href: "#results" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  /* ACTIVE SECTION */
  useEffect(() => {

    const handleScroll = () => {

      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) =>
        document.querySelector(link.href)
      );

      sections.forEach((section) => {

        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveSection(`#${section.id}`);
        }

      });

    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  return (

    <>

      {/* TOP BAR */}
      <div
        className="
        fixed
        top-0
        left-0
        w-full
        z-[60]
        bg-accent
        text-white
        py-2
        text-center
        text-sm
        font-semibold
        tracking-wide
        shadow-lg
        "
      >

        Admissions Open For 2026 Batch • Limited Seats Available

      </div>

      {/* HEADER */}
      <motion.header
        initial={{ y: -120 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`
        fixed
        left-0
        w-full
        z-50
        transition-all
        duration-300

        ${
          isScrolled
            ? "top-[36px] bg-[#071547]/75 backdrop-blur-3xl border-b border-accent/20 shadow-[0_8px_30px_rgba(255,122,26,0.08)]"
            : "top-[36px] bg-[#071547]/60 backdrop-blur-2xl border-b border-white/10"
        }
        `}
      >

        <div
          className={`
          max-w-7xl
          mx-auto
          px-5
          lg:px-8
          flex
          items-center
          justify-between
          transition-all
          duration-300

          ${
            isScrolled
              ? "h-[72px]"
              : "h-[84px]"
          }
          `}
        >

          {/* LOGO */}
          <a
            href="#home"
            className="
            flex
            items-center
            gap-4
            flex-shrink-0
            "
          >

            <motion.img
              whileHover={{
                scale: 1.06,
                rotate: 2,
              }}
              src="/logo.png"
              alt="Dattu Sir's Commerce Academy Ahmedabad"
              className="
              w-14
              h-14
              object-contain
              rounded-full
              drop-shadow-[0_0_20px_rgba(255,122,26,0.35)]
              "
            />

            <div className="leading-tight">

              <h2
                className="
                text-white
                font-display
                text-[22px]
                font-bold
                "
              >
                Dattu Sir's
              </h2>

              <p
                className="
                text-white/70
                text-sm
                "
              >
                Commerce Academy
              </p>

            </div>

          </a>

          {/* DESKTOP NAV */}
          <nav
            className="
            hidden
            lg:flex
            items-center
            gap-12
            "
          >

            {navLinks.map((link, i) => (

              <a
                key={i}
                href={link.href}
                className={`
                relative
                text-[16px]
                font-medium
                transition-all
                duration-300
                group

                ${
                  activeSection === link.href
                    ? "text-accent"
                    : "text-white/80 hover:text-accent"
                }
                `}
              >

                {link.label}

                <span
                  className={`
                  absolute
                  left-0
                  -bottom-2
                  h-[2px]
                  bg-accent
                  transition-all
                  duration-300
                  origin-left

                  ${
                    activeSection === link.href
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }
                  `}
                />

              </a>

            ))}

          </nav>

          {/* RIGHT SIDE */}
          <div
            className="
            hidden
            lg:flex
            items-center
            gap-4
            "
          >

            {/* CALL */}
            <a
              href="tel:+919825249281"
              aria-label="Call Dattu Sir"
              className="
              w-12
              h-12
              rounded-2xl
              bg-white/5
              border
              border-white/10
              flex
              items-center
              justify-center
              text-white
              hover:bg-accent
              hover:border-accent
              transition-all
              duration-300
              "
            >

              <Phone size={20} />

            </a>

            {/* WHATSAPP BUTTON */}
            <a
              href="https://wa.me/919825249281"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open WhatsApp Chat"
              className="
              relative
              btn-primary
              rounded-2xl
              px-7
              py-4
              shadow-[0_15px_40px_rgba(255,122,26,0.30)]
              "
            >

              {/* ONLINE DOT */}
              <span
                className="
                absolute
                top-2
                right-2
                w-2.5
                h-2.5
                rounded-full
                bg-green-400
                animate-pulse
                "
              />

              <div className="flex items-center gap-3">

                <MessageCircle
                  size={20}
                  className="animate-pulse"
                />

                Admissions Open

              </div>

            </a>

          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="
            lg:hidden
            w-12
            h-12
            rounded-2xl
            bg-white/5
            border
            border-white/10
            flex
            items-center
            justify-center
            text-white
            backdrop-blur-xl
            "
          >

            {isMenuOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}

          </button>

        </div>

      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>

        {isMenuOpen && (

          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
            fixed
            inset-0
            z-40
            bg-[#071547]/95
            backdrop-blur-3xl
            lg:hidden
            pt-32
            px-6
            "
          >

            <div
              className="
              flex
              flex-col
              gap-4
              "
            >

              {navLinks.map((link, i) => (

                <motion.a
                  key={i}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  whileHover={{ x: 5 }}
                  className={`
                  flex
                  items-center
                  justify-between
                  px-6
                  py-5
                  rounded-3xl
                  text-lg
                  font-semibold
                  transition-all
                  duration-300

                  ${
                    activeSection === link.href
                      ? "bg-accent text-white"
                      : "bg-white/5 text-white/80"
                  }
                  `}
                >

                  {link.label}

                  <ChevronRight size={20} />

                </motion.a>

              ))}

            </div>

            {/* MOBILE CTA */}
            <div className="mt-10 flex flex-col gap-4">

              {/* WHATSAPP */}
              <a
                href="https://wa.me/919825249281"
                target="_blank"
                rel="noopener noreferrer"
                className="
                relative
                w-full
                bg-accent
                rounded-3xl
                py-5
                flex
                items-center
                justify-center
                gap-3
                text-white
                font-bold
                text-lg
                shadow-[0_15px_40px_rgba(255,122,26,0.30)]
                "
              >

                <span
                  className="
                  absolute
                  top-3
                  right-3
                  w-2.5
                  h-2.5
                  rounded-full
                  bg-green-400
                  animate-pulse
                  "
                />

                <MessageCircle size={22} />

                Admissions Open

              </a>

              {/* CALL */}
              <a
                href="tel:+919825249281"
                className="
                w-full
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                py-5
                flex
                items-center
                justify-center
                gap-3
                text-white
                font-semibold
                text-lg
                "
              >

                <Phone size={20} />

                Call Now

              </a>

            </div>

            {/* TRUST TEXT */}
            <p
              className="
              text-center
              text-white/40
              text-sm
              mt-10
              "
            >
              Trusted By 5000+ Commerce Students Since 2003
            </p>

          </motion.div>

        )}

      </AnimatePresence>

    </>

  );

}