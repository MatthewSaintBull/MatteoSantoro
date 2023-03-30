import ProjectItem from './ProjectItem';

function ProjectsSection() {
    const projects = [
        {
            href: 'https://www.yoox.com',
            image: `${require('../../assets/yoox-preview.webp')}`,
            alt: 'Anteprima yoox.it',
            title: 'Special Campaigns | Yoox.it (employee)'
        },
        {
            href: 'https://www.enel.it',
            image: `${require('../../assets/enel-preview.webp')}`,
            alt: 'Anteprima enel.it',
            title: 'WebApp Gestione Reclami | enel.it (Consultant)'
        },
        {
            href: 'https://www.deghi.it',
            image: `${require('../../assets/deghi-preview.webp')}`,
            alt: 'Anteprima deghi.it',
            title: 'E-commerce | Deghi.it (external)'
        },
        {
            href: 'https://www.doveconviene.it',
            image: `${require('../../assets/doveconviene-preview.webp')}`,
            alt: 'Anteprima doveconviene.it',
            title: 'Campaign Manager | doveconviene.it (employee)'
        },
        {
            href: 'https://www.ingenico.com',
            image: `${require('../../assets/ingenico-preview.webp')}`,
            alt: 'Anteprima ingenico.com',
            title: 'Tickets App | ingenico.com (consultant)'
        },
        {
            href: 'https://www.viveresenzalattosio.it',
            image: `${require('../../assets/viveresenzalattosio-preview.webp')}`,
            alt: 'Anteprima viveresenzalattosio.it',
            title: 'Blog | Viveresenzalattosio.it (Owner)'
        },
    ]
    return (
        <div className='container mx-auto'>
            <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2">Progetti</h2>
                <hr className="mb-2 h-[6px] bg-blue-400 w-32" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {
                        projects.map(project => {
                            return <ProjectItem image={project.image} alt={project.alt} title={project.title} href={project.href} />
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default ProjectsSection;