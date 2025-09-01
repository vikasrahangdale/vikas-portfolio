import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

   emailjs.send(
  "service_k8xrzu4",
  "template_w6gqssm",
  {
    name: formData.name,
    email: formData.email,
    message: formData.message,
  },
  "8ke6ScnACp3CSV9mi"
)

      .then(
        () => {
          alert("✅ Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
       (error) => {
         console.error("FAILED...", error);
  alert("❌ Failed: " + JSON.stringify(error));
}

      )
      .finally(() => setIsSubmitting(false));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/vikas-rahangdale-6643012b4",
      color: "hover:text-blue-500",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/vikasrahangdale",
      color: "hover:text-gray-600 dark:hover:text-gray-400",
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "vikasrahangdale89@gmail.com",
      color: "text-blue-500",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 74893 33724",
      color: "text-green-500",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Bhopal, India",
      color: "text-red-500",
    },
  ];

  return (
    <section id="contact" className="py-20 mt-40 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-dancing font-bold text-gray-900 dark:text-white mb-4">
            Get In <span className="text-yellow-400">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-lg text-black dark:text-gray-300 font-dancing max-w-3xl mx-auto">
            Let's discuss your project or just say hello. I'm always open to new
            opportunities and interesting conversations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 font-dancing gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Contact <span className="text-yellow-400">Information</span>
            </h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ x: -30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
                >
                  <div
                    className={`p-3 bg-gray-100 dark:bg-gray-700 rounded-full ${info.color}`}
                  >
                    <info.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {info.title}
                    </h4>
                    <p className="text-black dark:text-gray-300">
                      {info.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Follow <span className="text-yellow-400">Me</span>
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-white dark:bg-gray-800 rounded-full shadow-md border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 ${social.color} transition-colors duration-200`}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send <span className="text-yellow-400">Message</span>
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-400"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-black border rounded-lg focus:ring-2 focus:ring-yellow-400"
                />
                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border text-black rounded-lg focus:ring-2 focus:ring-yellow-400 resize-none"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-black border-t-transparent"></div>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
