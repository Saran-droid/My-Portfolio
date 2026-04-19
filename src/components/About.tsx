'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Code, Brain } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            About Me
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <Brain className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">AI/ML Expertise</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Specialized in building LLM agents, agentic RAG pipelines, and multi-agent orchestrators 
                using LangGraph, LangChain, and modern AI frameworks.
              </p>
            </motion.div>

            <motion.div
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center mb-4">
                <Code className="text-indigo-600 dark:text-indigo-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Full-Stack Development</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Proficient in building end-to-end AI applications with FastAPI, PostgreSQL, Docker, 
                and modern web technologies.
              </p>
            </motion.div>

            <motion.div
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="text-purple-600 dark:text-purple-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Production Ready</h3>
              <p className="text-gray-600 dark:text-gray-400">
                7+ months of internship experience building production-grade intelligent systems 
                for healthcare and enterprise applications.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm an AI/ML Engineer with a strong background in NLP, data preprocessing, semantic retrieval, 
              and model development. My expertise includes hands-on experience with LangGraph, MCP, ChromaDB, 
              FastAPI, PostgreSQL, and OpenAI/Groq APIs. I'm passionate about building production-grade 
              intelligent systems that solve real-world problems. Currently seeking opportunities to leverage 
              my skills in AI/ML engineering roles where I can contribute to innovative projects and continue 
              growing as a developer.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
