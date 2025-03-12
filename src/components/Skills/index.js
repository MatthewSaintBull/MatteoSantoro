import SkillItem from "./SkillItem";
import { motion } from "framer-motion";

function SkillsSection() {

    const skills = [
        {
            title: 'ReactJS',
            description: `Con oltre 5 anni di esperienza nello sviluppo web con <strong>ReactJS</strong>, ho perfezionato l'uso di <strong>Design Patterns, Hooks e Memoization</strong> per creare <strong>Single Page Applications (SPA)</strong> veloci e performanti.
            Ho lavorato su progetti come l'integrazione delle campagne pubblicitarie su <strong>Shopfully</strong> e lo sviluppo di sistemi avanzati per <strong>Yoox Net-A-Porter Group</strong>. 
            In passato ho collaborato con <strong>Deghi.it</strong> e <strong>Leroy merlin</strong> per ottimizzare la gestione degli ordini, sviluppare prodotti ad uso interno e per i clienti, con ReactJS e Vue. Cerchi un esperto  per il tuo progetto? Contattami!`
        },
        {
            title: 'TailwindCSS',
            description: `Da oltre 3 anni utilizzo <strong>TailwindCSS</strong> per progettare <strong>interfacce utente responsive, leggere e altamente personalizzabili</strong>. 
            Ho implementato TailwindCSS su progetti per <strong>Vericast, Shopfully</strong> e, più recentemente, per <strong>Deghi.it</strong>, migliorando le performance e l’ottimizzazione del codice CSS. 
            Grazie alla mia esperienza, posso integrare Tailwind in qualsiasi progetto, ottimizzando la velocità di sviluppo e il design.`
        },
        {
            title: 'VueJS',
            description: `Con 3 anni di esperienza su <strong>VueJS e NuxtJS</strong>, ho sviluppato piattaforme scalabili come il sistema di cashback e coupon per <strong>Vericast</strong> e l'ecommerce di <strong>Deghi</strong> e <strong>Leroy Merlin</strong>. 
            Esperto di <strong>Server-Side Rendering (SSR)</strong>, garantisco performance elevate e ottimizzazione SEO per applicazioni VueJS avanzate.`
        },
        {
            title: 'NodeJS',
            description: `Con oltre 5 anni di esperienza nello sviluppo backend con <strong>NodeJS</strong>, ho realizzato <strong>API REST e GraphQL scalabili</strong>, integrando servizi AWS come <strong>Lambda Functions</strong>. 
            Ho lavorato con <strong>ExpressJS, Fastify e NestJS</strong>, implementando database relazionali e NoSQL (<strong>MySQL, MongoDB, DynamoDB</strong>).
            Ho sviluppato architetture robuste per aziende come <strong>Yoox, Fincons, Deghi.it e Leroy Merlin</strong>, ottimizzando prestazioni e sicurezza.`
        },
        {
            title: 'Test e Time Estimation',
            description: `Esperto di <strong>Test Driven Development (TDD)</strong> con <strong>Mocha</strong>, sviluppo test unitari, di integrazione ed end-to-end per garantire codice robusto e sicuro. 
            Grazie alla mia esperienza in <strong>Vericast</strong>, so stimare con precisione i tempi di sviluppo considerando i test sin dall’inizio.`
        },
        {
            title: 'DevOps & Sicurezza',
            description: `Oltre alla programmazione, ho competenze avanzate in <strong>Git, Docker e CI/CD</strong>, utilizzando strumenti come <strong>GitHub Actions, Jenkins</strong> e <strong>GitFlow</strong> per gestire versioning e deployment automatizzati. 
            Esperto di sicurezza informatica, so individuare e risolvere vulnerabilità nelle applicazioni web.`
        }
    ];
    

    return (
        <motion.div 
            className='mb-8'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-3xl font-bold mb-2">Skills e Competenze Tecniche: Sviluppo Web & Cloud Computing</h2>
            <hr className="mb-6 h-[6px] bg-blue-400 w-32" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-gray-900">
                {skills.map((skill, index) => (
                    <motion.div 
                        className="flex flex-col" 
                        key={skill.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <SkillItem title={skill.title} description={skill.description} />
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

export default SkillsSection;