import { motion } from "framer-motion";

const ContactsSection = () => {
    return (
        <motion.div 
            className='container mx-auto'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-3xl font-bold mb-2">Contatti</h2>
            <hr className="mb-6 h-[6px] bg-blue-400 w-32" />

            {/* Two-column layout container */}
            <div className="flex flex-col md:flex-row gap-8">
                {/* Left side: Contact information */}
                <div className="w-full md:w-2/5 bg-white p-8 rounded-lg shadow-lg">
                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-blue-800 mb-3">Email</h3>
                        <div className="flex items-center text-gray-700">
                            <i className="far fa-envelope text-blue-500 mr-3 text-xl"></i>
                            <a href="mailto:admin@msantoro.com" className="hover:text-blue-600 transition-colors duration-300">admin@msantoro.com</a>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-blue-800 mb-3">Telefono</h3>
                        <div className="flex items-center text-gray-700">
                            <i className="fas fa-phone-alt text-blue-500 mr-3 text-xl"></i>
                            <a href="tel:+393337360501" className="hover:text-blue-600 transition-colors duration-300">+39 333 736 0501</a>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-blue-800 mb-3">Curriculum</h3>
                        <a 
                            href={require('../assets/CV.pdf')} 
                            target="_blank" 
                            className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-300 group"
                        >
                            <i className="fas fa-file-pdf text-blue-500 mr-3 text-xl group-hover:scale-110 transition-transform duration-300"></i>
                            Scarica il mio curriculum
                        </a>
                    </div>

                    <div className="mb-4">
                        <h3 className="text-xl font-bold text-blue-800 mb-3">Social</h3>
                        <ul className="grid grid-cols-2 gap-4">
                            <li>
                                <a 
                                    href="https://github.com/MatthewSaintbull" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-300 group"
                                >
                                    <i className="fab fa-github text-blue-500 mr-3 text-xl group-hover:scale-110 transition-transform duration-300"></i>
                                    Github
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="https://www.linkedin.com/in/matteo-santoro/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-300 group"
                                >
                                    <i className="fab fa-linkedin text-blue-500 mr-3 text-xl group-hover:scale-110 transition-transform duration-300"></i>
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="https://www.instagram.com/matteo_santoro_97/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-300 group"
                                >
                                    <i className="fab fa-instagram text-blue-500 mr-3 text-xl group-hover:scale-110 transition-transform duration-300"></i>
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="https://medium.com/@mttdev1997" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-300 group"
                                >
                                    <i className="fab fa-medium text-blue-500 mr-3 text-xl group-hover:scale-110 transition-transform duration-300"></i>
                                    Medium
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Right side: Contact Form */}
                <div className="w-full md:w-3/5 bg-white p-6 rounded-lg shadow-lg overflow-hidden">
                    <div className="relative w-full h-full min-h-[500px]">
                        <iframe 
                            src="https://www.formilio.com/form/cm7vtli560007k003iw2nvbmc" 
                            className="absolute inset-0 w-full h-full border-0" 
                            title="Contact Form"
                        ></iframe>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default ContactsSection;
