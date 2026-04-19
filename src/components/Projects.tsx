'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'PharmaAssist-AI',
    subtitle: 'Intelligent Pharmacy Support Agent',
    description: 'Built a LangGraph orchestrator with intent classification, RAG-based FAQ retrieval, PostgreSQL tool-calling, and human escalation routing for end-to-end pharmacy support. Developed a dual-view Streamlit interface for customer chat and supervisor operations.',
    tech: ['Python', 'LangGraph', 'LangChain', 'ChromaDB', 'PostgreSQL', 'Groq', 'FastAPI', 'Streamlit', 'HuggingFace'],
    github: 'https://github.com/Saran-droid/pharmaassist-ai',
    featured: true
  },
  {
    title: 'Interview Voice Agent',
    subtitle: 'AI-Powered Voice Interview Screening',
    description: 'Created an AI voice agent that conducts initial interview screening rounds through phone calls. Built an HR-focused system that stores candidate context in PostgreSQL and sends automated SMS/email notifications.',
    tech: ['Python', 'Twilio', 'FastAPI', 'MCP', 'Groq', 'PostgreSQL', 'Ngrok'],
    github: 'https://github.com/Saran-droid/Interview-voice-agent',
    featured: true
  },
  {
    title: 'Agentic RAG',
    subtitle: 'Intelligent Document Q&A System',
    description: 'An intelligent chatbot using Retrieval-Augmented Generation (RAG) to answer questions based on uploaded PDF documents. Features semantic search, ReAct reasoning pattern, and persistent vector storage.',
    tech: ['Python', 'LangGraph', 'LangChain', 'ChromaDB', 'Groq', 'FastAPI', 'Streamlit'],
    github: 'https://github.com/Saran-droid/Agentic-rag',
    featured: true
  },
  {
    title: 'NL to DB',
    subtitle: 'Natural Language Data Assistant',
    description: 'Developed a multi-server MCP agent with Streamlit interface that converts natural-language questions into SQL queries, CSV analysis, and aggregated tabular outputs using AI.',
    tech: ['Python', 'Streamlit', 'MCP', 'LangGraph', 'Groq', 'PostgreSQL', 'Pandas', 'PandasAI'],
    github: 'https://github.com/Saran-droid/NL_to_DB',
    featured: false
  },
  {
    title: 'Notes QA Bot',
    subtitle: 'PDF-based Question Answering',
    description: 'PDF-based RAG system for academic documents. Users can upload PDFs and ask questions to receive intelligent answers using LLMs via OpenRouter. Features text chunking, embeddings, and vector storage.',
    tech: ['Python', 'ChromaDB', 'Sentence Transformers', 'OpenRouter', 'Docker'],
    github: 'https://github.com/Saran-droid/Notes-QA-Bot',
    featured: false
  },
  {
    title: 'Question Paper Generator',
    subtitle: 'AI-Powered Academic Tool',
    description: 'AI-powered question paper generation system for academic use. Generates questions using Groq LLM based on marks, topic, and Bloom\'s taxonomy level. Features question bank management and CIAT paper generation.',
    tech: ['Python', 'FastAPI', 'Next.js', 'Groq', 'SQLite', 'TypeScript'],
    github: 'https://github.com/Saran-droid/Question-paper-generator-using-generative-AI',
    featured: false
  },
  {
    title: 'Book Recommendation System',
    subtitle: 'Vector-Based Semantic Retrieval',
    description: 'Built an NLP recommendation engine using ChromaDB and HuggingFace embeddings to semantically match reader queries to relevant books with emotional filtering and genre-based recommendations.',
    tech: ['Python', 'Gradio', 'LangChain', 'ChromaDB', 'HuggingFace'],
    github: 'https://github.com/Saran-droid/Book-recommendation-system',
    featured: false
  },
  {
    title: 'Farmer\'s AI Chatbot',
    subtitle: 'Agricultural Information Assistant',
    description: 'AI chatbot for farmers providing market prices, pest control, and fertilizer recommendations with intelligent query classification via OpenRouter models. Features multilingual support and speech recognition.',
    tech: ['Flask', 'OpenRouter API', 'LangChain', 'Pandas'],
    github: 'https://github.com/Saran-droid/Farmer-s-Chatbot',
    demo: 'https://farmer-s-chatbot-1.onrender.com',
    featured: false
  }
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-gray-800 dark:text-white">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col ${
                  project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="p-6 flex flex-col flex-1">
                  {project.featured && (
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-semibold rounded-full mb-3 self-start">
                      Featured
                    </span>
                  )}
                  
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-3">
                    {project.subtitle}
                  </p>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium">
                        +{project.tech.length - 4} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-lg transition-all duration-300 text-sm font-medium"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg transition-all duration-300 text-sm font-medium"
                      >
                        <ExternalLink size={16} />
                        <span>Demo</span>
                      </a>
                    )}
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
