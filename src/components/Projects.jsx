import { motion } from 'framer-motion';
import { useState, useContext } from 'react';
import Modal from 'react-modal';
import { Github, ExternalLink, X } from 'lucide-react';
import { ThemeContext } from '../context/ThemeContext';

Modal.setAppElement('#root');

const projects = [
  {
    id: 1,
    title: 'Canteen Management System',
    description:
      'Developed a comprehensive canteen management system for Prithivi Innerwear using FastAPI backend integrated with React/React Native frontend. Implemented biometric authentication and digital payments.',
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=2000',
    tech: ['FastAPI', 'React', 'React Native', 'Razorpay'],
    github: 'https://github.com/vishnuprksh/canteen-management',
    highlights: [
      'Role-based authentication (User, Admin)',
      'ESSL biometric integration',
      'Razorpay UPI integration',
      'Automated thermal printing system',
    ],
  },
  {
    id: 2,
    title: 'Inventory Management System',
    description:
      'Designed and developed a complete inventory management system for VHI Borewells with multi-level authentication and comprehensive stock management features.',
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000',
    tech: ['FastAPI', 'React', 'MySQL', 'Docker'],
    github: 'https://github.com/vishnuprksh/inventory-management',
    highlights: [
      'Multi-level authentication system',
      'Stock & Vehicle tracking',
      'Vendor/Product/Vehicle-wise ledger',
      'Comprehensive PO/GRN system',
    ],
  },
  {
    id: 3,
    title: 'Hygeia Healthcare Platform',
    description:
      'Built a counselor-patient management system with five user roles, focusing on healthcare compliance and data privacy. Implemented comprehensive session management and template-based workflows.',
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2000',
    tech: ['FastAPI', 'React', 'MySQL', 'Docker'],
    github: 'https://github.com/vishnuprksh/hygeia-healthcare',
    highlights: [
      'Five-tier role-based access',
      'Session management system',
      'Healthcare compliance',
      'Template-based workflows',
    ],
  },
  {
    id: 4,
    title: 'Dating & E-Commerce Platform',
    description:
      'Currently developing a modern dating app and e-commerce platform featuring AI-powered matchmaking, real-time chat, and comprehensive multi-vendor management.',
    image:
      'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=2000',
    tech: ['FastAPI', 'Express.js', 'MySQL', 'WebSocket', 'OpenAI'],
    github: 'https://github.com/vishnuprksh/dating-ecommerce',
    highlights: [
      'AI-powered matchmaking',
      'Real-time WebSocket chat',
      'Multi-vendor system',
      'PhonePe integration',
    ],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // ✅ Consume ThemeContext
  const { themes: currentTheme } = useContext(ThemeContext);

  return (
    <section
      id="projects"
      className="section-padding"
      style={{
        backgroundColor: currentTheme.background,
        color: currentTheme.text,
        transition: 'background-color 0.3s, color 0.3s',
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="mb-16 text-center">
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: currentTheme.primary }}
            >
              Featured Projects
            </h2>
            <div
              className="w-24 h-1 mx-auto mb-6 rounded-full"
              style={{ backgroundColor: currentTheme.secondary }}
            ></div>
            <p
              className="text-xl max-w-3xl mx-auto font-medium"
              style={{ color: currentTheme.text }}
            >
              Showcasing my expertise in backend development, featuring projects
              built with FastAPI, Express.js, and modern technologies.
            </p>
          </div>

          {/* Project Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                style={{
                  backgroundColor: currentTheme.background,
                  border: `1px solid ${currentTheme.primary}30`,
                }}
              >
                <div className="relative aspect-[16/10] group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                    style={{
                      backgroundColor: `${currentTheme.primary}cc`,
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 shadow-lg"
                      style={{
                        backgroundColor: currentTheme.secondary,
                        color: currentTheme.background,
                      }}
                    >
                      <span>Project Details</span>
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </div>

                <div className="p-8">
                  <h3
                    className="text-2xl font-bold mb-4"
                    style={{ color: currentTheme.primary }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="mb-6 line-clamp-3 text-lg"
                    style={{ color: currentTheme.text }}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-sm px-3 py-2 rounded-lg font-medium"
                        style={{
                          backgroundColor: `${currentTheme.secondary}22`,
                          color: currentTheme.secondary,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={!!selectedProject}
        onRequestClose={() => setSelectedProject(null)}
        className="max-w-5xl w-11/12 p-10 rounded-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-xl overflow-y-auto max-h-[90vh]"
        style={{
          content: {
            backgroundColor: currentTheme.background,
            color: currentTheme.text,
          },
          overlay: {
            backgroundColor: `${currentTheme.primary}cc`,
            backdropFilter: 'blur(6px)',
          },
        }}
      >
        {selectedProject && (
          <div>
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3
                  className="text-3xl font-bold mb-3"
                  style={{ color: currentTheme.primary }}
                >
                  {selectedProject.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm px-4 py-2 rounded-lg font-medium"
                      style={{
                        backgroundColor: `${currentTheme.primary}22`,
                        color: currentTheme.primary,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-xl transition-colors"
                style={{
                  color: currentTheme.text,
                  backgroundColor: `${currentTheme.primary}22`,
                }}
              >
                <X size={28} />
              </button>
            </div>

            <div className="relative aspect-[16/9] mb-10 rounded-2xl overflow-hidden shadow-xl">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid md:grid-cols-[3fr,2fr] gap-10">
              <div>
                <h4
                  className="text-2xl font-bold mb-4"
                  style={{ color: currentTheme.primary }}
                >
                  About the Project
                </h4>
                <p
                  className="mb-8 leading-relaxed text-lg"
                  style={{ color: currentTheme.text }}
                >
                  {selectedProject.description}
                </p>
                <div className="flex gap-4">
                  {/* <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 rounded-xl flex items-center gap-3 font-semibold shadow-lg"
                    style={{
                      backgroundColor: currentTheme.primary,
                      color: currentTheme.background,
                    }}
                  >
                    <Github size={22} />
                    View Source Code
                  </a> */}
                </div>
              </div>

              <div
                className="rounded-2xl p-8"
                style={{
                  backgroundColor: `${currentTheme.primary}11`,
                }}
              >
                <h4
                  className="text-xl font-bold mb-6"
                  style={{ color: currentTheme.primary }}
                >
                  Key Features
                </h4>
                <ul className="space-y-4">
                  {selectedProject.highlights.map((highlight, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-lg"
                      style={{ color: currentTheme.text }}
                    >
                      <span
                        style={{
                          color: currentTheme.accent,
                          fontSize: '1.5rem',
                          lineHeight: '1',
                        }}
                      >
                        •
                      </span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
