'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'AI / ML Engineer Intern',
    company: 'Value Health Inc.',
    location: 'Coimbatore, India',
    period: 'Sept 2025 – Apr 2026',
    description: [
      'Built LLM-orchestrated agentic RAG pipelines with LangGraph for healthcare workflows and knowledge retrieval',
      'Designed an API-chain system to fetch real-time drug cost and benefit data from insurance backend endpoints for formulary and verification workflows',
      'Developed multi-payer data deduplication and aggregation pipelines using Python, Pandas, and asyncio, producing structured Excel/CSV outputs for large batch jobs',
      'Built a PDF comparison microservice using FastAPI, pdfplumber, and Groq LLM to detect document changes and store AI-generated summaries in PostgreSQL'
    ],
    tech: ['Python', 'LangGraph', 'LangChain', 'FastAPI', 'Pandas', 'asyncio', 'PostgreSQL', 'Groq', 'Playwright', 'Stagehand', 'Node.js', 'Docker']
  },
  {
    title: 'Data Science Intern (Virtual)',
    company: 'Codtechit Solutions',
    location: 'Remote',
    period: 'June 2024 – July 2024',
    description: [
      'Built an NLP web app for customer review sentiment analysis using tokenization, stemming, lemmatization, and stop-word removal, achieving 92% accuracy',
      'Fine-tuned a ResNet-9 model for plant disease recognition to improve automated image classification performance'
    ],
    tech: ['Python', 'scikit-learn', 'NLP', 'PyTorch', 'OpenCV']
  },
  {
    title: 'ML Intern (Virtual)',
    company: 'Yaane Technologies',
    location: 'Remote',
    period: 'Dec 2023 – Jan 2024',
    description: [
      'Implemented checkbox detection in scanned forms using OpenCV and image processing techniques',
      'Gained hands-on experience building computer vision pipelines for document analysis'
    ],
    tech: ['Python', 'OpenCV']
  }
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-gray-800 dark:text-white">
            Experience
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold mb-2">
                        <Briefcase size={18} />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-3 text-gray-700 dark:text-gray-300">
                        <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
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
    </section>
  );
}
