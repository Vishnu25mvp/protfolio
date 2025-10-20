// import { motion } from 'framer-motion';
// import { ThemeContext, ThemeProvider } from '../context/ThemeContext';
// const skills = [
//   'Python', 'JavaScript', 'FastAPI', 'Express.js', 'Flask', 'RAG Model Integration',
//   'MySQL', 'Git', 'Git Actions', 'Docker', 'Nginx', 'Kubernetes'
// ];

// export default function About() {
//   return (
//     <section id="about" className="section-padding" style={{ background: 'var(--background)' }}>
//       <div className="max-w-7xl mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           className="grid md:grid-cols-2 gap-12 items-center"
//         >
//           <div className="space-y-8">
//             <div>
//               <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--primary)' }}>About Me</h2>
//               <div className="w-20 h-1.5 rounded-full" style={{ background: 'var(--secondary)' }}></div>
//             </div>
//             <div className="space-y-6">
//               <p className="text-lg leading-relaxed" style={{ color: 'var(--text)' }}>
//                 Junior Backend Developer with hands-on experience in Python, FastAPI, Express.js (Node.js), 
//                 and SQL. Experienced in API design, backend system development, and deployment using Nginx.
//               </p>
//               <p className="text-lg leading-relaxed" style={{ color: 'var(--text)' }}>
//                 Worked on integration of RAG (Retrieval-Augmented Generation) models and AI-based systems. 
//                 Actively contributing to large-scale live projects including a dating application, e-commerce 
//                 platform, and inventory management system.
//               </p>
//             </div>
//             <div className="space-y-4">
//               <h3 className="text-2xl font-bold" style={{ color: 'var(--primary)' }}>Career Highlights</h3>
//               <ul className="space-y-3" style={{ color: 'var(--text)' }}>
//                 <li className="flex items-start gap-3">
//                   <span style={{ color: 'var(--accent)' }} className="mt-1.5">•</span>
//                   <span>Experienced in API design and backend system development</span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <span style={{ color: 'var(--accent)' }} className="mt-1.5">•</span>
//                   <span>Integration of RAG models and AI-based systems</span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <span style={{ color: 'var(--accent)' }} className="mt-1.5">•</span>
//                   <span>Docker and Linux server deployments</span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <span style={{ color: 'var(--accent)' }} className="mt-1.5">•</span>
//                   <span>CI/CD pipeline implementation</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div>
//             <div className="relative">
//               <div className="absolute inset-0 bg-secondary-20 rounded-lg transform -rotate-6"></div>
//               <img
//                 src="/profile-image.jpg"
//                 alt="Profile"
//                 className="relative rounded-lg w-full max-w-md mx-auto shadow-xl"
//               />
//             </div>
//             <div className="mt-8">
//               <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--primary)' }}>Technical Skills</h3>
//               <div className="flex flex-wrap gap-2">
//                 {skills.map((skill) => (
//                   <span
//                     key={skill}
//                     className="px-3 py-1 rounded-full text-sm font-medium"
//                     style={{ 
//                       backgroundColor: 'var(--accent)',
//                       color: 'var(--background)',
//                       opacity: 0.9
//                     }}
//                   >
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }



import { motion } from 'framer-motion';
import { useContext } from 'react'; // Import useContext
import { ThemeContext } from '../context/ThemeContext'; // Import ThemeContext
import profile from '../assets//juanjo-jaramillo-mZnx9429i94-unsplash.jpg'
const skills = [
  'Python', 'JavaScript', 'FastAPI', 'Express.js', 'Flask', 'RAG Model Integration',
  'MySQL', 'Git', 'Git Actions', 'Docker', 'Nginx', 'Kubernetes'
];

export default function About() {
  // Consume ThemeContext
  const { theme, setTheme, isDark, themes, allThemes } = useContext(ThemeContext);

  return (
    <section id="about" className="section-padding" style={{ background: themes.background }}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Theme Switcher */}
        {/* <div className="mb-6">
          <label htmlFor="theme-select" className="text-lg font-medium" style={{ color: themes.text }}>
            Select Theme:
          </label>
          <select
            id="theme-select"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="ml-2 p-2 rounded"
            style={{ background: themes.background, color: themes.text, borderColor: themes.primary }}
          >
            {allThemes.map((themeOption) => (
              <option key={themeOption} value={themeOption}>
                {themeOption.charAt(0).toUpperCase() + themeOption.slice(1)}
              </option>
            ))}
          </select>
        </div> */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: themes.primary }}>
                About Me
              </h2>
              <div className="w-20 h-1.5 rounded-full" style={{ background: themes.secondary }}></div>
            </div>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed" style={{ color: themes.text }}>
                Junior Backend Developer with hands-on experience in Python, FastAPI, Express.js (Node.js), 
                and SQL. Experienced in API design, backend system development, and deployment using Nginx.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: themes.text }}>
                Worked on integration of RAG (Retrieval-Augmented Generation) models and AI-based systems. 
                Actively contributing to large-scale live projects including a dating application, e-commerce 
                platform, and inventory management system.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold" style={{ color: themes.primary }}>
                Career Highlights
              </h3>
              <ul className="space-y-3" style={{ color: themes.text }}>
                <li className="flex items-start gap-3">
                  <span style={{ color: themes.accent }} className="mt-1.5">•</span>
                  <span>Experienced in API design and backend system development</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: themes.accent }} className="mt-1.5">•</span>
                  <span>Integration of RAG models and AI-based systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: themes.accent }} className="mt-1.5">•</span>
                  <span>Docker and Linux server deployments</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: themes.accent }} className="mt-1.5">•</span>
                  <span>CI/CD pipeline implementation</span>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="relative">
              <div
                className="absolute inset-0 rounded-lg transform -rotate-6"
                style={{ background: themes.secondary }}
              ></div>
              <img
                src={profile}
                alt="Profile"
                className="relative rounded-lg w-full max-w-md mx-auto shadow-xl"
              />
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4" style={{ color: themes.primary }}>
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-sm font-medium"
                    style={{
                      backgroundColor: themes.accent,
                      color: themes.background,
                      opacity: 0.9
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
