import { motion } from "framer-motion";

const InfoSection = () => {
    return (
        <div className="mb-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl font-bold mb-2">Chi Sono</h2>
                <hr className="mb-6 h-[6px] bg-blue-400 w-32" />

                <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                    <p className='text-gray-700 leading-relaxed mb-4'>
                        Fin da bambino, a soli sette anni, ho capito che la programmazione era il mio destino. Ho alimentato una passione travolgente per l'informatica, dedicandomi a sviluppare soluzioni digitali innovative e cutting-edge che ridefiniscono il futuro del software.
                    </p>

                    <p className='text-gray-700 leading-relaxed mb-4'>
                        Oggi, dopo anni di impegno e passione, sono orgoglioso di essere un <span className="font-semibold text-blue-700">AWS Cloud Developer Associate certificato</span> e di vantare oltre 8 anni di esperienza come programmatore web per aziende internazionali di spicco, tra cui Yoox Net-A-Porter, Shopfully e Valassis.
                    </p>

                    <p className='text-gray-700 leading-relaxed mb-4'>
                        Nel mio percorso professionale, ho co-fondato <span className="font-semibold text-blue-700"><a href="https://prismaservices.it" target="_blank">Prisma SRL</a></span>, azienda leader nelle soluzioni IT personalizzate per le imprese. I nostri servizi includono sviluppo di app mobili, creazione di siti web, software aziendali su misura, soluzioni cloud e consulenza tecnologica.
                    </p>

                    <p className='text-gray-700 leading-relaxed mb-4'>
                        Inoltre, ho sviluppato <span className="font-semibold text-blue-700"><a href="https://formilio.com" target="_blank">Formilio</a></span>, una piattaforma all-in-one che unifica la creazione di moduli, la raccolta di lead e la gestione delle newsletter per sviluppatori e proprietari di siti web con più domini. Formilio permette di creare moduli una sola volta e distribuirli su tutti i siti, gestire centralmente moduli, lead e newsletter, e integrare il marketing via email senza dover utilizzare strumenti diversi.
                    </p>
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                        <p className="text-blue-800 font-medium">
                            Il mio stack tecnologico comprende le migliori tecnologie del momento, dal frontend al backend.
                        </p>
                    </div>

                    <p className='text-gray-700 leading-relaxed mb-4'>
                        Amo sviluppare con framework moderni come <span className="font-semibold text-blue-700">React</span>, <span className="font-semibold text-blue-700">VueJS</span> e <span className="font-semibold text-blue-700">Tailwind</span> per creare interfacce utente intuitive e performanti. Oltre al frontend, sono esperto in tecnologie backend come <span className="font-semibold text-blue-700">Nest</span>, <span className="font-semibold text-blue-700">ExpressJS</span> e <span className="font-semibold text-blue-700">Fastify</span>, strumenti essenziali per realizzare applicazioni web scalabili e ad alte prestazioni.
                    </p>

                    <p className='text-gray-700 leading-relaxed font-medium mt-6'>
                        Cerchi un programmatore esperto e appassionato per trasformare le tue idee in realtà? Contattami! Sono sempre alla ricerca di nuove sfide e pronto a sviluppare soluzioni su misura per la tua azienda.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}

export default InfoSection;