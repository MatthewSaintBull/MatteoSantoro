import { motion, useReducedMotion } from "framer-motion";

// L'unico motore di reveal della pagina: fade + 10px, una volta sola.
const Reveal = ({ children, className }) => {
    const reduced = useReducedMotion();
    return (
        <motion.div
            className={className}
            initial={reduced ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
            {children}
        </motion.div>
    );
};

export default Reveal;
