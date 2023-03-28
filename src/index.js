import { createRoot } from 'react-dom/client';

const handleClick = () => {
  if (window.pageYOffset + window.innerHeight >= document.documentElement.scrollHeight) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    window.scrollTo({ top: window.pageYOffset + window.innerHeight * 0.5, behavior: 'smooth' });
  }
};


createRoot(app).render(
  <>
    <nav className="bg-pastel-blue h-20 overflow-hidden justify-center flex shadow-xl fixed w-screen">
      <img src={require('./assets/logo.svg')} alt="website logo" className='h-20 mix-blend-multiply' width={250} height={150} />
    </nav>

    <div className="min-h-screen bg-gray-200 max-w-7xl mx-auto pt-20">
      <div
        className="bg-cover bg-center h-64 md:h-96 flex flex-col justify-center text-white"
        style={{
          backgroundImage:
            `linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
          url(${require('./assets/hero-section.webp')})`
        }}
      >
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold">Ciao, sono Matteo Santoro</h1>
          <p className="text-gray-300 md:text-lg mt-2">Sviluppatore Freelancer con oltre 5 anni di esperienza su stack JS</p>
        </div>
      </div>

      <div className="container mx-auto py-8 px-5 md:px-0">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Chi Sono</h2>
          <hr className="mb-2 h-[6px] bg-blue-400 w-32" />
          <p className='font-light text-md'>Fin da quando avevo solo sette anni, ho saputo che la programmazione sarebbe stata il mio destino.
            Sono sempre stato affascinato dal mondo dell'informatica e dalla possibilità di creare soluzioni innovative e all'avanguardia.
            Oggi, dopo anni di duro lavoro e passione, sono orgoglioso di essere un AWS Cloud Developer Associate certificato,
            con un'esperienza di oltre 5 anni come programmatore web per aziende di fama internazionale come Yoox Net-A-Porter, Shopfully e Valassis.
            Il mio stack tecnologico comprende le migliori tecnologie del momento, dal frontend al backend.
            Amo utilizzare framework all'avanguardia come React, VueJS e Tailwind per creare interfacce utente accattivanti e facili da usare.
            Ma non mi limito solo al frontend: sono anche esperto di Nest, ExpressJS, Fastify e di molti altri strumenti di sviluppo backend che mi permettono di creare soluzioni
            altamente scalabili e performanti.
            Se cerchi un programmatore che abbia la passione e la competenza per realizzare i tuoi progetti, non esitare a contattarmi. Sono sempre alla ricerca di nuove sfide e sono pronto a fare la differenza per te e la tua azienda.</p>
        </div>

        <div className='mb-8 '>
          <h2 className="text-3xl font-bold mb-2">Skills e competenze</h2>
          <hr className="mb-2 h-[6px] bg-blue-400 w-32" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-gray-900">
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4">ReactJS</h3>
              <p className="px-4">
                Con oltre 3 anni di esperienza professionale nello sviluppo web con ReactJS, ho acquisito competenze approfondite nel realizzare applicazioni web ad alte prestazioni.
                Grazie all'utilizzo dei giusti Design Patterns, Hooks e Memoization, sono in grado di creare Single Page Application (SPA) che forniscono un'esperienza utente fluida e coinvolgente.
                Durante la mia carriera, ho avuto il privilegio di utilizzare ReactJS in diversi progetti interessanti, quali
                il sistema di integrazione della gestione delle campagne pubblicitarie su Shopfully.it, integrando con successo le API di Google Ads.
                Inoltre, ho lavorato come parte del team di sviluppo di un sistema simile presso Yoox Net-A-Porter Group.
                Attualmente, collaboro come sviluppatore esterno in Deghi.it, dove sto gestendo lo sviluppo della nuova piattaforma di gestione ordini. Grazie alle mie competenze in ReactJS, sono in grado di garantire che la piattaforma sia veloce, efficiente e facile da usare.
                Se stai cercando un esperto in ReactJS per il tuo progetto, non esitare a contattarmi. Sono pronto a fornirti le mie competenze e l'esperienza necessarie per portare il tuo progetto al successo.
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4">TailwindCSS</h3>
              <p className="px-4">
                Con oltre 2 anni di esperienza professionale nell'utilizzo di TailwindCSS, ho acquisito competenze approfondite che mi permettono di integrare questo framework in piattaforme web già avviate, utilizzando tecnologie diverse o CSS personalizzati.
                Grazie alla mia esperienza presso Vericast e Shopfully, ho sviluppato competenze avanzate nella personalizzazione di classi CSS e nell'estensione del framework Tailwind,
                permettendomi di adattare facilmente il design alle esigenze specifiche di ciascun progetto.
                Attualmente sto lavorando sulla piattaforma di ecommerce Deghi.it, dove sono subentrato agli sviluppi e sto implementando con successo TailwindCSS.
                Grazie alle mie competenze, sono stato in grado di migliorare le performance e la velocità del sito web.
                La mia esperienza nell'utilizzo di TailwindCSS mi ha permesso di personalizzare facilmente le classi CSS e di adattarle alle specifiche esigenze del progetto.
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4">VueJS</h3>
              <p className="px-4">
                Con 2 anni di esperienza professionale su VueJS, ho sviluppato competenze approfondite nell'utilizzo di questo framework moderno e avanzato.
                Grazie ai miei sviluppi sulla piattaforma di gestione cashback e coupon per Vericast e nell'ecommerce di Deghi, ho ampliato la mia conoscenza di VueJS e Nuxt,
                aprendomi a nuove possibilità e sfide. Come per il framework React, ho una vasta esperienza nell'implementazione di funzionalità e nell'utilizzo delle migliori
                pratiche per garantire una piattaforma veloce e sicura.
                Inoltre, ho sviluppato competenze avanzate nell'implementazione di Server-Side Rendering (SSR) con NuxtJS su Deghi,
                che mi permettono di sfruttare tutti i vantaggi che questa tecnologia offre.
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4">NodeJS</h3>
              <p className='px-4'>
                Ho oltre 5 anni di esperienza professionale nello sviluppo di backend su NodeJS. Fin dai miei primi giorni come sviluppatore, ho sviluppato una solida comprensione di come costruire e integrare API efficienti e performanti. Grazie alla mia esperienza in Fincons,
                ho acquisito competenze nell'utilizzo di NodeJS per sviluppare Lambda Functions e applicazioni containerizzate su AWS, utilizzando framework come ExpressJS, Fastify e Nest.
                Sono esperto nella progettazione di API sicure e performanti e ho esperienza in ambienti GraphQL, Rest e SOAP.
                Utilizzo una vasta gamma di database, sia relazionali come AuroraDB e MySQL, che non relazionali come Dynamo e MongoDB.
                Grazie alla mia esperienza nell'uso di ORM, sono in grado di integrare rapidamente e efficientemente i database più complessi, come quelli degli e-commerce Deghi.it o Yoox.
                Durante i miei sviluppi su Yoox, ho avuto modo di integrare dei bridge tra API già esistenti, affinando la mia conoscenza di alcuni design pattern specifici.
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4">Test e Time Estimation</h3>
              <p className='px-4'>
                Oltre alla mia esperienza nel backend su NodeJS, ho acquisito conoscenze avanzate nell'ambito dei test software durante il mio lavoro presso Vericast.
                Ho migliorato il mio modo di scrivere test utilizzando il framework Mocha, e sono in grado di adottare il pattern di sviluppo TDD (Test Driven Development)
                quando necessario.
                So come effettuare stime precise delle feature tenendo conto dell'implementazione dei test, e sono in grado di sviluppare test di unità, integrazione e
                end-to-end per garantire la qualità del software.
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4">Altre Competenze</h3>
              <p className='px-4'>
                Durante la mia carriera da programmatore professionista, ho acquisito competenze fondamentali come l'utilizzo di strumenti di versionamento come Git,
                sia attraverso la linea di comando che tramite GUI come SourceTREE. Sono in grado di applicare correttamente il pattern GitFlow e di gestire il versionamento su
                più branch, preparando i progetti per il rilascio tramite tool di CI/CD come GitHub Actions o Jenkins.
                Inoltre, ho conoscenze avanzate nell'ambito di Docker e so come definire correttamente i Dockerfile per creare ambienti Docker su macchine locali o in produzione.
                In questo modo, sono in grado di affiancare il processo di build nelle pipeline Jenkins in fase di deploy.
                La mia passione per la sicurezza informatica mi ha portato a sviluppare competenze basilari in questo ambito.
                So come effettuare un audit su un'applicazione e riconoscere eventuali falle di sicurezza all'interno del codice.
              </p>
            </div>
          </div>
        </div>
        <div className='container mx-auto'>
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Progetti</h2>
            <hr className="mb-2 h-[6px] bg-blue-400 w-32" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <a href="https://www.yoox.com" target="_blank" rel="noopener noreferrer">
                <div className="bg-white shadow rounded-lg overflow-hidden">
                  <img src={require('./assets/yoox-preview.webp')} alt="Anteprima yoox.it" className='object-cover h-64 w-full' />
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 truncate">Special Campaigns | Yoox.it (employee)</h3>
                  </div>
                </div>
              </a>
              <a href="https://www.enel.it" target="_blank" rel="noopener noreferrer">
                <div className="bg-white shadow rounded-lg overflow-hidden">
                  <img src={require('./assets/enel-preview.webp')} alt="Anteprima viveresenzalattosio.it" className='object-cover h-64 w-full' loading='lazy'/>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 truncate">WebApp Gestione Reclami | enel.it (Consultant)</h3>
                  </div>
                </div>
              </a>
              <a href="https://www.deghi.it" target="_blank" rel="noopener noreferrer">
                <div className="bg-white shadow rounded-lg overflow-hidden">
                  <img src={require('./assets/deghi-preview.webp')} alt="Anteprima deghi.ti" className='object-cover h-64 w-full' loading='lazy'/>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2">E-commerce | Deghi.it (external)</h3>
                  </div>
                </div>
              </a>
              <a href="https://www.doveconviene.it" target="_blank" rel="noopener noreferrer">
                <div className="bg-white shadow rounded-lg overflow-hidden">
                  <img src={require('./assets/doveconviene-preview.webp')} alt="Anteprima doveconviene.it" className='object-cover h-64 w-full' loading='lazy' />
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 truncate">Campaign Manager | doveconviene.it (employee)</h3>
                  </div>
                </div>
              </a>
              <a href="https://www.ingenico.com" target="_blank" rel="noopener noreferrer">
                <div className="bg-white shadow rounded-lg overflow-hidden">
                  <img src={require('./assets/ingenico-preview.webp')} alt="Anteprima doveconviene.it" className='object-cover h-64 w-full' loading='lazy'/>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 truncate">Tickets App | ingenico.com (consultant)</h3>
                  </div>
                </div>
              </a>
              <a href="https://www.viveresenzalattosio.it" target="_blank" rel="noopener noreferrer">
                <div className="bg-white shadow rounded-lg overflow-hidden">
                  <img src={require('./assets/viveresenzalattosio-preview.webp')} alt="Anteprima viveresenzalattosio.it" className='object-cover h-64 w-full' loading='lazy' />
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2">Blog | Viveresenzalattosio.it (Owner)</h3>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
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
              <a href={require('./assets/CV.pdf')} target="_blank" className="text-gray-900 hover:underline"><i className="fas fa-file-pdf mr-2"></i> Scarica il mio curriculum</a>
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
      </div>

      <footer className="fixed bottom-0 left-0 right-0 bg-transparent p-4 flex justify-end">
        <button className="bg-pastel-blue text-gray-900 px-4 py-2 rounded-md shadow" onClick={handleClick}>Scorri</button>
      </footer>
    </div>
  </>
);