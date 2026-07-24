import ProjectItem from './ProjectItem';
import Reveal from '../Reveal';

function ProjectsSection() {
    const projects = [
        {
            href: 'https://prismaservices.it',
            image: `${require('../../assets/prismaservices-preview.webp')}`,
            alt: 'Prisma Services - Azienda di sviluppo web e soluzioni IT personalizzate co-fondata da Matteo Santoro',
            name: 'Prisma Services',
            role: 'Co-founder',
            detail: 'Soluzioni IT su misura per le imprese',
        },
        {
            href: 'https://contoflux.it',
            image: `${require('../../assets/contoflux-preview.webp')}`,
            alt: 'Contoflux - Gestisci spese, entrate, budget e patrimonio in un\'unica app italiana',
            name: 'Contoflux',
            role: 'Founder',
            detail: 'Spese, budget e patrimonio in un\'unica app',
        },
        {
            href: 'https://leroymerlin.it',
            image: `${require('../../assets/leroymerlin-preview.webp')}`,
            alt: 'Leroy Merlin - Progetti di simulazione efficienza, applicazioni interne e digital signage sviluppati da Matteo Santoro',
            name: 'Leroy Merlin',
            role: 'Consulente',
            detail: 'Efficiency simulator, digital signage e tool interni',
        },
        {
            href: 'https://www.yoox.com',
            image: `${require('../../assets/yoox-preview.webp')}`,
            alt: 'Yoox - Sviluppo di campagne speciali e soluzioni e-commerce avanzate implementate da Matteo Santoro',
            name: 'Yoox',
            role: 'Dipendente',
            detail: 'Campagne speciali per l\'e-commerce',
        },
        {
            href: 'https://www.enel.it',
            image: `${require('../../assets/enel-preview.webp')}`,
            alt: 'Enel - Web application per la gestione reclami sviluppata da Matteo Santoro come consulente',
            name: 'Enel',
            role: 'Consulente',
            detail: 'Web app per la gestione dei reclami',
        },
        {
            href: 'https://www.deghi.it',
            image: `${require('../../assets/deghi-preview.webp')}`,
            alt: 'Deghi - Piattaforma e-commerce ottimizzata e sviluppata con tecnologie moderne da Matteo Santoro',
            name: 'Deghi',
            role: 'Esterno',
            detail: 'Piattaforma e-commerce',
        },
        {
            href: 'https://www.doveconviene.it',
            image: `${require('../../assets/doveconviene-preview.webp')}`,
            alt: 'DoveConviene (ShopFully) - Sistema di gestione campagne pubblicitarie sviluppato da Matteo Santoro',
            name: 'DoveConviene · ShopFully',
            role: 'Dipendente',
            detail: 'Campaign manager pubblicitario',
        },
        {
            href: 'https://www.ingenico.com',
            image: `${require('../../assets/ingenico-preview.webp')}`,
            alt: 'Ingenico - Applicazione per la gestione dei ticket sviluppata da Matteo Santoro come consulente',
            name: 'Ingenico',
            role: 'Consulente',
            detail: 'App per la gestione dei ticket',
        },
        {
            href: 'https://www.viveresenzalattosio.it',
            image: `${require('../../assets/viveresenzalattosio-preview.webp')}`,
            alt: 'Vivere Senza Lattosio - Blog specializzato sviluppato e gestito da Matteo Santoro con tecnologie web moderne',
            name: 'Vivere Senza Lattosio',
            role: 'Founder',
            detail: 'Blog specializzato',
        },
    ];

    return (
        <section className="container-page">
            <Reveal>
                <header className="head-hang">
                    <h2 className="display">Progetti</h2>
                    <p>Nove progetti, otto anni, un filo conduttore: codice in produzione.</p>
                </header>
                <div className="projects-grid">
                    {projects.map(project => (
                        <ProjectItem
                            key={project.name}
                            image={project.image}
                            alt={project.alt}
                            name={project.name}
                            role={project.role}
                            detail={project.detail}
                            href={project.href}
                        />
                    ))}
                </div>
            </Reveal>
        </section>
    );
}

export default ProjectsSection;
