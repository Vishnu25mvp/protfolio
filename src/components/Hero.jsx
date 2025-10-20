import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="section-padding min-h-screen flex items-center" 
             style={{ 
               background: `linear-gradient(to bottom right, var(--primary), var(--secondary))`
             }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ color: 'var(--background)' }}>
            Vishnu Prakash
            <span className="block mt-4 text-3xl md:text-5xl" style={{ color: 'var(--accent)' }}>Junior Backend Developer</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto" style={{ color: 'var(--background)' }}>
            Experienced in Python, FastAPI, Express.js, and building scalable backend architectures.
            Specializing in API design and AI system integration.
          </p>
          <motion.a
            href="/resume.pdf"
            download
            className="btn btn-secondary inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={20} />
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}