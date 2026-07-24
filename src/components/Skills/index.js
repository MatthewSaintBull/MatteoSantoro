import SkillItem from "./SkillItem";
import Reveal from "../Reveal";

// La banda scura della pagina: le competenze come scheda tecnica, non come card.
function SkillsSection() {

    const skills = [
        {
            title: 'ReactJS',
            value: '5+ anni',
            detail: 'SPA veloci con design patterns, hooks e memoization. Campagne pubblicitarie per ShopFully, sistemi avanzati per Yoox Net-a-Porter, gestione ordini e prodotti interni per Deghi e Leroy Merlin.',
        },
        {
            title: 'VueJS · Nuxt',
            value: '3 anni',
            detail: 'Piattaforme scalabili con Server-Side Rendering e SEO curata: cashback e coupon per Vericast, e-commerce per Deghi e Leroy Merlin.',
        },
        {
            title: 'NodeJS',
            value: '5+ anni',
            detail: 'API REST e GraphQL con Express, Fastify e NestJS; AWS Lambda; database MySQL, MongoDB e DynamoDB. Architetture per Yoox, Fincons, Deghi e Leroy Merlin.',
        },
        {
            title: 'TailwindCSS',
            value: '3+ anni',
            detail: 'Interfacce responsive, leggere e personalizzabili per Vericast, ShopFully e Deghi, con CSS ottimizzato e tempi di sviluppo ridotti.',
        },
        {
            title: 'Test e stime',
            value: 'TDD',
            detail: 'Test unitari, di integrazione ed end-to-end con Mocha. Stime dei tempi che includono i test dal primo giorno, affinate in Vericast.',
        },
        {
            title: 'DevOps e sicurezza',
            value: 'CI/CD',
            detail: 'Git, Docker, GitHub Actions, Jenkins e GitFlow per versioning e deployment automatizzati. Analisi e correzione di vulnerabilità nelle web app.',
        },
    ];

    return (
        <section className="band-graphite">
            <div className="container-page">
                <Reveal>
                    <header className="head-hang">
                        <h2 className="display">Competenze</h2>
                        <p>Le tecnologie con cui lavoro ogni giorno, e dove le ho messe alla prova.</p>
                    </header>
                    <dl className="spec">
                        {skills.map(skill => (
                            <SkillItem
                                key={skill.title}
                                title={skill.title}
                                value={skill.value}
                                detail={skill.detail}
                            />
                        ))}
                    </dl>
                </Reveal>
            </div>
        </section>
    );
}

export default SkillsSection;
