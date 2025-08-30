import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Vikas Rahangdale_Full Stack developer.pdf"; // ✅ public folder se file serve hogi
    link.download = "vikas_Resume.pdf";
    link.click();
  };

  // color change logic
  const colors = [
    "text-[#CB0404]",
    "text-[#A3DC9A]",
    "text-purple-500",
    "text-[#00FFDE]",
  ];

  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIdx((prev) => {
        let next = prev;
        while (next === prev) {
          next = Math.floor(Math.random() * colors.length);
        }
        return next;
      });
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (

<section
  id="home"
  className="min-h-screen flex items-center justify-center bg-white dark:bg-black relative overflow-hidden"
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full overflow-x-hidden">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      
      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="relative flex justify-center order-1 md:order-2 overflow-hidden"
      >
        {/* Blob Shape Behind Image */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[300px] sm:max-w-[500px] overflow-hidden">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              fill="#FACC15"
              d="M42.3,-66.2C55.3,-59.8,67.2,-47.2,71.6,-32.1C76,-17,73,0.5,66.5,15.4C60,30.3,50.1,42.6,37.8,54.7C25.6,66.8,12.8,78.7,-1.4,80.7C-15.7,82.7,-31.3,74.8,-44.3,63.1C-57.3,51.4,-67.8,35.9,-71.4,19.1C-75,-2,-71.7,-20,-62.2,-33.2C-52.7,-46.5,-37,-55.1,-21.2,-61.3C-5.3,-67.5,10.7,-71.3,26.3,-71.4C41.9,-71.5,57.3,-67.6,42.3,-66.2Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        {/* Profile Image */}
        <img
          src="/vikas.png"
          alt="Professional Profile"
          className="relative w-[80%] max-w-[250px] sm:max-w-[400px] h-auto rounded-full object-cover"
        />
      </motion.div>

      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6 text-center md:text-left order-2 md:order-1"
      >
        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold text-gray-900 dark:text-white">
          <span className="text-yellow-400">MERN Stack</span> & Python{" "}
          <span
            className={`${colors[idx]} transition-colors font-indie duration-500`}
          >
            Developer
          </span>
        </h1>
        <p className="text-xl font-dancing sm:text-xl text-black dark:text-gray-300 max-w-xl mx-auto md:mx-0">
          Passionate about crafting modern, scalable applications. <br />
          Bringing ideas to life with clean & efficient code.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 md:justify-start justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={downloadResume}
            className="flex items-center space-x-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full transition-colors duration-200"
          >
            <Download size={20} />
            <span>Download Resume</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className="flex items-center space-x-2 border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-semibold px-8 py-3 rounded-full transition-colors duration-200"
          >
            <Mail size={20} />
            <span>Get in Touch</span>
          </motion.button>
        </div>
      </motion.div>
    </div>
  </div>
</section>




  );
};

export default Hero;
