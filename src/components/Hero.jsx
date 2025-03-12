import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 py-16 md:py-24">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: "url('data:image/svg+xml,%3Csvg width%3D%2260%22 height%3D%2260%22 viewBox%3D%220 0 60 60%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E%3Cg fill%3D%22%23ffffff%22 fill-opacity%3D%221%22%3E%3Cpath d%3D%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')",
          backgroundSize: "24px 24px" 
        }}
        ></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left side with text */}
          <div className="w-full md:w-3/5 text-center md:text-left mb-8 md:mb-0">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Ciao, sono <span className="text-blue-300">Matteo Santoro</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-blue-100 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Sviluppatore Freelancer con oltre 5 anni di esperienza su stack JS
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a 
                href="https://github.com/MatthewSaintbull" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-white text-blue-700 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-50 transition duration-300 mr-4 mb-4 md:mb-0"
              >
                <i className="fab fa-github mr-2"></i> GitHub
              </a>
              <a 
                href="#contacts" 
                className="inline-block bg-transparent text-white border-2 border-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-blue-700 transition duration-300"
              >
                Contattami
              </a>
            </motion.div>
          </div>
          
          {/* Right side with profile image */}
          <motion.div 
            className="w-full md:w-2/5 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full blur opacity-70"></div>
              <img 
                src={require("../assets/profile.jpg")} 
                alt="Matteo Santoro" 
                className="relative w-64 h-64 object-cover rounded-full border-4 border-white shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
