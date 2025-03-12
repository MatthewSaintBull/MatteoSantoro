import { useState } from "react";
import { motion } from "framer-motion";

const ProjectItem = ({ image, alt, title, href }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="group relative overflow-hidden rounded-xl shadow-lg"
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        {/* Image with overlay */}
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={alt}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/70 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300"></div>
          
          {/* Content overlay */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 text-white transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <div className="w-12 h-1 bg-blue-400 mb-3"></div>
            <p className="text-blue-100 text-sm">Clicca per visitare</p>
          </div>
        </div>
      </a>
    </motion.div>
  );
};

export default ProjectItem;
