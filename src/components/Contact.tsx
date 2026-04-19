'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, Github, Linkedin, MapPin } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ragavsaran954@gmail.com',
      href: 'mailto:ragavsaran954@gmail.com',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 81908 61022',
      href: 'tel:+918190861022',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/Saran-droid',
      href: 'https://github.com/Saran-droid',
      color: 'from-gray-700 to-gray-900'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/saranragav-j-u',
      href: 'https://linkedin.com/in/saranragav-j-u',
      color: 'from-blue-600 to-blue-800'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-6 text-gray-800 dark:text-white">
            Get In Touch
          </h2>
          <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
            I'm currently seeking opportunities in AI/ML engineering. Feel free to reach out if you'd like to discuss potential collaborations or opportunities!
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={index}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div className={`h-2 bg-gradient-to-r ${item.color}`} />
                  <div className="p-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                      {item.label}
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300 break-words">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </div>

          <motion.div
            className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 rounded-2xl shadow-xl p-8 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's collaborate on innovative AI/ML projects and create intelligent systems that make a difference.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:ragavsaran954@gmail.com"
                className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Send Email
              </a>
              <a
                href="/Saranragav_Resume.docx"
                download
                className="px-8 py-3 bg-blue-700 text-white rounded-full font-semibold hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Download Resume
              </a>
            </div>
          </motion.div>

          <motion.footer
            className="mt-16 text-center text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <p className="mb-2">
              © 2026 Saranragav J U. All rights reserved.
            </p>
            <p className="text-sm">
              Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion
            </p>
          </motion.footer>
        </motion.div>
      </div>
    </section>
  );
}
