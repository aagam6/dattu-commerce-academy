import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Results() {

  const [activeYear, setActiveYear] = useState("2024-25");

  const resultsData = [

    {
      year: "2024-25",
      students: [
        {
          name: "Harsh Sharma",
          accounts: "100/100",
          stats: "100/100",
          percentage: "94%",
        },
        {
          name: "Parth Shah",
          accounts: "100/100",
          stats: "100/100",
          percentage: "94%",
        },
        {
          name: "Nandini Acharya",
          accounts: "100/100",
          stats: "100/100",
          percentage: "92%",
        },
        {
          name: "Arshi Jain",
          accounts: "100/100",
          stats: "100/100",
          percentage: "91%",
        },
        {
          name: "Muskan Lakhotia",
          accounts: "98/100",
          stats: "-",
          percentage: "98%",
        },
        {
          name: "Yukti Jain",
          accounts: "99/100",
          stats: "-",
          percentage: "96%",
        },
        {
          name: "Yashika Rathi",
          accounts: "96/100",
          stats: "-",
          percentage: "95.4%",
        },
      ],
    },

    {
      year: "2023-24",
      students: [
        {
          name: "Bakshish Bhardwaj",
          accounts: "100/100",
          stats: "100/100",
          percentage: "100%",
        },
        {
          name: "Dhruvil Jadav",
          accounts: "100/100",
          stats: "99/100",
          percentage: "99%",
        },
        {
          name: "Soha Shaikh",
          accounts: "96/100",
          stats: "100/100",
          percentage: "100%",
        },
        {
          name: "Nakul Balange",
          accounts: "99/100",
          stats: "100/100",
          percentage: "100%",
        },
        {
          name: "Yug Patel",
          accounts: "98/100",
          stats: "100/100",
          percentage: "100%",
        },
        {
          name: "Pranjal Gandhi",
          accounts: "95/100",
          stats: "-",
          percentage: "88%",
        },
      ],
    },

    {
      year: "2022-23",
      students: [
        {
          name: "Vanshita Jain",
          accounts: "100/100",
          stats: "-",
          percentage: "95%",
        },
        {
          name: "Mishti Patwari",
          accounts: "98/100",
          stats: "-",
          percentage: "97%",
        },
        {
          name: "Manasvi Saboo",
          accounts: "95/100",
          stats: "-",
          percentage: "95%",
        },
        {
          name: "Rudransh Narang",
          accounts: "95/100",
          stats: "-",
          percentage: "93%",
        },
      ],
    },

    {
      year: "2021-22",
      students: [
        {
          name: "Purva Nawathe",
          accounts: "99/100",
          stats: "100/100",
          percentage: "100%",
        },
        {
          name: "Dhairyan Desai",
          accounts: "99/100",
          stats: "100/100",
          percentage: "100%",
        },
        {
          name: "Kevin Sheth",
          accounts: "99/100",
          stats: "100/100",
          percentage: "100%",
        },
      ],
    },

  ];

  return (

    <section
      id="results"
      className="
      relative
      overflow-hidden
      py-28
      px-6
      bg-gradient-to-b
      from-[#061547]
      via-[#071A57]
      to-[#04113A]
      "
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-accent/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full"></div>

      {/* HEADING */}
      <div className="text-center mb-24 relative z-10">

        <p
          className="
          text-accent
          uppercase
          tracking-[0.3em]
          text-sm
          font-semibold
          mb-5
          "
        >
          Student Achievements
        </p>

        <h2
          className="
          text-4xl
          md:text-6xl
          font-black
          text-white
          leading-tight
          "
        >
          Ahmedabad Commerce
          <span className="text-accent"> Toppers</span>
        </h2>

        <div className="w-24 h-1 bg-accent mx-auto rounded-full mt-6 mb-6"></div>

        <p
          className="
          text-white/70
          text-lg
          max-w-3xl
          mx-auto
          leading-relaxed
          "
        >
          Top Commerce Coaching Results In Ahmedabad
          For Class 11 & 12 Students Since 2003.
        </p>

      </div>

      {/* STATS */}
      <div
        className="
        grid
        grid-cols-2
        md:grid-cols-4
        gap-5
        max-w-6xl
        mx-auto
        mb-20
        relative
        z-10
        "
      >

        {[
          { value: "5000+", label: "Students Trained" },
          { value: "20+", label: "Years Experience" },
          { value: "100%", label: "Result Focused" },
          { value: "100/100", label: "Top Scores" },
        ].map((item, i) => (

          <div
            key={i}
            className="
            bg-white/[0.06]
            border
            border-white/10
            rounded-[30px]
            p-7
            text-center
            backdrop-blur-2xl
            shadow-[0_15px_40px_rgba(0,0,0,0.25)]
            "
          >

            <h3
              className="
              text-3xl
              md:text-5xl
              font-black
              text-accent
              "
            >
              {item.value}
            </h3>

            <p className="text-white/60 mt-3">
              {item.label}
            </p>

          </div>

        ))}

      </div>

      {/* FILTER BUTTONS */}
      <div
        className="
        flex
        flex-wrap
        justify-center
        gap-4
        mb-20
        relative
        z-10
        "
      >

        {resultsData.map((item, i) => (

          <button
            key={i}
            onClick={() => setActiveYear(item.year)}
            className={`
            px-7
            py-3
            rounded-full
            font-bold
            transition-all
            duration-300
            border

            ${
              activeYear === item.year
                ? "bg-accent text-white border-accent shadow-[0_10px_30px_rgba(255,122,26,0.35)]"
                : "bg-white/5 text-white border-white/10 hover:border-accent/50"
            }
            `}
          >

            {item.year}

          </button>

        ))}

      </div>

      {/* RESULTS */}
      <div className="max-w-7xl mx-auto relative z-10">

        {resultsData
          .filter((yearData) => yearData.year === activeYear)
          .map((yearData, i) => (

            <div
              key={i}
              className="mb-24"
            >

              {/* YEAR BADGE */}
              <div className="mb-12">

                <div
                  className="
                  inline-flex
                  items-center
                  gap-3
                  bg-white/5
                  border
                  border-white/10
                  px-7
                  py-4
                  rounded-full
                  backdrop-blur-xl
                  "
                >

                  <div className="w-3 h-3 bg-accent rounded-full"></div>

                  <h3
                    className="
                    text-2xl
                    md:text-4xl
                    font-black
                    text-white
                    "
                  >
                    {yearData.year}
                  </h3>

                </div>

              </div>

              {/* STUDENTS */}
              <div
                className="
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-4
                gap-7
                "
              >

                {yearData.students.map((student, idx) => (

                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: idx * 0.05,
                    }}
                    whileHover={{
                      y: -12,
                      scale: 1.04,
                    }}
                    className="
                    relative
                    rounded-[32px]
                    border
                    border-white/10
                    bg-white/[0.06]
                    backdrop-blur-2xl
                    p-7
                    shadow-[0_15px_40px_rgba(0,0,0,0.25)]
                    hover:shadow-[0_25px_60px_rgba(255,122,26,0.25)]
                    transition-all
                    duration-500
                    "
                  >

                    {/* TOPPER BADGE */}
                    {idx < 3 && (

                      <div
                        className="
                        absolute
                        top-5
                        right-5
                        bg-yellow-400
                        text-black
                        px-3
                        py-1
                        rounded-full
                        text-xs
                        font-bold
                        shadow-lg
                        "
                      >
                        TOPPER
                      </div>

                    )}

                    {/* RANK */}
                    <p
                      className="
                      text-accent
                      text-sm
                      font-semibold
                      mb-3
                      "
                    >
                      Rank #{idx + 1}
                    </p>

                    {/* NAME */}
                    <h4
                      className="
                      text-2xl
                      font-bold
                      text-white
                      mb-6
                      leading-snug
                      "
                    >
                      {student.name}
                    </h4>

                    {/* MARKS */}
                    <div className="space-y-4">

                      <div className="flex justify-between">

                        <span className="text-white/60">
                          Accounts
                        </span>

                        <span className="text-accent font-bold">
                          {student.accounts}
                        </span>

                      </div>

                      <div className="flex justify-between">

                        <span className="text-white/60">
                          Statistics
                        </span>

                        <span className="text-accent font-bold">
                          {student.stats}
                        </span>

                      </div>

                    </div>

                    {/* RESULT */}
                    <div
                      className="
                      mt-8
                      rounded-[24px]
                      bg-gradient-to-r
                      from-accent
                      to-orange-500
                      py-6
                      text-center
                      shadow-[0_15px_35px_rgba(255,122,26,0.35)]
                      "
                    >

                      <p className="text-white/80 text-sm">
                        Overall Result
                      </p>

                      <h5
                        className="
                        text-4xl
                        font-black
                        text-white
                        "
                      >
                        {student.percentage}
                      </h5>

                    </div>

                  </motion.div>

                ))}

              </div>

            </div>

          ))}

      </div>

      {/* BOTTOM TAG */}
      <div className="text-center mt-10 relative z-10">

        <p className="text-white/50 text-lg">
          Trusted By Thousands Of Commerce Students Since 2003
        </p>

      </div>

    </section>

  );

}