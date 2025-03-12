import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SkillItem = ({ title, description }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const expandRef = useRef(null);
    
    return (
        <motion.div 
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <div className="p-6 border-b border-gray-100">
                <h3 className="text-xl font-bold text-blue-800 mb-2">{title}</h3>
                <div className="w-16 h-1 bg-blue-400 mb-4"></div>
                
                <AnimatePresence>
                    {isExpanded ? (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                                {description}
                            </p>
                        </motion.div>
                    ) : (
                        <motion.p 
                            className="text-gray-700 leading-relaxed line-clamp-2"
                            initial={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            {description.split(".")[0]}.
                        </motion.p>
                    )}
                </AnimatePresence>
            </div>
            
            <button 
                className="w-full py-3 px-4 bg-gray-50 text-blue-700 font-medium flex items-center justify-center hover:bg-blue-50 transition-colors duration-300"
                onClick={() => setIsExpanded(!isExpanded)}
                ref={expandRef}
                aria-label={isExpanded ? 'Mostra meno' : 'Mostra di più'}
            >
                {isExpanded ? (
                    <>
                        <i className="fas fa-chevron-up mr-2"></i>
                        Mostra meno
                    </>
                ) : (
                    <>
                        <i className="fas fa-chevron-down mr-2"></i>
                        Mostra di più
                    </>
                )}
            </button>
        </motion.div>
    );
}

export default SkillItem;