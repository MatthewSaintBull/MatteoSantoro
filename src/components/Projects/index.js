import ProjectItem from './ProjectItem';
import { motion } from 'framer-motion';

function ProjectsSection() {
    const projects = [
        {
            href: 'https://prismaservices.it',
            image: `${require('../../assets/prismaservices-preview.webp')}`,
            alt: 'Prisma Services - Azienda di sviluppo web e soluzioni IT personalizzate co-fondata da Matteo Santoro',
            title: 'Co-Founder | Prismaservices.it (Owner)'
        },
        {
            href: 'https://formilio.com',
            image: `${require('../../assets/formilio-preview.webp')}`,
            alt: 'Formilio - Piattaforma all-in-one per creazione moduli, raccolta lead e gestione newsletter sviluppata da Matteo Santoro',
            title: 'Owner | Formilio.com (Owner)'
        },
        {
            href: 'https://leroymerlin.it',
            image: `${require('../../assets/leroymerlin-preview.webp')}`,
            alt: 'Leroy Merlin - Progetti di simulazione efficienza, applicazioni interne e digital signage sviluppati da Matteo Santoro',
            title: 'Efficiency Simulator - Internal projects - Digital Signage | Leroymerlin.it (Consultant)'
        },
        {
            href: 'https://www.yoox.com',
            image: `${require('../../assets/yoox-preview.webp')}`,
            alt: 'Yoox - Sviluppo di campagne speciali e soluzioni e-commerce avanzate implementate da Matteo Santoro',
            title: 'Special Campaigns | Yoox.it (employee)'
        },
        {
            href: 'https://www.enel.it',
            image: `${require('../../assets/enel-preview.webp')}`,
            alt: 'Enel - Web application per la gestione reclami sviluppata da Matteo Santoro come consulente',
            title: 'WebApp Gestione Reclami | enel.it (Consultant)'
        },
        {
            href: 'https://www.deghi.it',
            image: `${require('../../assets/deghi-preview.webp')}`,
            alt: 'Deghi - Piattaforma e-commerce ottimizzata e sviluppata con tecnologie moderne da Matteo Santoro',
            title: 'E-commerce | Deghi.it (external)'
        },
        {
            href: 'https://www.doveconviene.it',
            image: `${require('../../assets/doveconviene-preview.webp')}`,
            alt: 'DoveConviene (ShopFully) - Sistema di gestione campagne pubblicitarie sviluppato da Matteo Santoro',
            title: 'Campaign Manager | doveconviene.it (employee)'
        },
        {
            href: 'https://www.ingenico.com',
            image: `${require('../../assets/ingenico-preview.webp')}`,
            alt: 'Ingenico - Applicazione per la gestione dei ticket sviluppata da Matteo Santoro come consulente',
            title: 'Tickets App | ingenico.com (consultant)'
        },
        {
            href: 'https://www.viveresenzalattosio.it',
            image: `${require('../../assets/viveresenzalattosio-preview.webp')}`,
            alt: 'Vivere Senza Lattosio - Blog specializzato sviluppato e gestito da Matteo Santoro con tecnologie web moderne',
            title: 'Blog | Viveresenzalattosio.it (Owner)'
        },
    ]
    return (
        <motion.div 
            className='container mx-auto'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-3xl font-bold mb-2">Portfolio Progetti: Sviluppo Web e Soluzioni Cloud</h2>
            <hr className="mb-6 h-[6px] bg-blue-400 w-32" />
            <p className="text-gray-700 mb-8">Ecco alcuni dei progetti di sviluppo web e cloud computing realizzati durante la mia carriera come Full Stack Developer e AWS Cloud Expert.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map(project => (
                    <ProjectItem 
                        key={project.title} 
                        image={project.image} 
                        alt={project.alt} 
                        title={project.title} 
                        href={project.href} 
                    />
                ))}
            </div>
        </motion.div>
    );
}

export default ProjectsSection;