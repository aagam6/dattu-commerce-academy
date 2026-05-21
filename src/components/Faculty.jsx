import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function Faculty() {
  const faculty = [
    {
      name: 'Dattu Sir',
      title: 'Founder & Accounts Faculty',
      specialty: 'Accountancy Expert | 20+ Years',
      image: '/dattu-sir.jpg',
      bio: 'Expert in simplifying complex accounting concepts'
    },
    {
      name: 'Shefali Teacher',
      title: 'Commerce Faculty',
      specialty: 'Economics & Business Studies',
      image: '/placeholder-teacher.jpg',
      bio: 'Passionate educator with focus on practical learning'
    },
    {
      name: 'Rachana Teacher',
      title: 'Statistics Faculty',
      specialty: 'Statistics & Mathematics',
      image: '/placeholder-teacher.jpg',
      bio: 'Makes statistics simple and enjoyable for students'
    },
    {
      name: 'Harsh Sir',
      title: 'Economics Faculty',
      specialty: 'Economics & Market Analysis',
      image: '/placeholder-teacher.jpg',
      bio: 'Real-world application of economic concepts'
    },
    {
      name: 'Jalpan Sir',
      title: 'Business Studies Faculty',
      specialty: 'Business Studies & Entrepreneurship',
      image: '/placeholder-teacher.jpg',
      bio: 'Industry experience brought to classroom teaching'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="faculty" className="section bg-gradient-to-b from-primary to-secondary">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="section-title max-w-6xl mx-auto"
      >
        <h2>Our Expert Faculty</h2>
        <p>Experienced Mentors Dedicated to Your Success</p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto"
      >
        {faculty.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -10 }}
            className="card-premium text-center"
          >
            <div className="mb-4 relative mx-auto w-32 h-32">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-accent">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
            </div>
            <h3 className="text-lg font-display text-light mb-1">{member.name}</h3>
            <p className="text-accent font-semibold text-sm mb-1">{member.title}</p>
            <p className="text-xs text-light text-opacity-70 mb-3">{member.specialty}</p>
            <p className="text-sm text-light text-opacity-80 mb-4">{member.bio}</p>
            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-accent text-accent" />
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}