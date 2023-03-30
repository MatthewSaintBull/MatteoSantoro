import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SkillItem = ({ title, description }) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const expandRef = useRef(null)
    const expand = () => {
        setIsExpanded(!isExpanded)
    }
    return (
        <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-bold mb-4">{title}</h3>
            <AnimatePresence>
                {isExpanded && (
                    <motion.p
                        className="px-4 overflow-hidden"
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        {description}
                    </motion.p>
                )}
            </AnimatePresence>
            <button className="w-full h-10 flex justify-center -mb-5 mt-5 border-t-[1px] border-gray-600 py-2" onClick={() => expand()} ref={expandRef}>
                <i className={`fa-solid ${isExpanded ? 'fa-angle-up' : 'fa-angle-down'} text-gray-900 text-3xl`}></i>
            </button>
        </div>
    );
}

export default SkillItem;