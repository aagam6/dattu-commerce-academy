import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Trophy, Target, CalendarDays, BookOpen } from 'lucide-react';

export default function BlogPreview() {
  const blogs = [
    {
      title: 'Best Commerce Classes In Ahmedabad',
      desc: 'Why students trust Dattu Sir’s Commerce Academy for Class 11 & 12 coaching.',
      link: '/blog/best-commerce-classes-ahmedabad',
      icon: Trophy,
    },
    {
      title: 'How To Score 100 In Accounts',
      desc: 'Smart study strategy and writing practice tips for commerce students.',
      link: '/blog/how-to-score-100-in-accounts',
      icon: Target,
    },
    {
      title: 'Importance Of Weekly Tests',
      desc: 'How weekly tests improve confidence and board exam performance.',
      link: '/blog/importance-of-weekly-tests',
      icon: CalendarDays,
    },
  ];

  return (
    <section aria-labelledby="blog-heading" className="relative overflow-hidden py-28 px-6 bg-[#04113A]">
      
      {/* BACKGROUND GLOW EFFECTS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/10 blur-[150px] rounded-full pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* TITLE HEADER */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-2 rounded-full mb-6"
          >
            <BookOpen className="w-4 h-4 text-accent" aria-hidden="true" />
            <span className="text-accent font-semibold text-sm tracking-widest uppercase">Latest Articles</span>
          </motion.div>

          <motion.h2 
            id="blog-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight"
          >
            Commerce Career <span className="text-accent">Guides</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/70 text-lg max-w-2xl mx-auto"
          >
            Expert commerce tips, board exam guidance and study strategies
            for students in Ahmedabad.
          </motion.p>
        </div>

        {/* BLOG GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, i) => {
            const IconComponent = blog.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                <a
                  href={blog.link}
                  aria-label={`Read article: ${blog.title}`}
                  className="group block h-full rounded-[30px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 hover:border-accent/40 hover:bg-white/[0.06] hover:-translate-y-2 shadow-lg hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all duration-300"
                >
                  <article>
                    {/* ICON CONTAINER */}
                    <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="text-accent w-6 h-6" aria-hidden="true" />
                    </div>

                    {/* TITLE */}
                    <h3 className="text-2xl font-bold text-white mb-4 leading-snug group-hover:text-accent transition-colors duration-300">
                      {blog.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="text-white/70 leading-relaxed mb-8">
                      {blog.desc}
                    </p>

                    {/* READ ARTICLE LINK */}
                    <div className="mt-auto pt-4 border-t border-white/5 text-accent font-semibold flex items-center gap-2">
                      Read Article
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" aria-hidden="true" />
                    </div>
                  </article>
                </a>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}