import { useState } from "react";
import { motion } from "framer-motion";

const ProjectItem = ({ image, alt, title, href }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <motion.div
        className="bg-white shadow rounded-lg overflow-hidden"
        onHoverStart={handleMouseEnter}
        onHoverEnd={handleMouseLeave}
        whileHover={{ scale: 1.09 }}
      >
        <img
          src={image}
          alt={alt}
          className="object-cover h-64 w-full"
        />
        <div className="p-4">
          <h3 className="text-lg font-bold mb-2 truncate">{title}</h3>
        </div>
      </motion.div>
    </a>
  );
};

export default ProjectItem;
