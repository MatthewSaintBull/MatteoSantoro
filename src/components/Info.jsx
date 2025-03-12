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
                        Fin da quando avevo solo sette anni, ho saputo che la programmazione sarebbe stata il mio destino.
                        Sono sempre stato affascinato dal mondo dell'informatica e dalla possibilità di creare soluzioni innovative e all'avanguardia.
                    </p>
                    
                    <p className='text-gray-700 leading-relaxed mb-4'>
                        Oggi, dopo anni di duro lavoro e passione, sono orgoglioso di essere un <span className="font-semibold text-blue-700">AWS Cloud Developer Associate certificato</span>,
                        con un'esperienza di oltre 5 anni come programmatore web per aziende di fama internazionale come Yoox Net-A-Porter, Shopfully e Valassis.
                    </p>
                    
                    <p className='text-gray-700 leading-relaxed mb-4'>
                        Nel mio percorso professionale, ho co-fondato <span className="font-semibold text-blue-700"><a href="https://prismaservices.it" target="_blank">Prisma SRL</a></span>, un'azienda specializzata nella fornitura di soluzioni informatiche su misura per le imprese. 
                        Offriamo una vasta gamma di servizi, tra cui sviluppo di applicazioni mobili, creazione di siti web e applicazioni, software aziendali personalizzati, soluzioni cloud e consulenza tecnologica.
                    </p>
                    
                    <p className='text-gray-700 leading-relaxed mb-4'>
                        Inoltre, ho sviluppato <span className="font-semibold text-blue-700"><a href="https://formilio.com" target="_blank">Formilio</a></span>, una piattaforma all-in-one che unifica la creazione di moduli, la raccolta di lead e la gestione delle newsletter per sviluppatori e proprietari di siti web che gestiscono più proprietà web. 
                        Formilio consente di creare moduli una sola volta e distribuirli su tutti i siti web, gestire centralmente moduli, lead e newsletter, e integrare il marketing via email senza dover passare da uno strumento all'altro.
                    </p>
                    
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                        <p className="text-blue-800 font-medium">
                            Il mio stack tecnologico comprende le migliori tecnologie del momento, dal frontend al backend.
                        </p>
                    </div>
                    
                    <p className='text-gray-700 leading-relaxed mb-4'>
                        Amo utilizzare framework all'avanguardia come <span className="font-semibold text-blue-700">React</span>, <span className="font-semibold text-blue-700">VueJS</span> e <span className="font-semibold text-blue-700">Tailwind</span> per creare interfacce utente accattivanti e facili da usare.
                        Ma non mi limito solo al frontend: sono anche esperto di <span className="font-semibold text-blue-700">Nest</span>, <span className="font-semibold text-blue-700">ExpressJS</span>, <span className="font-semibold text-blue-700">Fastify</span> e di molti altri strumenti di sviluppo backend che mi permettono di creare soluzioni
                        altamente scalabili e performanti.
                    </p>
                    
                    <p className='text-gray-700 leading-relaxed font-medium mt-6'>
                        Se cerchi un programmatore che abbia la passione e la competenza per realizzare i tuoi progetti, non esitare a contattarmi. Sono sempre alla ricerca di nuove sfide e sono pronto a fare la differenza per te e la tua azienda.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}

export default InfoSection;