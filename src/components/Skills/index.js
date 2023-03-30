import SkillItem from "./SkillItem";

function SkillsSection() {

    const skills = [
        {
            title: 'ReactJS',
            description: `Con oltre 3 anni di esperienza professionale nello sviluppo web con ReactJS, ho acquisito competenze approfondite nel realizzare applicazioni web ad alte prestazioni.
            Grazie all'utilizzo dei giusti Design Patterns, Hooks e Memoization, sono in grado di creare Single Page Application (SPA) che forniscono un'esperienza utente fluida e coinvolgente.
            Durante la mia carriera, ho avuto il privilegio di utilizzare ReactJS in diversi progetti interessanti, quali
            il sistema di integrazione della gestione delle campagne pubblicitarie su Shopfully.it, integrando con successo le API di Google Ads.
            Inoltre, ho lavorato come parte del team di sviluppo di un sistema simile presso Yoox Net-A-Porter Group.
            Attualmente, collaboro come sviluppatore esterno in Deghi.it, dove sto gestendo lo sviluppo della nuova piattaforma di gestione ordini. Grazie alle mie competenze in ReactJS, sono in grado di garantire che la piattaforma sia veloce, efficiente e facile da usare.
            Se stai cercando un esperto in ReactJS per il tuo progetto, non esitare a contattarmi. Sono pronto a fornirti le mie competenze e l'esperienza necessarie per portare il tuo progetto al successo.`
        },
        {
            title: 'TailwindCSS',
            description: `Con oltre 2 anni di esperienza professionale nell'utilizzo di TailwindCSS, ho acquisito competenze approfondite che mi permettono di integrare questo framework in piattaforme web già avviate, utilizzando tecnologie diverse o CSS personalizzati.
            Grazie alla mia esperienza presso Vericast e Shopfully, ho sviluppato competenze avanzate nella personalizzazione di classi CSS e nell'estensione del framework Tailwind,
            permettendomi di adattare facilmente il design alle esigenze specifiche di ciascun progetto.
            Attualmente sto lavorando sulla piattaforma di ecommerce Deghi.it, dove sono subentrato agli sviluppi e sto implementando con successo TailwindCSS.
            Grazie alle mie competenze, sono stato in grado di migliorare le performance e la velocità del sito web.
            La mia esperienza nell'utilizzo di TailwindCSS mi ha permesso di personalizzare facilmente le classi CSS e di adattarle alle specifiche esigenze del progetto.`
        },
        {
            title: 'VueJS',
            description: `Con 2 anni di esperienza professionale su VueJS, ho sviluppato competenze approfondite nell'utilizzo di questo framework moderno e avanzato.
            Grazie ai miei sviluppi sulla piattaforma di gestione cashback e coupon per Vericast e nell'ecommerce di Deghi, ho ampliato la mia conoscenza di VueJS e Nuxt,
            aprendomi a nuove possibilità e sfide. Come per il framework React, ho una vasta esperienza nell'implementazione di funzionalità e nell'utilizzo delle migliori
            pratiche per garantire una piattaforma veloce e sicura.
            Inoltre, ho sviluppato competenze avanzate nell'implementazione di Server-Side Rendering (SSR) con NuxtJS su Deghi,
            che mi permettono di sfruttare tutti i vantaggi che questa tecnologia offre.`
        },
        {
            title: 'NodeJS',
            description: `Ho oltre 5 anni di esperienza professionale nello sviluppo di backend su NodeJS. Fin dai miei primi giorni come sviluppatore, ho sviluppato una solida comprensione di come costruire e integrare API efficienti e performanti. Grazie alla mia esperienza in Fincons,
            ho acquisito competenze nell'utilizzo di NodeJS per sviluppare Lambda Functions e applicazioni containerizzate su AWS, utilizzando framework come ExpressJS, Fastify e Nest.
            Sono esperto nella progettazione di API sicure e performanti e ho esperienza in ambienti GraphQL, Rest e SOAP.
            Utilizzo una vasta gamma di database, sia relazionali come AuroraDB e MySQL, che non relazionali come Dynamo e MongoDB.
            Grazie alla mia esperienza nell'uso di ORM, sono in grado di integrare rapidamente e efficientemente i database più complessi, come quelli degli e-commerce Deghi.it o Yoox.
            Durante i miei sviluppi su Yoox, ho avuto modo di integrare dei bridge tra API già esistenti, affinando la mia conoscenza di alcuni design pattern specifici.`
        },
        {
            title: 'Test e Time Estimation',
            description: `Oltre alla mia esperienza nel backend su NodeJS, ho acquisito conoscenze avanzate nell'ambito dei test software durante il mio lavoro presso Vericast.
            Ho migliorato il mio modo di scrivere test utilizzando il framework Mocha, e sono in grado di adottare il pattern di sviluppo TDD (Test Driven Development)
            quando necessario.
            So come effettuare stime precise delle feature tenendo conto dell'implementazione dei test, e sono in grado di sviluppare test di unità, integrazione e
            end-to-end per garantire la qualità del software.`
        },
        {
            title: 'Altre Competenze',
            description: `Durante la mia carriera da programmatore professionista, ho acquisito competenze fondamentali come l'utilizzo di strumenti di versionamento come Git,
            sia attraverso la linea di comando che tramite GUI come SourceTREE. Sono in grado di applicare correttamente il pattern GitFlow e di gestire il versionamento su
            più branch, preparando i progetti per il rilascio tramite tool di CI/CD come GitHub Actions o Jenkins.
            Inoltre, ho conoscenze avanzate nell'ambito di Docker e so come definire correttamente i Dockerfile per creare ambienti Docker su macchine locali o in produzione.
            In questo modo, sono in grado di affiancare il processo di build nelle pipeline Jenkins in fase di deploy.
            La mia passione per la sicurezza informatica mi ha portato a sviluppare competenze basilari in questo ambito.
            So come effettuare un audit su un'applicazione e riconoscere eventuali falle di sicurezza all'interno del codice.`
        }

    ]

    return (
        <div className='mb-8 '>
            <h2 className="text-3xl font-bold mb-2">Skills e competenze</h2>
            <hr className="mb-2 h-[6px] bg-blue-400 w-32" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-gray-900">
                {
                    skills.map(skill => {
                        return <SkillItem title={skill.title} description={skill.description} />
                    })
                }
            </div>
        </div>
    );
}

export default SkillsSection;