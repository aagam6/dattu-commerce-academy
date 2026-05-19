import React, { useState, useMemo, useEffect } from "react";

/* ─────────────────────────────────────────────────────
   CONSTANTS
───────────────────────────────────────────────────── */
const WHATSAPP_LINK =
  "https://wa.me/919825249281?text=Hi, I want to enquire about Dattu Sir's Commerce Academy.";

const ACADEMY_RESULTS = {
  "2024-25": [
    { name: "Harsh Sharma",    marks: "A/C: 100 | Stats: 100", percent: "94%" },
    { name: "Muskan Lakhotia", marks: "A/C: 98",               percent: "98%" },
    { name: "Yukti Jain",      marks: "A/C: 99",               percent: "96%" },
    { name: "Parth Shah",      marks: "A/C: 100 | Stats: 100", percent: "94%" },
    { name: "Nandini Acharya", marks: "A/C: 100 | Stats: 100", percent: "92%" },
    { name: "Yashika Rathi",   marks: "A/C: 96",               percent: "95.4%" },
  ],
  "2023-24": [
    { name: "Bakshish Bhardwaj", marks: "A/C: 100 | Stats: 100", percent: "100%" },
    { name: "Dhruvil Jadav",     marks: "A/C: 100 | Stats: 99",  percent: "99%" },
    { name: "Pranjal Gandhi",    marks: "A/C: 95",               percent: "88%" },
    { name: "Priya Rupani",      marks: "A/C: 90",               percent: "90%" },
  ],
  "2022-23": [
    { name: "Krisha Shah",   marks: "A/C: 100 | Stats: 94", percent: "95%" },
    { name: "Vanshita Jain", marks: "A/C: 100",              percent: "95%" },
  ],
};

const SUBJECTS = [
  { icon: "📊", title: "Accountancy",      tag: "Core",    desc: "Journal entries to final accounts — deep conceptual clarity with exam-focused practice. Consistent 100s in boards." },
  { icon: "📈", title: "Statistics",       tag: "Core",    desc: "Data, probability & inference made simple. Students score 99–100 every year with our structured approach." },
  { icon: "💼", title: "Business Studies", tag: "Support", desc: "Management, finance & marketing with real-world examples and model answers for top scores." },
  { icon: "📉", title: "Economics",        tag: "Support", desc: "Micro & macro concepts with clear diagrams, numerical practice and exam strategy." },
];

const TEACHING_STEPS = [
  { num: "01", title: "Concept First",      desc: "Every chapter starts from zero. We build the 'why' before the 'how' so students truly understand, not just memorise." },
  { num: "02", title: "Practice Daily",     desc: "Custom worksheets, chapter-wise problems and previous year papers — repeated practice builds exam confidence." },
  { num: "03", title: "Personal Attention", desc: "Small batches mean every student is known by name. Doubts are never left unanswered." },
  { num: "04", title: "Exam Strategy",      desc: "Time management, presentation, answer framing — we prepare students for board exam format, not just the subject." },
];

const ACADEMIC_CALENDAR = [
  { month: "June",     event: "Class 11 New Batch Begins",      type: "start",  detail: "Fresh start for Class 11 students. Foundation chapters covered." },
  { month: "Jul–Aug",  event: "Core Chapters — Accountancy",    type: "study",  detail: "Journal, Ledger, Trial Balance, Financial Statements." },
  { month: "Sept–Oct", event: "Class 12 Board Batch Begins",    type: "start",  detail: "Intensive batch for board aspirants with faster pace." },
  { month: "Nov",      event: "Half-Yearly & Unit Tests",       type: "exam",   detail: "Mock test series mimicking board exam pattern." },
  { month: "Dec–Jan",  event: "Revision & Past Paper Practice", type: "study",  detail: "Chapter-wise revision + 5 years past papers solved." },
  { month: "Feb",      event: "Pre-Board Mock Exams",           type: "exam",   detail: "Full-length timed papers with detailed review." },
  { month: "Mar",      event: "CBSE Board Exams",               type: "result", detail: "Students appear for board exams fully prepared." },
  { month: "May",      event: "Results & New Admissions Open",  type: "result", detail: "Results declared. New academic year admissions begin." },
];

