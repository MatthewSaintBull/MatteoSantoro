import Reveal from "./Reveal";

const InfoSection = () => {
    return (
        <section className="container-page">
            <Reveal>
                <header className="head-hang">
                    <h2 className="display">Chi sono</h2>
                </header>

                <div className="about">
                    <aside className="about__aside">
                        <img
                            className="about__photo"
                            src={require("../assets/profile.jpg")}
                            alt="Matteo Santoro - Full Stack Developer e AWS Cloud Expert"
                            width={480}
                            height={600}
                            loading="lazy"
                        />
                        <dl className="facts">
                            <div>
                                <dt className="label-mono">Certificazione</dt>
                                <dd>AWS Developer Associate</dd>
                            </div>
                            <div>
                                <dt className="label-mono">Esperienza</dt>
                                <dd>8+ anni</dd>
                            </div>
                            <div>
                                <dt className="label-mono">Co-founder</dt>
                                <dd>Prisma SRL</dd>
                            </div>
                            <div>
                                <dt className="label-mono">Prodotto</dt>
                                <dd>Contoflux.it</dd>
                            </div>
                        </dl>
                    </aside>

                    <div className="prose">
                        <p>
                            La programmazione mi ha preso a sette anni e non mi ha più lasciato.
                            Da allora quella passione è diventata un mestiere: progettare e
                            costruire software che risolve problemi concreti.
                        </p>
                        <p>
                            Oggi sono <strong>AWS Cloud Developer Associate certificato</strong>,
                            con oltre otto anni da programmatore web per aziende internazionali
                            come Yoox Net-a-Porter, ShopFully e Vericast.
                        </p>
                        <p>
                            Ho co-fondato <a href="https://prismaservices.it" target="_blank" rel="noopener noreferrer">Prisma SRL</a>,
                            che realizza app mobili, siti web, software su misura, soluzioni
                            cloud e consulenza tecnologica per le imprese. E ho sviluppato{" "}
                            <a href="https://contoflux.it" target="_blank" rel="noopener noreferrer">Contoflux.it</a>,
                            un'app italiana per gestire spese, entrate, budget e patrimonio in
                            un unico posto.
                        </p>
                        <p>
                            Sul frontend lavoro con <strong>React</strong>, <strong>Vue</strong> e{" "}
                            <strong>Tailwind</strong> per interfacce veloci e leggibili; sul
                            backend con <strong>Nest</strong>, <strong>Express</strong> e{" "}
                            <strong>Fastify</strong> per applicazioni scalabili e performanti.
                        </p>
                        <p>
                            Cerchi un programmatore esperto per trasformare un'idea in un
                            prodotto? <a href="#contacts">Scrivimi</a>: le sfide nuove sono la
                            parte del lavoro che preferisco.
                        </p>
                    </div>
                </div>
            </Reveal>
        </section>
    );
};

export default InfoSection;
