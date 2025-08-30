import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience: React.FC = () => {
  const experienceData = [
    {
      title: 'Full Stack Developer',
      company: 'TechDigi Solutions Pvt Ltd',
      location: 'Bhopal, India',
      period: 'Jan 2025 - April 2025',
      type: 'Internship',
      description: 'Worked closely with senior developers, which enhanced my practical knowledge of real-world software development. Improved my skills in MERN stack and Python by contributing to live projects.',
      achievements: [
        'Built and launched scalable web applications successfully used in production',
        'Collaborated with senior developers and contributed to team knowledge sharing through code reviews and peer mentoring.'
      ],
      technologies: ['React.js', 'Node.js', 'MongoDB', "Express", 'Python',]
    },
    {
      title: 'Frontend Developer Intern',
      company: 'RID Bharat Technology',
      location: 'Bhopal, India',
      period: 'Nov 2024 - Dec 2024',
      type: 'Internship',
      description: 'Worked on developing responsive user interfaces and implementing modern design patterns. Gained hands-on experience with React ecosystem and state management.',
      achievements: [
        'Built responsive web components used across 3 major products',
        'Reduced page load times by 35% through optimization techniques',
        'Collaborated with UX/UI team to implement pixel-perfect designs',
        'Participated in agile development processes and daily standups'
      ],
      technologies: ['React.js', 'TypeScript', "MongoDB", 'Tailwind CSS', "Node.js","Express.js", 'Redux',]
    },
    {
      title: 'React.js Developer',
      company: 'Tryidol Technology',
      location: 'Bhopal',
      period: 'April 2025 - July 2025',
      type: 'Intership',
      description: 'Developed responsive user interfaces using React.js and TypeScript, ensuring seamless user experience. Integrated REST APIs into frontend components, enabling real-time data visualization. Built reusable components and optimized state management for scalability. Collaborated with backend team on API design and data flow.',
      achievements: [
        'Delivered production-ready React features improving platform usability.',
        'Reduced frontend load time by 30% through component optimization and lazy loading.',
        'Contributed to code reviews & documentation, ensuring maintainable codebase.',
      ],
      technologies: ['React.js', 'TypeScript', "MongoDB", 'Tailwind CSS', "Node.js","Express.js", 'Redux',]
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
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="experience" className="py-20  bg-white dark:bg-black">
      <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.div variants={cardVariants} className="text-center mb-16">
            <h2 className="text-6xl font-dancing font-bold text-gray-900 dark:text-white mb-4">
              Professional <span className="text-yellow-400">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 font-dancing max-w-3xl mx-auto">
              My professional journey and the experiences that have shaped my career
            </p>
          </motion.div>

          {/* Experience Timeline */}
         <div className="relative">
  {/* Timeline Line */}
  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-yellow-400"></div>

  {experienceData.map((exp, index) => (
    <motion.div
      key={index}
      variants={cardVariants}
      className={`relative flex items-center mb-8 ${
        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* Timeline Dot */}
      <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full border-4 border-white dark:border-black z-10"></div>

      {/* Experience Card */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className={`w-full md:w-5/12 ml-16 md:ml-0 ${
          index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
        }`}
      >
        <div className="bg-gray-50 dark:bg-gray-900  p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-yellow-400/10 rounded-lg">
                <Briefcase className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {exp.title}
                </h3>
                <p className="text-yellow-500 font-medium">{exp.company}</p>
              </div>
            </div>
            <span className="px-3 py-1  font-semibold bg-yellow-400/10 text-yellow-500 text-sm rounded-full border border-yellow-400/20">
              {exp.type}
            </span>
          </div>

          {/* Details */}
          <div className="space-y-2 mb-4">
            <div className="flex items-center space-x-2 text-black font-medium dark:text-gray-300">
              <Calendar size={16} />
              <span>{exp.period}</span>
            </div>
            <div className="flex items-center space-x-2 text-black font-medium dark:text-gray-300">
              <MapPin size={16} />
              <span>{exp.location}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-black font-medium  dark:text-gray-300 mb-4 leading-relaxed">
            {exp.description}
          </p>

          {/* Key Achievements */}
          <div className="mb-4">
            <h4 className="font-bold text-gray-900 dark:text-white mb-2">
              Key Achievements:
            </h4>
            <ul className="space-y-1">
              {exp.achievements.map((achievement, idx) => (
                <li
                  key={idx}
                  className="text-sm text-black font-medium  dark:text-gray-300 flex items-start"
                >
                  <span className="text-yellow-400 mr-2">•</span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-2">
              Technologies Used:
            </h4>
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-yellow-400/10 text-yellow-500 text-md font-semibold rounded border border-yellow-400/20"
                >
                  {tech}
                </span>
              ))}
            </div>
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

export default Experience;