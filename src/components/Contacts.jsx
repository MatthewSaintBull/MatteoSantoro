import { useEffect } from "react";
import Reveal from "./Reveal";

const ContactsSection = () => {
    useEffect(() => {
        const scriptId = "hubspot-form-script-148295403";

        if (!document.getElementById(scriptId)) {
            const script = document.createElement("script");
            script.id = scriptId;
            script.src = "https://js-eu1.hsforms.net/forms/embed/148295403.js";
            script.defer = true;
            script.async = true;
            document.body.appendChild(script);
        }
    }, []);

    return (
        <section className="container-page">
            <Reveal>
                <header className="head-hang">
                    <h2 className="display">Contattami</h2>
                    <p>Raccontami il progetto in due righe: ti rispondo con domande concrete, non con una brochure.</p>
                </header>

                <div className="contact">
                    <dl className="channels link-list">
                        <div>
                            <dt className="label-mono">Email</dt>
                            <dd><a href="mailto:admin@msantoro.com">admin@msantoro.com</a></dd>
                        </div>
                        <div>
                            <dt className="label-mono">Telefono</dt>
                            <dd><a href="tel:+393337360501">+39 333 736 0501</a></dd>
                        </div>
                        <div>
                            <dt className="label-mono">Curriculum</dt>
                            <dd>
                                <a href={require('../assets/CV.pdf')} target="_blank" rel="noopener noreferrer">
                                    Scarica il CV (PDF)
                                </a>
                            </dd>
                        </div>
                        <div>
                            <dt className="label-mono">Social</dt>
                            <dd>
                                <a href="https://github.com/MatthewSaintbull" target="_blank" rel="noopener noreferrer">GitHub</a>
                                {" · "}
                                <a href="https://www.linkedin.com/in/matteo-santoro/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                {" · "}
                                <a href="https://www.instagram.com/matteo_santoro_97/" target="_blank" rel="noopener noreferrer">Instagram</a>
                                {" · "}
                                <a href="https://medium.com/@mttdev1997" target="_blank" rel="noopener noreferrer">Medium</a>
                            </dd>
                        </div>
                    </dl>

                    <div className="form-card">
                        <div
                            className="hs-form-frame"
                            data-region="eu1"
                            data-form-id="48798398-1cc7-4520-b52a-8368ecbef396"
                            data-portal-id="148295403"
                        ></div>
                    </div>
                </div>
            </Reveal>
        </section>
    );
};

export default ContactsSection;
