import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Event Management System',
      description: 'Full-stack event management platform with user registration, event creation, and real-time updates.',
      image: '/event.png',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', "Javascript","CSS5","Tailwind.CSS" ,"HTML5"],
      github: '*',
      demo: '#'
    },
    {
      title: 'Lounge Booking & Ordering Application',
      description: 'Built a full-stack solution for railway passengers to book lounge seats and order food at stations, usingNode.js, Express.js, MongoDB, React.js, and Tailwind CSS to ensure seamless functionality and userexperience',
      image: '/booking.png',
      technologies: ['React.js', 'Express.js', 'MongoDB', 'Stripe' ,"Tailwind.CSS","CSS5","HTML5",],
      github: 'https://github.com/khileshmaskare34/shyama',
      demo: 'https://github.com/khileshmaskare34/shyama'
    },
    {
      title: 'Uber-Clone',
      description: 'A ride-booking platform built with the MERN stack, featuring real-time ride requests, fare calculation, and Google Maps integration. Designed responsive UI for both riders and drivers to ensure smooth booking and tracking.',
      image: '/uber.webp',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', "Javascript","CSS5","Tailwind.CSS" ,"HTML5"],
      github: 'https://github.com/vikasrahangdale/uber-app-clone',
      demo: 'https://github.com/vikasrahangdale/uber-app-clone'
    },
    {
      title: 'Khatabook Clone',
      description: 'Digital ledger application for small businesses with transaction tracking and reporting.',
      image: '/khatabook.webp',
      technologies: [ 'Node.js', 'MongoDB',"HTML5","CSS","EJS","Tailwind.CSS"],
      github: 'https://github.com/vikasrahangdale/khatabook-project',
      demo: 'https://github.com/vikasrahangdale/khatabook-project'
    },
    {
      title: 'AI Chat Collaboration',
      description: 'Real-time chat application with AI integration for enhanced team collaboration.',
      image: 'https://images.pexels.com/photos/8728388/pexels-photo-8728388.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', "Javascript","CSS5","Tailwind.CSS" ,"Gemini-API", "HTML5", 'Socket.io'],
      github: 'https://github.com/vikasrahangdale/chatapp-AI',
      demo: 'https://github.com/vikasrahangdale/chatapp-AI'
    },
    {
      title: 'Frontend-Project',
      description: 'A captivating and interactive website built with HTML, CSS, and JavaScript, enhanced by smooth animations. Designed to deliver an engaging and visually stunning experience, making every step of the digital journey memorable and dynamic.',
      image: '/your.png',
      technologies: [  "Javascript","CSS5","Tailwind.CSS" , "HTML5","Swiper.js"],
      github: 'https://github.com/vikasrahangdale/animation-project',
      demo: 'https://github.com/vikasrahangdale/animation-project'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.div variants={cardVariants} className="text-center mb-16">
            <h2 className="text-6xl font-dancing font-bold text-gray-900 dark:text-white mb-4">
              Featured <span className="text-yellow-400">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-lg text-black font-medium font-dancing dark:text-gray-300 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills in full-stack development
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800 group"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-55 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.github}
                      className="p-2 bg-white rounded-full text-black hover:bg-yellow-400 transition-colors duration-200"
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.demo}
                      className="p-2 bg-white rounded-full text-black hover:bg-yellow-400 transition-colors duration-200"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-black font-medium dark:text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-1  text-[#67C090]  font-medium text-md rounded-full border border-yellow-[#67C090]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Project Button */}
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.demo}
                    className="inline-flex items-center space-x-2 text-yellow-400 hover:text-yellow-500 font-medium transition-colors duration-200"
                  >
                    <span>View Project</span>
                    <ExternalLink size={16} />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;