const ALUMNI = [
  { name: "Ravi Patel",   year: "2018", career: "Chartered Accountant",  firm: "Big 4 Audit Firm" },
  { name: "Priya Mehta",  year: "2019", career: "MBA Finance",           firm: "IIM Ahmedabad" },
  { name: "Akash Shah",   year: "2020", career: "Government Officer",    firm: "Gujarat Civil Services" },
  { name: "Nisha Gupta",  year: "2021", career: "Cost Accountant (CMA)", firm: "Manufacturing Co." },
  { name: "Jay Trivedi",  year: "2016", career: "Bank Manager",          firm: "SBI, Ahmedabad" },
  { name: "Shreya Joshi", year: "2022", career: "CA Articleship",        firm: "Deloitte India" },
];

const TESTIMONIALS = [
  { name: "Harsh Sharma",     batch: "2024–25", score: "94%",         initials: "HS", quote: "Dattu Sir's teaching made Accountancy feel like storytelling. I never thought I'd score 100 — but I did." },
  { name: "Bakshish Bhardwaj",batch: "2023–24", score: "100 in A/C",  initials: "BB", quote: "The way Sir explains each concept from scratch, even the toughest chapter becomes easy. Best decision of my life." },
  { name: "Krisha Shah",      batch: "2022–23", score: "95%",         initials: "KS", quote: "I joined mid-year with a lot of doubt. The personal attention and practice sheets turned everything around." },
  { name: "Dhruvil Jadav",    batch: "2023–24", score: "99 in Stats", initials: "DJ", quote: "Statistics seemed impossible until Dattu Sir broke every formula into logical steps. Cleared with 99!" },
];

const FAQS = [
  { q: "When do batches start?",         a: "Class 11 batches begin in June. Class 12 board batches start in September/October. Limited seats — early enquiry recommended." },
  { q: "What subjects are taught?",      a: "Specialisation in Accountancy and Statistics for Class 11 & 12. Business Studies and Economics guidance also available." },
  { q: "How are classes conducted?",     a: "Offline classroom sessions at our Ahmedabad centre. Small batches ensure personal attention for every student." },
  { q: "What is the fee structure?",     a: "Fee details are shared personally based on subject and batch. Contact via WhatsApp or call for current fee structure." },
  { q: "Do you provide study material?", a: "Yes — custom practice sheets, chapter-wise notes, past paper analysis and model answer booklets are provided." },
  { q: "Can I join mid-year?",           a: "Yes, mid-year admissions are possible subject to seat availability. Extra catch-up sessions are arranged if needed." },
  { q: "Is this only for board exams?",  a: "No. We build your foundation throughout Class 11 so Class 12 is smoother. Our alumni go on to CA, MBA and beyond." },
  { q: "Do you teach online as well?",   a: "Currently we focus on in-person offline classes for better learning outcomes. Contact us to check current availability." },
];

/* ─────────────────────────────────────────────────────
   SHARED STYLES
───────────────────────────────────────────────────── */
const S = {
  sectionWhite:  { padding: "96px 0", background: "#fff" },
  sectionGray:   { padding: "96px 0", background: "#f8fafc" },
  sectionNavy:   { padding: "96px 0", background: "#0b2545" },
  inner:         { maxWidth: 1280, margin: "0 auto", padding: "0 20px" },
  card: {
    background: "#fff", border: "2px solid #f1f5f9", borderRadius: 24,
    padding: 28, transition: "all 0.25s",
  },
};

/* ─────────────────────────────────────────────────────
   SMALL COMPONENTS
────────────────────────────────��──────────────────── */
const WAIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const WhatsAppBtn = ({ children = "WhatsApp Now", large = false }) => (
  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" style={{
    display: "inline-flex", alignItems: "center", gap: large ? 10 : 7,
    background: "#25D366", color: "#fff", textDecoration: "none",
    fontWeight: 700, borderRadius: large ? 16 : 12,
    padding: large ? "15px 32px" : "10px 20px",
    fontSize: large ? 16 : 13,
    boxShadow: large ? "0 8px 28px rgba(37,211,102,0.28)" : "none",
    transition: "all 0.2s",
  }}>
    <WAIcon size={large ? 22 : 16} />
    {children}
  </a>
);

