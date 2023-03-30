import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div
      className="bg-cover bg-center h-64 md:h-96 flex flex-col justify-center text-white"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
            url(${require("../assets/hero-section.webp")})`,
      }}
    >
      <div className="text-center">
        <motion.h1
          className="text-3xl md:text-5xl font-bold cursor-pointer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          style={{ display: "inline-block" }}
        >
          <a
            href="https://github.com/MatthewSaintbull"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ciao, sono Matteo Santoro
          </a>
        </motion.h1>
        <p className="text-gray-300 md:text-lg mt-2">
          Sviluppatore Freelancer con oltre 5 anni di esperienza su stack JS
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
