import React from "react";
import { motion } from "framer-motion";
import { Code } from "lucide-react";

const About: React.FC = () => {
  const skills = [
    { name: "HTML5", icon: "ri-html5-fill", color: "text-orange-500" },
    { name: "CSS3", icon: "ri-css3-fill", color: "text-blue-500" },
    { name: "JavaScript", icon: "ri-javascript-fill", color: "text-yellow-400" },
    { name: "React.js", icon: "ri-reactjs-fill", color: "text-cyan-400" },
    { name: "Redux Toolkit", icon: "ri-shape-fill", color: "text-purple-500" },
    { name: "Node.js", icon: "ri-nodejs-fill", color: "text-green-500" },
    { name: "Express.js", icon: "ri-server-fill", color: "text-gray-400" },
    { name: "MongoDB", icon: "ri-database-2-fill", color: "text-green-600" },
    { name: "Python", icon: Code, color: "text-blue-400" },
    { name: "Tailwind CSS", icon: "ri-tailwind-css-fill", color: "text-sky-400" },
    { name: "REST APIs", icon: "ri-plug-fill", color: "text-purple-400" },
    { name: "Git", icon: "ri-git-branch-fill", color: "text-red-500" },
      { name: "Github", icon: "ri-git-branch-fill", color: "text-red-500" },
        { name: "postman", icon: "ri-git-branch-fill", color: "text-red-500" },
    { name: "Mobile Dev", icon: "ri-smartphone-fill", color: "text-pink-400" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="py-20 bg-gray-50 overflow-hidden dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-12"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-6xl font-dancing font-bold text-gray-900 dark:text-white mb-4">
              About <span className="text-yellow-400">Me</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 font-dancing gap-12 items-center">
            {/* About Text */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-xl text-black dark:text-gray-300 leading-relaxed">
                I'm a passionate{" "}
                <span className="text-yellow-400 font-semibold">MERN Stack</span>{" "}
                and{" "}
                <span className="text-yellow-400 font-semibold">
                  Python Developer
                </span>{" "}
                with a strong foundation in building scalable web applications.
                I love creating efficient, user-friendly solutions that solve
                real-world problems.
              </p>
              <p className="text-xl text-black dark:text-gray-300 leading-relaxed">
                With expertise in modern web technologies and a keen eye for
                detail, I strive to deliver high-quality code and exceptional
                user experiences. I'm constantly learning and adapting to new
                technologies to stay at the forefront of web development.
              </p>
              <p className="text-xl text-gray-black dark:text-gray-300 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
            </motion.div>

            {/* Skills Grid */}
            <motion.div variants={itemVariants}>
              <h3 className="text-4xl font-dancing font-bold text-gray-900 dark:text-white mb-6">
                Technical <span className="text-yellow-400">Skills</span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white dark:bg-gray-800  text-black p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 text-center"
                  >
                    <i
                      className={`${skill.icon} ${skill.color} text-4xl mb-2`}
                    ></i>
                    <span className="text-sm font-semibold text-black dark:text-gray-300">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
