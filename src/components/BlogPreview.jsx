import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function BlogPreview() {

  const blogs = [
    {
      title: 'Best Commerce Classes In Ahmedabad',
      desc:
        'Why students trust Dattu Sir’s Commerce Academy for Class 11 & 12 coaching.',
      link: '/blog/best-commerce-classes-ahmedabad',
    },

    {
      title: 'How To Score 100 In Accounts',
      desc:
        'Smart study strategy and writing practice tips for commerce students.',
      link: '/blog/how-to-score-100-in-accounts',
    },

    {
      title: 'Importance Of Weekly Tests',
      desc:
        'How weekly tests improve confidence and board exam performance.',
      link: '/blog/importance-of-weekly-tests',
    },
  ];

  return (

    <section className="py-28 px-6 bg-[#04113A]">

      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-16">

          <p className="text-accent uppercase tracking-[0.3em] text-sm mb-4">
            Latest Articles
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
            Commerce Career <span className="text-accent">Guides</span>
          </h2>

          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Expert commerce tips, board exam guidance and study strategies
            for students in Ahmedabad.
          </p>

        </div>

        {/* BLOG GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {blogs.map((blog, i) => (

            <a
              key={i}
              href={blog.link}
              className="
              group
              rounded-[30px]
              border
              border-white/10
              bg-white/[0.04]
              backdrop-blur-xl
              p-8
              hover:border-accent/40
              hover:-translate-y-2
              transition-all
              duration-300
              "
            >

              <div
                className="
                w-14
                h-14
                rounded-2xl
                bg-accent/10
                flex
                items-center
                justify-center
                mb-6
                "
              >

                <ArrowRight className="text-accent w-6 h-6" />

              </div>

              <h3 className="text-2xl font-bold text-white mb-4 leading-snug">
                {blog.title}
              </h3>

              <p className="text-white/70 leading-8">
                {blog.desc}
              </p>

              <div className="mt-8 text-accent font-semibold flex items-center gap-2">

                Read Article

                <ArrowRight className="w-4 h-4" />

              </div>

            </a>

          ))}

        </div>

      </div>

    </section>

  );

}