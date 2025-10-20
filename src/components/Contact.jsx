// pages/Contact.jsx
import { motion } from 'framer-motion';
import { Mail, Linkedin, Send, Phone } from 'lucide-react';
import { useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // ✅ Get theme info
  const { theme, setTheme, allThemes, themes } = useContext(ThemeContext);
  const currentTheme = themes;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="section-padding min-h-screen flex flex-col items-center justify-center transition-all"
      style={{
        backgroundColor: currentTheme.background,
        color: currentTheme.text,
      }}
    >
      <div className="max-w-6xl w-full px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Theme Switcher Dropdown */}
          {/* <div className="flex justify-end mb-6">
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="px-3 py-2 rounded-lg border"
              style={{
                backgroundColor: currentTheme.background,
                color: currentTheme.text,
                borderColor: currentTheme.primary,
              }}
            >
              {allThemes.map((t) => (
                <option key={t} value={t}>
                  {t.charAt(0).toUpperCase() + t.slice(1)} Theme
                </option>
              ))}
            </select>
          </div> */}

          <h2
            className="text-4xl font-bold text-center mb-12"
            style={{ color: currentTheme.primary }}
          >
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Side */}
            <div>
              <h3
                className="text-2xl font-semibold mb-6"
                style={{ color: currentTheme.primary }}
              >
                Let's Connect
              </h3>
              <p className="mb-8">I'm open to new ideas and collaborations.</p>

              <div className="space-y-4">
                {[
                  {
                    icon: <Mail className="w-6 h-6" />,
                    text: 'vishnuprakashdev@zohomail.in',
                    href: 'mailto:vishnuprakashdev@zohomail.in',
                  },
                  {
                    icon: <Phone className="w-6 h-6" />,
                    text: '+91 8608703560',
                    href: 'tel:+918608703560',
                  },
                  {
                    icon: <Linkedin className="w-6 h-6" />,
                    text: 'linkedin.com/in/vishnu25mvp',
                    href: 'https://linkedin.com/in/vishnu25mvp',
                  },
                ].map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 transition-colors"
                    style={{ color: currentTheme.text }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.color = currentTheme.accent)
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.color = currentTheme.text)
                    }
                  >
                    {link.icon}
                    <span>{link.text}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Right Side */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                {['name', 'email', 'message'].map((field) => (
                  <div key={field}>
                    <label
                      htmlFor={field}
                      className="block text-sm font-medium mb-2"
                    >
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                    {field !== 'message' ? (
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        id={field}
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-lg border focus:outline-none"
                        style={{
                          backgroundColor: currentTheme.background,
                          color: currentTheme.text,
                          borderColor: currentTheme.primary,
                        }}
                      />
                    ) : (
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-lg border focus:outline-none"
                        style={{
                          backgroundColor: currentTheme.background,
                          color: currentTheme.text,
                          borderColor: currentTheme.primary,
                        }}
                      />
                    )}
                  </div>
                ))}

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium"
                  style={{
                    backgroundColor: currentTheme.primary,
                    color: currentTheme.background,
                    borderColor: currentTheme.primary,
                  }}
                >
                  <Send size={20} />
                  Send Message
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