const SectionHeader = ({ label, title, subtitle, dark = false }) => (
  <div style={{ textAlign: "center", marginBottom: 56 }}>
    <span style={{
      display: "inline-block", fontSize: 10, fontWeight: 700, letterSpacing: "0.18em",
      textTransform: "uppercase", padding: "5px 14px", borderRadius: 999, marginBottom: 14,
      background: dark ? "rgba(251,146,60,0.15)" : "#fff7ed",
      color: dark ? "#fb923c" : "#ea580c",
      border: dark ? "1px solid rgba(251,146,60,0.3)" : "none"
    }}>{label}</span>
    <h2 style={{
      fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em",
      fontSize: "clamp(40px, 6vw, 72px)",
      color: dark ? "#fff" : "#0b2545",
      lineHeight: 1, display: "block"
    }}>{title}</h2>
    {subtitle && <p style={{ color: dark ? "#94a3b8" : "#64748b", marginTop: 12, fontSize: 15 }}>{subtitle}</p>}
  </div>
);

const TopperCard = ({ topper, rank }) => (
  <div style={{ ...S.card, textAlign: "center", position: "relative", overflow: "hidden" }}
    onMouseEnter={e => { e.currentTarget.style.borderColor = "#fdba74"; e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = "0 20px 50px rgba(249,115,22,0.12)"; }}
    onMouseLeave={e => { e.currentTarget.style.borderColor = "#f1f5f9"; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
    {rank === 0 && (
      <div style={{
        position: "absolute", top: 0, right: 0, background: "#fbbf24", color: "#fff",
        fontSize: 9, fontWeight: 700, padding: "4px 12px",
        borderBottomLeftRadius: 14, borderTopRightRadius: 22,
        letterSpacing: "0.15em", textTransform: "uppercase"
      }}>🏆 Top</div>
    )}
    <div style={{
      width: 52, height: 52, borderRadius: 14, background: "#0b2545", color: "#fff",
      fontWeight: 900, fontSize: 20, display: "flex", alignItems: "center",
      justifyContent: "center", margin: "0 auto 16px"
    }}>{topper.name.charAt(0)}</div>
    <div style={{ fontWeight: 700, color: "#0b2545", fontSize: 15 }}>{topper.name}</div>
    <div style={{
      fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em",
      color: "#f97316", fontSize: 48, lineHeight: 1.1, margin: "10px 0"
    }}>{topper.percent}</div>
    <div style={{ color: "#94a3b8", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em" }}>{topper.marks}</div>
  </div>
);

const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div onClick={() => setOpen(!open)} style={{
      borderRadius: 18, border: `2px solid ${open ? "#fdba74" : "#e2e8f0"}`,
      cursor: "pointer", transition: "all 0.2s",
      boxShadow: open ? "0 8px 24px rgba(249,115,22,0.08)" : "none"
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 22px", gap: 16 }}>
        <span style={{ fontWeight: 700, color: "#0b2545", fontSize: 15, lineHeight: 1.4 }}>{q}</span>
        <span style={{
          width: 32, height: 32, borderRadius: "50%", flexShrink: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontWeight: 900, fontSize: 20, transition: "all 0.3s",
          background: open ? "#f97316" : "#f1f5f9",
          color: open ? "#fff" : "#94a3b8",
          transform: open ? "rotate(45deg)" : "none"
        }}>+</span>
      </div>
      {open && <div style={{ padding: "0 22px 18px", color: "#64748b", fontSize: 14, lineHeight: 1.8, borderTop: "1px solid #f1f5f9", paddingTop: 14 }}>{a}</div>}
    </div>
  );
};

/* ─────────────────────────────────────────────────────
   MAIN
───────────────────────────────────────────────────── */
export default function HomePage() {
  const years = useMemo(() => Object.keys(ACADEMY_RESULTS).sort((a, b) => b.localeCompare(a)), []);
  const [year, setYear]       = useState(years[0]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const navLinks = [
    { href: "#home",         label: "Home" },
    { href: "#subjects",     label: "Subjects" },
    { href: "#how-we-teach", label: "Method" },
    { href: "#why-us",       label: "About" },
    { href: "#calendar",     label: "Calendar" },
    { href: "#results",      label: "Results" },
    { href: "#alumni",       label: "Alumni" },
    { href: "#faq",          label: "FAQ" },
    { href: "#contact",      label: "Contact" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { font-family: 'Poppins', sans-serif; background: #fff; -webkit-font-smoothing: antialiased; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: none; } }
        .fu  { animation: fadeUp 0.7s ease both; }
        .fu2 { animation: fadeUp 0.7s 0.15s ease both; }
        .fu3 { animation: fadeUp 0.7s 0.3s ease both; }
        a { transition: opacity 0.2s; }
        @media (max-width: 900px) {
          .two-col { grid-template-columns: 1fr !important; }\n          .hide-sm { display: none !important; }\n        }\n        @media (min-width: 901px) {\n          .show-sm { display: none !important; }\n        }\n      `}</style>

      {/* NAVBAR */}
      <nav style={{
        position: "fixed", top: 0, width: "100%", zIndex: 100,
        background: scrolled ? "rgba(11,37,69,0.96)" : "#0b2545",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.3)" : "none",
        height: scrolled ? 60 : 72, transition: "all 0.3s"
      }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="#home" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <img src="https://horizons-cdn.hostinger.com/b60b1d05-d02d-4aa2-822a-4fdb9f13b074/dca-logo-tHJbU.png"
              alt="Dattu Sir's Commerce Academy Logo" style={{ height: 38 }} />
            <div>
              <div style={{ fontFamily: "'Bebas Neue',sans-serif", letterSpacing: "0.06em", color: "#fff", fontSize: 18, lineHeight: 1 }}>Dattu Sir's</div>
              <div style={{ color: "#fb923c", fontSize: 9, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>Commerce Academy</div>
            </div>
          </a>

          <div className="hide-sm" style={{ display: "flex", alignItems: "center", gap: 22 }}>
            {navLinks.map(l => (
              <a key={l.href} href={l.href} style={{ color: "rgba(255,255,255,0.65)", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none" }}
                onMouseEnter={e => e.target.style.color = "#fb923c"} onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.65)"}>
                {l.label}
              </a>
            ))}
            <WhatsAppBtn />
          </div>

          <button className="show-sm" onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 8 }} aria-label="Menu">
            {[0,1,2].map(i => (
              <div key={i} style={{
                width: 22, height: 2, background: "#fff",
                marginBottom: i < 2 ? 5 : 0, transition: "all 0.3s",
                transform: menuOpen ? (i===0 ? "rotate(45deg) translate(5px,5px)" : i===2 ? "rotate(-45deg) translate(5px,-5px)" : "none") : "none",
                opacity: menuOpen && i===1 ? 0 : 1
              }} />
            ))}
          </button>
        </div>

        {menuOpen && (
          <div style={{ background: "#0a1e3c", borderTop: "1px solid rgba(255,255,255,0.08)", padding: "20px 24px", display: "flex", flexDirection: "column", gap: 16 }}>
            {navLinks.map(l => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                style={{ color: "rgba(255,255,255,0.75)", fontSize: 14, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", textDecoration: "none" }}>
                {l.label}
              </a>
            ))}
            <div style={{ paddingTop: 8 }}><WhatsAppBtn>Chat on WhatsApp</WhatsAppBtn></div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" style={{ background: "#0a1f3d", paddingTop: 140, paddingBottom: 100, textAlign: "center", position: "relative", overflow: "hidden" }}>
        {/* Diagonal stripe overlay — very subtle */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.035, pointerEvents: "none",
          backgroundImage: "repeating-linear-gradient(45deg,#f97316 0,#f97316 1px,transparent 0,transparent 50%)",
          backgroundSize: "22px 22px"
        }} />
        {/* Orange glow */}
        <div style={{
          position: "absolute", bottom: -100, right: -100, width: 500, height: 500,
          borderRadius: "50%", background: "radial-gradient(circle,rgba(249,115,22,0.13) 0%,transparent 70%)",
          pointerEvents: "none"
        }} />

        <div className="fu" style={{ maxWidth: 980, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          <span style={{
            display: "inline-block", background: "rgba(249,115,22,0.18)", color: "#fb923c",
            border: "1px solid rgba(249,115,22,0.4)", borderRadius: 999,
            fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase",
            padding: "6px 18px", marginBottom: 28
          }}>🎓 Admissions Open 2025–26</span>

          <h1 style={{
            fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.03em",
            fontSize: "clamp(60px, 11vw, 130px)", color: "#ffffff",
            lineHeight: 0.95, marginBottom: 28
          }}>
            Ahmedabad's Most<br />
            <span style={{ color: "#fb923c" }}>Trusted Commerce</span><br />
            Academy
          </h1>

          <p className="fu2" style={{ color: "#e2e8f0", fontSize: 18, fontStyle: "italic", marginBottom: 8, fontWeight: 500 }}>
            "There is no substitute for hard work."
          </p>
          <p className="fu2" style={{ color: "#94a3b8", fontSize: 15, marginBottom: 40 }}>
            Class 11 &amp; 12 · Accountancy · Statistics · Est. 2003
          </p>

          {/* Stats */}
          <div className="fu2" style={{
            display: "inline-flex", flexWrap: "wrap", justifyContent: "center", gap: 40,
            background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 22, padding: "24px 48px", marginBottom: 40
          }}>
            {[{ val: "23+", label: "Years Experience" }, { val: "2000+", label: "Students Placed" }, { val: "100s", label: "Board Toppers" }].map(s => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "'Bebas Neue',sans-serif", color: "#fb923c", fontSize: 44, lineHeight: 1 }}>{s.val}</div>
                <div style={{ color: "#94a3b8", fontSize: 10, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginTop: 5 }}>{s.label}</div>
              </div>
            ))}
          </div>

          <div className="fu3" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 14 }}>
            <WhatsAppBtn large>WhatsApp Now</WhatsAppBtn>
            <a href="tel:+919825249281" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#ffffff", color: "#0b2545", padding: "15px 32px",
              borderRadius: 16, fontWeight: 700, fontSize: 16, textDecoration: "none",
              boxShadow: "0 8px 30px rgba(0,0,0,0.18)"
            }}>📞 Call Now</a>
          </div>

          <p style={{ color: "#fb923c", fontWeight: 600, marginTop: 20, fontSize: 13 }}>
            ⚠️ Limited seats — enquire early
          </p>
        </div>
      </section>

      {/* SUBJECTS */}
      <section id="subjects" style={S.sectionWhite}>
        <div style={S.inner}>
          <SectionHeader label="What We Teach" title="Subjects We Specialise In" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: 22 }}>
            {SUBJECTS.map((s, i) => (
              <div key={i} style={S.card}
                onMouseEnter={e => { e.currentTarget.style.borderColor="#fdba74"; e.currentTarget.style.transform="translateY(-5px)"; e.currentTarget.style.boxShadow="0 20px 50px rgba(249,115,22,0.1)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor="#f1f5f9"; e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow="none"; }}>
                <div style={{ fontSize: 42, marginBottom: 14 }}>{s.icon}</div>
                <span style={{
                  display: "inline-block", fontSize: 10, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase",
                  padding: "3px 10px", borderRadius: 999, marginBottom: 12,
                  background: s.tag==="Core" ? "#0b2545" : "#f1f5f9", color: s.tag==="Core" ? "#fff" : "#94a3b8"
                }}>{s.tag}</span>
                <h3 style={{ fontSize: 19, fontWeight: 800, color: "#0b2545", marginBottom: 10 }}>{s.title}</h3>
                <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE TEACH */}
      <section id="how-we-teach" style={S.sectionGray}>
        <div style={S.inner}>
          <SectionHeader label="Our Method" title="How We Teach" subtitle="A proven 4-step process that takes students from confusion to confidence — year after year." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: 22 }}>
            {TEACHING_STEPS.map((step, i) => (
              <div key={i} style={{ ...S.card, position: "relative", overflow: "hidden" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor="#fb923c"; e.currentTarget.style.transform="translateY(-5px)"; e.currentTarget.style.boxShadow="0 20px 50px rgba(249,115,22,0.1)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor="#f1f5f9"; e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow="none"; }}>
                <div style={{
                  position: "absolute", top: -8, right: 12, lineHeight: 1, userSelect: "none",
                  fontFamily: "'Bebas Neue',sans-serif", fontSize: 88,
                  color: "rgba(249,115,22,0.07)"
                }}>{step.num}</div>
                <div style={{
                  display: "inline-block", fontFamily: "'Bebas Neue',sans-serif", fontSize: 18,
                  color: "#fb923c", border: "2px solid #fdba74", borderRadius: 10,
                  padding: "2px 12px", marginBottom: 14
  }}, 