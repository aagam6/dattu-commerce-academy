import React, { useState, useMemo, useEffect } from "react";

const WHATSAPP_LINK = "https://wa.me/919825249281?text=Hi, I want to enquire about Dattu Sir's Commerce Academy.";

const ACADEMY_RESULTS = {
  "2024-25": [
    { name: "Harsh Sharma", marks: "A/C: 100 | Stats: 100", percent: "94%" },
    { name: "Muskan Lakhotia", marks: "A/C: 98", percent: "98%" },
    { name: "Yukti Jain", marks: "A/C: 99", percent: "96%" },
    { name: "Parth Shah", marks: "A/C: 100 | Stats: 100", percent: "94%" },
    { name: "Nandini Acharya", marks: "A/C: 100 | Stats: 100", percent: "92%" },
    { name: "Yashika Rathi", marks: "A/C: 96", percent: "95.4%" },
  ],
  "2023-24": [
    { name: "Bakshish Bhardwaj", marks: "A/C: 100 | Stats: 100", percent: "100%" },
    { name: "Dhruvil Jadav", marks: "A/C: 100 | Stats: 99", percent: "99%" },
    { name: "Pranjal Gandhi", marks: "A/C: 95", percent: "88%" },
    { name: "Priya Rupani", marks: "A/C: 90", percent: "90%" },
  ],
  "2022-23": [
    { name: "Krisha Shah", marks: "A/C: 100 | Stats: 94", percent: "95%" },
    { name: "Vanshita Jain", marks: "A/C: 100", percent: "95%" },
  ],
};

const SUBJECTS = [
  { icon: "📊", title: "Accountancy", tag: "Core", desc: "Journal entries to final accounts with exam-focused practice." },
  { icon: "📈", title: "Statistics", tag: "Core", desc: "Data, probability & inference made simple." },
  { icon: "💼", title: "Business Studies", tag: "Support", desc: "Management, finance & marketing with real-world examples." },
  { icon: "📉", title: "Economics", tag: "Support", desc: "Micro & macro concepts with clear diagrams." },
];

const TEACHING_STEPS = [
  { num: "01", title: "Concept First", desc: "Every chapter starts from zero. We build the why before the how." },
  { num: "02", title: "Practice Daily", desc: "Custom worksheets, chapter-wise problems and previous year papers." },
  { num: "03", title: "Personal Attention", desc: "Small batches mean every student is known by name." },
  { num: "04", title: "Exam Strategy", desc: "Time management, presentation, answer framing for board exams." },
];

const ALUMNI = [
  { name: "Ravi Patel", year: "2018", career: "Chartered Accountant", firm: "Big 4 Audit Firm" },
  { name: "Priya Mehta", year: "2019", career: "MBA Finance", firm: "IIM Ahmedabad" },
  { name: "Akash Shah", year: "2020", career: "Government Officer", firm: "Gujarat Civil Services" },
];

const S = {
  sectionWhite: { padding: "96px 0", background: "#fff" },
  sectionGray: { padding: "96px 0", background: "#f8fafc" },
  sectionNavy: { padding: "96px 0", background: "#0b2545" },
  inner: { maxWidth: 1280, margin: "0 auto", padding: "0 20px" },
  card: { background: "#fff", border: "2px solid #f1f5f9", borderRadius: 24, padding: 28, transition: "all 0.25s" },
};

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

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@400;600;700;800;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { font-family: Poppins, sans-serif; background: #fff; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; } }
        .fu { animation: fadeUp 0.7s ease both; }
        @media (max-width: 900px) { .two-col { grid-template-columns: 1fr !important; } }
      `}</style>

      <nav style={{
        position: "fixed", top: 0, width: "100%", zIndex: 100,
        background: scrolled ? "rgba(11,37,69,0.96)" : "#0b2545",
        height: scrolled ? 60 : 72, transition: "all 0.3s"
      }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="#home" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <div style={{ fontFamily: "Bebas Neue", color: "#fff", fontSize: 18 }}>Dattu Sir's Academy</div>
          </a>
          <WhatsAppBtn />
        </div>
      </nav>

      <section id="home" style={{ background: "#0a1f3d", paddingTop: 140, paddingBottom: 100, textAlign: "center" }}>
        <div className="fu" style={{ maxWidth: 980, margin: "0 auto", padding: "0 24px" }}>
          <h1 style={{ fontFamily: "Bebas Neue", fontSize: "clamp(50px, 10vw, 100px)", color: "#fff", marginBottom: 20 }}>
            Ahmedabad's Most Trusted<br />
            <span style={{ color: "#fb923c" }}>Commerce Academy</span>
          </h1>
          <p style={{ color: "#94a3b8", fontSize: 16, marginBottom: 30 }}>Class 11 & 12 · Accountancy · Statistics · Est. 2003</p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 14 }}>
            <WhatsAppBtn large>WhatsApp Now</WhatsAppBtn>
            <a href="tel:+919825249281" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fff", color: "#0b2545", padding: "15px 32px", borderRadius: 16, fontWeight: 700, textDecoration: "none" }}>📞 Call</a>
          </div>
        </div>
      </section>

      <section id="subjects" style={S.sectionWhite}>
        <div style={S.inner}>
          <h2 style={{ textAlign: "center", fontFamily: "Bebas Neue", fontSize: 48, marginBottom: 40, color: "#0b2545" }}>What We Teach</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 20 }}>
            {SUBJECTS.map((s, i) => (
              <div key={i} style={S.card}>
                <div style={{ fontSize: 40, marginBottom: 10 }}>{s.icon}</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "#0b2545", marginBottom: 8 }}>{s.title}</h3>
                <p style={{ color: "#64748b", fontSize: 13 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-we-teach" style={S.sectionGray}>
        <div style={S.inner}>
          <h2 style={{ textAlign: "center", fontFamily: "Bebas Neue", fontSize: 48, marginBottom: 40, color: "#0b2545" }}>How We Teach</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 20 }}>
            {TEACHING_STEPS.map((step, i) => (
              <div key={i} style={S.card}>
                <div style={{ fontSize: 32, fontWeight: 700, color: "#fb923c", marginBottom: 10 }}>{step.num}</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "#0b2545", marginBottom: 8 }}>{step.title}</h3>
                <p style={{ color: "#64748b", fontSize: 13 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="alumni" style={S.sectionWhite}>
        <div style={S.inner}>
          <h2 style={{ textAlign: "center", fontFamily: "Bebas Neue", fontSize: 48, marginBottom: 40, color: "#0b2545" }}>Alumni Success</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: 20 }}>
            {ALUMNI.map((a, i) => (
              <div key={i} style={S.card}>
                <div style={{ fontWeight: 700, color: "#0b2545", fontSize: 16 }}>{a.name}</div>
                <div style={{ color: "#f97316", fontSize: 13, fontWeight: 700 }}>{a.career}</div>
                <div style={{ color: "#94a3b8", fontSize: 12 }}>{a.firm} · {a.year}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer style={{ background: "#0b2545", color: "#fff", padding: "40px 20px", textAlign: "center" }}>
        <p>© 2026 Dattu Sir's Commerce Academy. All rights reserved.</p>
      </footer>
    </>
  );
}
