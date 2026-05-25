import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Results() {
  const [activeYear, setActiveYear] = useState("2025-26");
  const [activeBoard, setActiveBoard] = useState("All");

  const resultsData = [
    {
      year: "2025-26",
      students: [
        // 2025-26 CBSE
        { name: "Nakul Thakkar", board: "CBSE", accounts: "97/100", stats: "-", percentage: "95%" },
        { name: "Elina Sethia", board: "CBSE", accounts: "98/100", stats: "-", percentage: "94.40%" },
        { name: "Laksh Mehtani", board: "CBSE", accounts: "95/100", stats: "-", percentage: "91%" },
        { name: "Vansh Jain", board: "CBSE", accounts: "95/100", stats: "-", percentage: "89.80%" },
        { name: "Ashmi Lodaya", board: "CBSE", accounts: "89/100", stats: "-", percentage: "89%" },
        { name: "Jeet Modi", board: "CBSE", accounts: "96/100", stats: "-", percentage: "82.20%" },
        
        // 2025-26 GSEB
        { name: "Kavya Raval", board: "GSEB", accounts: "100/100", stats: "100/100", percentage: "99.88 PR" },
        { name: "Yashvi S Shah", board: "GSEB", accounts: "100/100", stats: "100/100", percentage: "99.60 PR" },
        { name: "Nikil Yadav", board: "GSEB", accounts: "100/100", stats: "100/100", percentage: "99.56 PR" },
        { name: "Rudra Panchal", board: "GSEB", accounts: "100/100", stats: "100/100", percentage: "99.56 PR" },
        { name: "Heer Kella", board: "GSEB", accounts: "100/100", stats: "100/100", percentage: "99.18 PR" },
      ],
    },
    {
      year: "2024-25",
      students: [
        // 2024-25 CBSE
        { name: "Muskan Lakhotia", board: "CBSE", accounts: "98/100", stats: "-", percentage: "98%" },
        { name: "Yukti Jain", board: "CBSE", accounts: "99/100", stats: "-", percentage: "96%" },
        { name: "Yashika Rathi", board: "CBSE", accounts: "96/100", stats: "-", percentage: "95.4%" },
        { name: "Dhruti Roy", board: "CBSE", accounts: "96/100", stats: "-", percentage: "88%" },
        { name: "Hanshikha Bhattar", board: "CBSE", accounts: "96/100", stats: "-", percentage: "94%" },
        { name: "Shaina Agrawal", board: "CBSE", accounts: "95/100", stats: "-", percentage: "94%" },
        
        // 2024-25 GSEB
        { name: "Harsh Sharma", board: "GSEB", accounts: "100/100", stats: "100/100", percentage: "94%" },
        { name: "Parth Shah", board: "GSEB", accounts: "100/100", stats: "100/100", percentage: "94%" },
        { name: "Nandini Acharya", board: "GSEB", accounts: "100/100", stats: "100/100", percentage: "92%" },
        { name: "Harsh Thakkar", board: "GSEB", accounts: "100/100", stats: "100/100", percentage: "92%" },
        { name: "Arshi Jain", board: "GSEB", accounts: "100/100", stats: "100/100", percentage: "91%" },
        { name: "Heet Vakil", board: "GSEB", accounts: "95/100", stats: "100/100", percentage: "94%" },
        { name: "Vanshika Raghav", board: "GSEB", accounts: "97/100", stats: "100/100", percentage: "93%" },
      ],
    },
    {
      year: "2023-24",
      students: [
        // 2023-24 CBSE (Vishwa Yadav तक)
        { name: "Pranjal Gandhi", board: "CBSE", accounts: "95/100", stats: "-", percentage: "88%" },
        { name: "Devraj Varandani", board: "CBSE", accounts: "95/100", stats: "-", percentage: "86%" },
        { name: "Mayank Ramchandani", board: "CBSE", accounts: "95/100", stats: "-", percentage: "85%" },
        { name: "Poojan Surani", board: "CBSE", accounts: "94/100", stats: "-", percentage: "88%" },
        { name: "Vishwa Yadav", board: "CBSE", accounts: "91/100", stats: "-", percentage: "86%" },
        
        // 2023-24 GSEB (पूरी लिस्ट जोड़ी गई)
        { name: "Bakshish Bhardwaj", board: "GSEB", accounts: "100/100", stats: "100/100" },
        { name: "Dhruvil Jadav", board: "GSEB", accounts: "100/100", stats: "99/100" },
        { name: "Soha Shaikh", board: "GSEB", accounts: "96/100", stats: "100/100" },
        { name: "Nakul Balange", board: "GSEB", accounts: "99/100", stats: "100/100" },
        { name: "Yug Patel", board: "GSEB", accounts: "98/100", stats: "100/100" },
        { name: "Harshil Chauhan", board: "GSEB", accounts: "98/100", stats: "100/100" },
        { name: "Het Parikh", board: "GSEB", accounts: "98/100", stats: "100/100" },
        { name: "Vrutti Shah", board: "GSEB", accounts: "100/100", stats: "99/100" },
        { name: "Saurav Maiti", board: "GSEB", accounts: "98/100", stats: "100/100" },
        { name: "Jahanvi Pandya", board: "GSEB", accounts: "100/100", stats: "94/100" },
      ],
    },
    {
      year: "2022-23",
      students: [
        // 2022-23 CBSE (Rishika Tank तक, बैनर के प्रिंटिंग मिस्टेक को इग्नोर किया गया)
        { name: "Vanshita Jain", board: "CBSE", accounts: "100/100", percentage: "95%" },
        { name: "Mishti Patawari", board: "CBSE", eco: "98/100", percentage: "97%" },
        { name: "Manasvi Saboo", board: "CBSE", accounts: "95/100", percentage: "95%" },
        { name: "Rudransh Narang", board: "CBSE", accounts: "95/100", percentage: "93%" },
        { name: "Rohit Chaudhary", board: "CBSE", accounts: "95/100", percentage: "92%" },
        { name: "Siddharth Mundhra", board: "CBSE", accounts: "95/100", percentage: "88%" },
        { name: "Moksha Jain", board: "CBSE", accounts: "93/100", percentage: "89%" },
        { name: "Rishika Tank", board: "CBSE", accounts: "92/100", percentage: "84%" },

        // 2022-23 GSEB 
        { name: "Krisha Shah", board: "GSEB", accounts: "100/100", stats: "94/100" },
        { name: "Prayag Malpani", board: "GSEB", accounts: "100/100", stats: "92/100" },
        { name: "Jamuna Shah", board: "GSEB", accounts: "98/100", stats: "100/100" },
        { name: "Gopika Vanniyar", board: "GSEB", accounts: "95/100", stats: "100/100" },
      ],
    },
    {
      year: "2021-22",
      students: [
        // 2021-22 CBSE
        { name: "Lakshya Borad", board: "CBSE", accounts: "100/100", percentage: "96%" },
        { name: "Divya Patel", board: "CBSE", accounts: "97/100", percentage: "92.8%" },
        { name: "Garima Lakhotia", board: "CBSE", accounts: "96/100", percentage: "88.4%" },
        { name: "Harsh Griglani", board: "CBSE", accounts: "94/100", percentage: "90.8%" },
        { name: "Nandini Bhagchandani", board: "CBSE", accounts: "94/100", percentage: "94%" },
        { name: "Nauman Jadhani", board: "CBSE", accounts: "93/100", percentage: "92.8%" },
        { name: "Anuj Keswani", board: "CBSE", accounts: "92/100", percentage: "83.4%" },
        { name: "Kushagra Singhal", board: "CBSE", accounts: "93/100", percentage: "83.6%" },

        // 2021-22 GSEB (पूरी लिस्ट जोड़ी गई)
        { name: "Purva Nawathe", board: "GSEB", accounts: "99/100", stats: "100/100" },
        { name: "Dhairyan Desai", board: "GSEB", accounts: "99/100", stats: "100/100" },
        { name: "Kevin Sheth", board: "GSEB", accounts: "99/100", stats: "100/100" },
        { name: "Viraj Gajjar", board: "GSEB", accounts: "97/100", stats: "100/100" },
        { name: "Karnav Raval", board: "GSEB", accounts: "97/100", stats: "100/100" },
        { name: "Sumeet Rathod", board: "GSEB", accounts: "97/100", stats: "100/100" },
      ],
    },
  ];

  const hasPerfectScore = (student) => {
    return student.accounts === "100/100" || student.stats === "100/100" || student.eco === "100/100";
  };

  const currentYearData = resultsData.find((d) => d.year === activeYear) || resultsData[0];
  const availableBoards = ["All", ...new Set(currentYearData.students.map((s) => s.board))];

  return (
    <section id="results" className="relative overflow-hidden py-28 px-6 bg-gradient-to-b from-[#061547] via-[#071A57] to-[#04113A]">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-accent/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full"></div>

      {/* HEADING */}
      <div className="text-center mb-24 relative z-10">
        <p className="text-accent uppercase tracking-[0.3em] text-sm font-semibold mb-5">Student Achievements</p>
        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
          Ahmedabad Commerce <span className="text-accent">Toppers</span>
        </h2>
        <div className="w-24 h-1 bg-accent mx-auto rounded-full mt-6 mb-6"></div>
        <p className="text-white/70 text-lg max-w-3xl mx-auto leading-relaxed">
          Top Commerce Coaching Results In Ahmedabad For Class 11 & 12 Students Since 2003.
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-6xl mx-auto mb-20 relative z-10">
        {[
          { value: "5000+", label: "Students Trained" },
          { value: "20+", label: "Years Experience" },
          { value: "100%", label: "Result Focused" },
          { value: "100/100", label: "Top Scores" },
        ].map((item, i) => (
          <div key={i} className="bg-white/[0.06] border border-white/10 rounded-[30px] p-7 text-center backdrop-blur-2xl shadow-[0_15px_40px_rgba(0,0,0,0.25)]">
            <h3 className="text-3xl md:text-5xl font-black text-accent">{item.value}</h3>
            <p className="text-white/60 mt-3">{item.label}</p>
          </div>
        ))}
      </div>

      {/* FILTER BUTTONS - YEAR */}
      <div className="flex flex-wrap justify-center gap-4 mb-6 relative z-10">
        {resultsData.map((item, i) => (
          <button
            key={i}
            onClick={() => {
              setActiveYear(item.year);
              setActiveBoard("All"); 
            }}
            className={`px-7 py-3 rounded-full font-bold transition-all duration-300 border ${
              activeYear === item.year
                ? "bg-accent text-white border-accent shadow-[0_10px_30px_rgba(255,122,26,0.35)]"
                : "bg-white/5 text-white border-white/10 hover:border-accent/50"
            }`}
          >
            {item.year}
          </button>
        ))}
      </div>

      {/* FILTER BUTTONS - BOARD (DYNAMIC) */}
      <div className="flex flex-wrap justify-center gap-4 mb-20 relative z-10">
        {availableBoards.map((board, i) => (
          <button
            key={i}
            onClick={() => setActiveBoard(board)}
            className={`px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 border ${
              activeBoard === board
                ? "bg-white text-black border-white shadow-[0_5px_20px_rgba(255,255,255,0.2)]"
                : "bg-white/5 text-white/70 border-white/10 hover:text-white hover:border-white/50"
            }`}
          >
            {board === "All" ? "All Boards" : board}
          </button>
        ))}
      </div>

      {/* RESULTS */}
      <div className="max-w-7xl mx-auto relative z-10">
        {resultsData
          .filter((yearData) => yearData.year === activeYear)
          .map((yearData, i) => {
            let filteredStudents = activeBoard === "All" 
              ? yearData.students 
              : yearData.students.filter((s) => s.board === activeBoard);

            filteredStudents = [...filteredStudents].sort((a, b) => {
              const aIsPerfect = hasPerfectScore(a);
              const bIsPerfect = hasPerfectScore(b);
              if (aIsPerfect && !bIsPerfect) return -1;
              if (!aIsPerfect && bIsPerfect) return 1;
              return 0;
            });

            if (filteredStudents.length === 0) {
              return (
                <div key={i} className="text-center text-white/50 py-10">
                  No students found for {activeBoard} in {activeYear}.
                </div>
              );
            }

            return (
              <div key={i} className="mb-24">
                
                {/* YEAR BADGE */}
                <div className="mb-12">
                  <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-7 py-4 rounded-full backdrop-blur-xl">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <h3 className="text-2xl md:text-4xl font-black text-white">{yearData.year}</h3>
                  </div>
                </div>

                {/* STUDENTS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
                  {filteredStudents.map((student, idx) => {
                    const isPerfect = hasPerfectScore(student);

                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.05 }}
                        whileHover={{ y: -12, scale: 1.04 }}
                        className={`relative rounded-[32px] border ${
                          isPerfect 
                            ? "border-yellow-400/50 shadow-[0_10px_30px_rgba(250,204,21,0.15)]" 
                            : "border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.25)]"
                        } bg-white/[0.06] backdrop-blur-2xl p-7 hover:shadow-[0_25px_60px_rgba(255,122,26,0.25)] transition-all duration-500 mt-6 flex flex-col justify-between`}
                      >
                        
                        <div>
                          {/* BOARD BADGE - सिर्फ तभी दिखेगा जब 'All' सेलेक्टेड हो */}
                          {activeBoard === "All" && (
                            <div className="mb-4">
                              <span
                                className={`inline-block px-3 py-1 rounded text-xs font-black tracking-wider uppercase border ${
                                  student.board === "CBSE"
                                    ? "bg-blue-500/20 text-blue-300 border-blue-500/50 shadow-[0_0_10px_rgba(59,130,246,0.3)]"
                                    : "bg-green-500/20 text-green-300 border-green-500/50 shadow-[0_0_10px_rgba(34,197,94,0.3)]"
                                }`}
                              >
                                {student.board}
                              </span>
                            </div>
                          )}

                          {/* NAME */}
                          <h4 className="text-2xl font-bold text-white mb-6 leading-snug pt-2">{student.name}</h4>

                          {/* MARKS WITH CONDITIONAL RENDERING AND GOLDEN HIGHLIGHT FOR 100/100 */}
                          <div className="space-y-4">
                            
                            {student.accounts && student.accounts !== "-" && student.accounts !== "0" && (
                              <div className="flex justify-between border-b border-white/5 pb-2">
                                <span className="text-white/60">Accounts</span>
                                <span className={`${
                                  student.accounts === "100/100" 
                                    ? "text-yellow-400 font-black drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]" 
                                    : "text-accent font-bold"
                                }`}>
                                  {student.accounts}
                                </span>
                              </div>
                            )}
                            
                            {student.stats && student.stats !== "-" && student.stats !== "0" && (
                              <div className="flex justify-between border-b border-white/5 pb-2">
                                <span className="text-white/60">Statistics</span>
                                <span className={`${
                                  student.stats === "100/100" 
                                    ? "text-yellow-400 font-black drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]" 
                                    : "text-accent font-bold"
                                }`}>
                                  {student.stats}
                                </span>
                              </div>
                            )}

                            {student.eco && student.eco !== "-" && student.eco !== "0" && (
                              <div className="flex justify-between border-b border-white/5 pb-2">
                                <span className="text-white/60">Economics</span>
                                <span className={`${
                                  student.eco === "100/100" 
                                    ? "text-yellow-400 font-black drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]" 
                                    : "text-accent font-bold"
                                }`}>
                                  {student.eco}
                                </span>
                              </div>
                            )}

                          </div>
                        </div>

                        {/* RESULT */}
                        {student.percentage && student.percentage !== "-" && (
                          <div className="mt-8 rounded-[24px] bg-gradient-to-r from-accent to-orange-500 py-6 text-center shadow-[0_15px_35px_rgba(255,122,26,0.35)]">
                            <p className="text-white/80 text-sm">Overall Result</p>
                            <h5 className="text-4xl font-black text-white">{student.percentage}</h5>
                          </div>
                        )}

                      </motion.div>
                    );
                  })}
                </div>
              </div>
            );
          })}
      </div>

      {/* BOTTOM TAG */}
      <div className="text-center mt-10 relative z-10">
        <p className="text-white/50 text-lg">Trusted By Thousands Of Commerce Students Since 2003</p>
      </div>
    </section>
  );
}