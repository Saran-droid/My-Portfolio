'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const certifications = [
  'Neural Networks & Deep Learning - DeepLearning.ai (Coursera)',
  'Improving Deep Neural Networks - DeepLearning.ai (Coursera)',
  'Exploratory Data Analysis for Machine Learning - IBM (Coursera)',
  'Statistics & Reliability Analysis - NPTEL',
  'Introduction to Data Science - Coursera',
  'Python Classes & Inheritance - Coursera'
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-gray-800 dark:text-white">
            Education & Certifications
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Education */}
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-500" />
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                    <GraduationCap className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                    Education
                  </h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                      B.Tech in Artificial Intelligence & Data Science
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                      KPR Institute of Engineering and Technology
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Nov 2022 – Apr 2026
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-4 rounded-xl">
                      <div className="flex items-center gap-2 mb-2">
                        <BookOpen size={18} className="text-blue-600 dark:text-blue-400" />
                        <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">CGPA</span>
                      </div>
                      <p className="text-2xl font-bold text-gray-800 dark:text-white">7.96/10</p>
                    </div>

                    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-4 rounded-xl">
                      <div className="flex items-center gap-2 mb-2">
                        <Award size={18} className="text-indigo-600 dark:text-indigo-400" />
                        <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">Class 12</span>
                      </div>
                      <p className="text-2xl font-bold text-gray-800 dark:text-white">92%</p>
                    </div>

                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-4 rounded-xl">
                      <div className="flex items-center gap-2 mb-2">
                        <Award size={18} className="text-purple-600 dark:text-purple-400" />
                        <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">Class 10</span>
                      </div>
                      <p className="text-2xl font-bold text-gray-800 dark:text-white">91.5%</p>
                    </div>

                    <div className="bg-gradient-to-br from-pink-50 to-red-50 dark:from-pink-900/20 dark:to-red-900/20 p-4 rounded-xl">
                      <div className="flex items-center gap-2 mb-2">
                        <Award size={18} className="text-pink-600 dark:text-pink-400" />
                        <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">Mathematics</span>
                      </div>
                      <p className="text-2xl font-bold text-gray-800 dark:text-white">100/100</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500" />
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Award className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                    Certifications
                  </h3>
                </div>

                <ul className="space-y-3">
                  {certifications.map((cert, index) => (
                    <motion.li
                      key={index}
                      className="flex gap-3 items-start p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    >
                      <span className="text-purple-600 dark:text-purple-400 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">
                        {cert}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
