import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  const educationData = [
    {
      degree: 'Bachelor of Technology in Information Technology',
      institution: 'NRI Institute of Information Science and Technology Bhopal (M.P.)',
      location: 'Bhopal',
      period: '2022 - 2026',
      grade: 'CGPA: 7.88',
      description: 'Focused on software development, algorithms, and data structures. Completed projects in web development and machine learning.',
      achievements: ['Dean\'s List for 3 consecutive semesters', 'Led the University Coding Club', 'Published research paper on ML algorithms']
    },
    {
      degree: 'Higher Secondary Education Science',
      institution: 'Govt. Higher Secondary School, Kanjai.',
      location: 'Balaghat, India',
      period: '2020 - 2022',
      description: 'Science stream with Mathematics, Physics, and Chemistry. Developed strong analytical and problem-solving skills.',
      achievements: ['School Topper in Mathematics', 'Participated in National Science Olympiad', 'Captain of the School Quiz Team']
    },
    {
      degree: 'Secondary School (10th)',
      institution: 'Divya Shanti Niketan Higher Secondary School Kanjai',
      location: 'Balaghat, India',
      period: '2018 - 2020',
      description: 'Strong foundation in core subjects with particular interest in mathematics and science.',
      achievements: ['Class Valedictorian', 'School Topper', 'Active member of Student Council']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.div variants={cardVariants} className="text-center mb-16">
            <h2 className="text-6xl font-bold font-dancing text-gray-900 dark:text-white mb-4">
              Educational <span className="text-yellow-400">Background</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-lg text-black font-dancing  dark:text-gray-300 max-w-3xl mx-auto">
              My academic journey and the foundation that shaped my technical expertise
            </p>
          </motion.div>

          {/* Education Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-yellow-400"></div>

            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>

                {/* Education Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-yellow-400/10 rounded-lg">
                          <GraduationCap className="w-6 h-6 text-yellow-400" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {edu.degree}
                          </h3>
                          <p className="text-yellow-400 font-medium">{edu.institution}</p>
                        </div>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center font-medium space-x-2 text-black dark:text-gray-300">
                        <Calendar size={16} />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center  font-medium  space-x-2 text-black dark:text-gray-300">
                        <MapPin size={16} />
                        <span>{edu.location}</span>
                      </div>
                      <div className="text-yellow-500 font-semibold">{edu.grade}</div>
                    </div>

                    {/* Description */}
                    <p className="text-black  font-medium  dark:text-gray-300 mb-4 leading-relaxed">
                      {edu.description}
                    </p>

                    {/* Achievements */}
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-sm text-black  font-medium  dark:text-gray-300 flex items-start">
                            <span className="text-yellow-400 mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;