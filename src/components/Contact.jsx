import React from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock3
} from 'lucide-react';

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 px-5 md:px-10 bg-gradient-to-b from-[#04113A] via-[#061547] to-[#071A52] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent/10 blur-[120px]" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 blur-[120px]" aria-hidden="true" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-4xl md:text-6xl font-display font-bold text-white">
          Contact <span className="text-accent">Us</span>
        </h2>
        <div className="w-28 h-1 bg-accent mx-auto rounded-full mt-5 mb-5" aria-hidden="true" />
        <p className="text-white/70 text-base md:text-xl max-w-2xl mx-auto">
          Get In Touch With Dattu Sir’s Commerce Academy For Admissions & Guidance
        </p>
      </motion.div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">

        {/* LEFT SIDE (Contact Details) */}
        <motion.address
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 not-italic"
        >
          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/919825249281"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Message us on WhatsApp"
            whileHover={{ scale: 1.02 }}
            className="card-premium flex items-center gap-5 rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-green-500/50 transition-all duration-300"
          >
            <div className="bg-green-500/10 p-4 rounded-2xl flex-shrink-0">
              <MessageCircle className="w-7 h-7 text-green-500" aria-hidden="true" />
            </div>
            <div>
              <h4 className="text-2xl font-display text-white mb-1">WhatsApp</h4>
              <p className="text-white/70 text-lg">+91 98252 49281</p>
            </div>
          </motion.a>

          {/* CALL */}
          <motion.a
            href="tel:+919825249281"
            aria-label="Call our office"
            whileHover={{ scale: 1.02 }}
            className="card-premium flex items-center gap-5 rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-blue-500/50 transition-all duration-300"
          >
            <div className="bg-blue-500/10 p-4 rounded-2xl flex-shrink-0">
              <Phone className="w-7 h-7 text-blue-400" aria-hidden="true" />
            </div>
            <div>
              <h4 className="text-2xl font-display text-white mb-1">Call Us</h4>
              <p className="text-white/70 text-lg">+91 98252 49281</p>
            </div>
          </motion.a>

          {/* TIMING */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="card-premium flex items-center gap-5 rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-6 transition-all duration-300"
          >
            <div className="bg-orange-500/10 p-4 rounded-2xl flex-shrink-0">
              <Clock3 className="w-7 h-7 text-accent" aria-hidden="true" />
            </div>
            <div>
              <h4 className="text-2xl font-display text-white mb-1">Timings</h4>
              <p className="text-white/70 text-lg">Mon - Sat : 12:30 PM - 7:00 PM</p>
            </div>
          </motion.div>

          {/* ADDRESS */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="card-premium flex items-start gap-5 rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-6 transition-all duration-300"
          >
            <div className="bg-accent/10 p-4 rounded-2xl flex-shrink-0 mt-1">
              <MapPin className="w-7 h-7 text-accent" aria-hidden="true" />
            </div>
            <div>
              <h4 className="text-2xl font-display text-white mb-3">Location</h4>
              <p className="text-white/70 text-lg leading-relaxed">
                3rd Floor, Purushottam Mahal <br />
                Beside Swaminarayan Clock Tower <br />
                Near Jayhind Char Rasta <br />
                Maninagar, Ahmedabad
              </p>
            </div>
          </motion.div>
        </motion.address>

        {/* RIGHT SIDE (MAP) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[32px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl"
        >
          <iframe
            title="Dattu Sir's Commerce Academy Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.7850236675404!2d72.60745917476945!3d22.99493141736016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85e9da07067f%3A0xcd180c2a69ebe1f7!2sDattu%20sir's%20Commerce%20Academy!5e0!3m2!1sen!2sin!4v1779343983979!5m2!1sen!2sin"
            width="100%"
            height="620"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[500px] lg:h-[620px]"
          ></iframe>
        </motion.div>

      </div>
    </section>
  );
}