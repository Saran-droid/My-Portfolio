'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Code, Database, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'AI & LLM',
    icon: Brain,
    skills: [
      'LangGraph', 'LangChain', 'RAG', 'MCP', 'ChromaDB',
      'OpenAI API', 'Groq', 'HuggingFace Transformers',
      'Sentence-Transformers', 'Whisper', 'BLIP',
      'Machine Learning', 'Deep Learning'
    ],
    color: 'from-blue-500 to-indigo-500'
  },
  {
    title: 'Backend & APIs',
    icon: Code,
    skills: [
      'FastAPI', 'Streamlit', 'REST APIs', 'Twilio',
      'PostgreSQL', 'Docker', 'Docker Compose'
    ],
    color: 'from-indigo-500 to-purple-500'
  },
  {
    title: 'Data & ML',
    icon: Database,
    skills: [
      'Pandas', 'NumPy', 'scikit-learn', 'PyTorch',
      'OpenCV', 'EasyOCR', 'pdfplumber', 'openpyxl',
      'asyncio', 'NLP', 'Feature Engineering',
      'Model Optimization', 'Data Analysis'
    ],
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Tools & Languages',
    icon: Wrench,
    skills: [
      'Python', 'SQL', 'Java', 'Playwright',
      'Stagehand', 'Git', 'GitHub', 'VS Code',
      'Jupyter Notebook'
    ],
    color: 'from-pink-500 to-red-500'
  }
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-gray-800 dark:text-white">
            Skills & Technologies
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className={`h-2 bg-gradient-to-r ${category.color}`} />
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                        <Icon className="text-white" size={24} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                        {category.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                        <motion.span
                          key={i}
                          className="px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
