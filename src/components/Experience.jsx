import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experience = [
  {
    id: 1,
    role: 'Junior Backend Developer',
    company: 'Aegiiz Technologies',
    duration: 'Aug 2025 - Present',
    description: [
      'Developed counselor–patient management system with five user roles',
      'Implemented session management and template-based form workflows',
      'Ensured data privacy and healthcare compliance',
      'Working on dating app and e-commerce platform with AI matchmaking'
    ]
  },
  {
    id: 2,
    role: 'Junior Software Developer',
    company: 'Xtown',
    duration: 'Sept 2025 - Aug 2025',
    description: [
      'Built canteen management system with FastAPI and React/React Native',
      'Implemented role-based authentication and product management',
      'Integrated ESSL biometric device and Razorpay UPI payments',
      'Developed inventory management system with multi-level authentication'
    ]
  },
  {
    id: 3,
    role: 'Education',
    company: 'Master of Computer Applications (MCA)',
    duration: 'Jun 2022 - May 2024',
    description: [
      'Hindusthan College of Arts & Science, Coimbatore',
      'B.Sc. Computer Technology from Kongunadu College (2019-2022)',
      'Certifications in Python Essentials and Data Analysis',
      'Full Stack Development training from QSpiders'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding" style={{ background: 'var(--background)' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ color: 'var(--primary)' }}>Experience</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 h-full w-px transform -translate-x-px" style={{ background: 'var(--secondary)' }} />

            {/* Experience items */}
            <div className="space-y-12">
              {experience.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="flex-1" />
                  <div className="relative flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" 
                         style={{ 
                           backgroundColor: 'var(--accent)', 
                           boxShadow: '0 0 0 4px var(--secondary)'
                         }}>
                      <Briefcase className="w-6 h-6" style={{ color: 'var(--background)' }} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="p-6 rounded-lg shadow-md" style={{ background: 'var(--background)', borderColor: 'var(--primary)' }}>
                      <h3 className="text-xl font-semibold" style={{ color: 'var(--primary)' }}>{item.role}</h3>
                      <p className="mt-1" style={{ color: 'var(--text)' }}>{item.company}</p>
                      <p className="text-sm mt-1" style={{ color: 'var(--secondary)' }}>{item.duration}</p>
                      <ul className="mt-4 space-y-2" style={{ color: 'var(--text)' }}>
                        {item.description.map((desc, i) => (
                          <li key={i} className="flex items-start">
                            <span className="mr-2" style={{ color: 'var(--accent)' }}>•</span>
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}