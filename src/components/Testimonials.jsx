import React from "react";
import { motion } from "framer-motion";
import {
  Star,
  Quote,
  BadgeCheck,
  Users,
  MessageCircle,
} from "lucide-react";

export default function Testimonials() {

  const testimonials = [

    {
      name: "Vanshika Raghav",
      role: "Commerce Student",
      result: "97/100 in Accounts",
      review:
        "Best teaching institute for commerce. Dattu Sir teaches with so much patience and clarity that all the concepts become clear in one go. I got 97/100 in Accounts after joining the academy.",
    },

    {
      name: "Dhyani Doshi",
      role: "Commerce Student",
      result: "Top Performer",
      review:
        "Dattu Sir is not just a teacher but a mentor and guide who deeply cares about every student’s success. The learning environment and guidance are truly exceptional.",
    },

    {
      name: "Prem Soni",
      role: "Class 12 Student",
      result: "Strong Concept Clarity",
      review:
        "Best tuition classes for Class 11 & 12 Commerce with limited batch size, AC facility, weekly tests, and unlimited doubt support. Dattu Sir’s lectures are invaluable.",
    },

    {
      name: "Nandini Sharma",
      role: "Commerce Student",
      result: "Excellent Academic Growth",
      review:
        "Every topic is taught with such clarity that I understand everything in one go. Even doubts are solved properly and the faculty is outstanding.",
    },

    {
      name: "Hina Patel",
      role: "Board Student",
      result: "90%+ in Boards",
      review:
        "One of the best tuition academies in Maninagar. The teaching skills and doubt-solving sessions helped me score above 90 percent in 12th boards.",
    },

    {
      name: "Kavya Parikh",
      role: "Commerce Student",
      result: "Accounts & Statistics",
      review:
        "Absolutely the best experience at Dattu Sir’s academy. Perfect place to learn Accounts and Statistics with personal attention and supportive teachers.",
    },

  ];

  return (

    <section
      id="testimonials"
      className="
      relative
      overflow-hidden
      py-28
      px-6
      bg-gradient-to-b
      from-[#04113A]
      via-[#061547]
      to-[#071A57]
      "
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-accent/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >

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
            Google Reviews
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
            Best Commerce Coaching
            <span className="text-accent"> Reviews</span>
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
            Trusted By Thousands Of Commerce Students &
            Parents Since 2003 With Excellent Board Results.
          </p>

          {/* GOOGLE RATING */}
          <div
            className="
            inline-flex
            items-center
            gap-4
            bg-white/5
            border
            border-white/10
            px-7
            py-4
            rounded-full
            backdrop-blur-xl
            mt-10
            "
          >

            <div className="flex gap-1">

              {[1,2,3,4,5].map((star) => (

                <Star
                  key={star}
                  className="
                  w-5
                  h-5
                  text-yellow-400
                  fill-yellow-400
                  "
                />

              ))}

            </div>

            <p className="text-white font-semibold text-lg">
              5.0 Google Rating
            </p>

          </div>

        </motion.div>

        {/* STATS */}
        <div
          className="
          grid
          grid-cols-2
          md:grid-cols-4
          gap-5
          mb-20
          "
        >

          {[
            {
              value: "10000+",
              label: "Students",
            },

            {
              value: "20+",
              label: "Years Experience",
            },

            {
              value: "100%",
              label: "Focused Guidance",
            },

            {
              value: "Top Results",
              label: "Board Performance",
            },

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

        {/* TESTIMONIAL CARDS */}
        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
          "
        >

          {testimonials.map((item, i) => (

            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-white/10
              bg-white/[0.06]
              backdrop-blur-2xl
              p-8
              shadow-[0_15px_40px_rgba(0,0,0,0.25)]
              hover:shadow-[0_25px_60px_rgba(255,122,26,0.25)]
              transition-all
              duration-500
              "
            >

              {/* GLOW */}
              <div
                className="
                absolute
                top-0
                right-0
                w-40
                h-40
                bg-accent/10
                blur-[80px]
                "
              />

              {/* TOP BAR */}
              <div className="flex items-center justify-between mb-6">

                <div
                  className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-accent/10
                  border
                  border-accent/20
                  flex
                  items-center
                  justify-center
                  "
                >

                  <Quote className="text-accent w-8 h-8" />

                </div>

                <div className="flex gap-1">

                  {[1,2,3,4,5].map((star) => (

                    <Star
                      key={star}
                      className="
                      w-5
                      h-5
                      text-yellow-400
                      fill-yellow-400
                      "
                    />

                  ))}

                </div>

              </div>

              {/* REVIEW */}
              <p
                className="
                text-white/80
                leading-8
                text-lg
                mb-8
                "
              >
                “{item.review}”
              </p>

              {/* RESULT BADGE */}
              <div className="flex flex-wrap gap-3 mb-8">

                <span
                  className="
                  bg-accent/10
                  text-accent
                  px-4
                  py-2
                  rounded-full
                  text-sm
                  border
                  border-accent/20
                  "
                >
                  {item.result}
                </span>

              </div>

              {/* USER */}
              <div
                className="
                flex
                items-center
                justify-between
                "
              >

                <div className="flex items-center gap-4">

                  <div
                    className="
                    w-14
                    h-14
                    rounded-full
                    bg-accent/10
                    border
                    border-accent/20
                    flex
                    items-center
                    justify-center
                    "
                  >

                    <Users className="text-accent w-7 h-7" />

                  </div>

                  <div>

                    <h4
                      className="
                      text-white
                      text-xl
                      font-bold
                      "
                    >
                      {item.name}
                    </h4>

                    <div
                      className="
                      flex
                      items-center
                      gap-2
                      mt-1
                      "
                    >

                      <BadgeCheck className="w-4 h-4 text-accent" />

                      <p className="text-white/60 text-sm">
                        {item.role}
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

        {/* CTA */}
        <div className="text-center mt-24">

          <h3
            className="
            text-3xl
            md:text-5xl
            font-black
            text-white
            mb-6
            "
          >
            Start Your Commerce Success Journey Today
          </h3>

          <p
            className="
            text-white/60
            text-lg
            max-w-2xl
            mx-auto
            mb-10
            "
          >
            Join Ahmedabad’s Trusted Commerce Coaching Academy
            For Class 11 & 12 Students.
          </p>

          <a
            href="https://wa.me/919825249281"
            target="_blank"
            rel="noopener noreferrer"
            className="
            inline-flex
            items-center
            gap-3
            bg-accent
            hover:scale-105
            transition-all
            duration-300
            text-white
            px-8
            py-5
            rounded-2xl
            font-bold
            text-lg
            shadow-[0_15px_40px_rgba(255,122,26,0.35)]
            "
          >

            <MessageCircle className="w-6 h-6" />

            Admissions Open

          </a>

        </div>

      </div>

    </section>

  );

}