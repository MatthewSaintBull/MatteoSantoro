const ContactsSection = () => {
    return (
        <div className='container mx-auto'>
            <h2 className="text-3xl font-bold mb-2">Contatti</h2>
            <hr className="mb-2 h-[6px] bg-blue-400 w-32" />
            <div className="flex flex-wrap bg-gray-100 p-5 rounded-lg shadow">
                <div className="w-full md:w-1/2 px-4 mb-8">
                    <h3 className="text-lg font-bold mb-2">Email</h3>
                    <p className="text-gray-600">admin@msantoro.com</p>
                </div>

                <div className="w-full md:w-1/2 px-4 mb-8">
                    <h3 className="text-lg font-bold mb-2">Telefono</h3>
                    <p className="text-gray-600">+39 3337360501</p>
                </div>

                <div className="w-full md:w-1/2 px-4 mb-8">
                    <h3 className="text-lg font-bold mb-2">Curriculum</h3>
                    <a href={require('../assets/CV.pdf')} target="_blank" className="text-gray-900 hover:underline"><i className="fas fa-file-pdf mr-2"></i> Scarica il mio curriculum</a>
                </div>

                <div className="w-full md:w-1/2 px-4 mb-8">
                    <h3 className="text-lg font-bold mb-2">Social</h3>
                    <ul className="list-none">
                        <li className="mb-2">
                            <a href="https://github.com/MatthewSaintbull" target="_blank" className="text-gray-900 hover:underline flex items-center">
                                <i className="fab fa-github mr-2"></i>
                                Github
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="https://www.linkedin.com/in/matteo-santoro/" target="_blank" className="text-gray-900 hover:underline flex items-center">
                                <i className="fab fa-linkedin mr-2"></i>
                                LinkedIn
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="https://www.instagram.com/matteo_santoro_97/" target="_blank" className="text-gray-900 hover:underline flex items-center">
                                <i className="fab fa-instagram mr-2"></i>
                                Instagram
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="https://medium.com/@mttdev1997" target="_blank" className="text-gray-900 hover:underline flex items-center">
                                <i className="fab fa-medium mr-2"></i>
                                Medium
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ContactsSection;