import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const REQUEST_LINE = "GET /api/matteo-santoro";
const EASE = [0.16, 1, 0.3, 1];

// La prova del dittico: una risposta API con i fatti veri. Nessuna chrome finta —
// cornice tipografica: riga di richiesta + chip di stato + corpo JSON.
const CodeCard = () => {
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTyped(REQUEST_LINE);
      setDone(true);
      return;
    }
    let i = 0;
    const timer = setInterval(() => {
      i += 1;
      setTyped(REQUEST_LINE.slice(0, i));
      if (i >= REQUEST_LINE.length) {
        clearInterval(timer);
        setTimeout(() => setDone(true), 250);
      }
    }, 40);
    return () => clearInterval(timer);
  }, []);

  const [method, ...path] = typed.split(" ");

  return (
    <figure className="code-card" aria-label="Risposta API con il profilo di Matteo Santoro">
      <div className="code-card__bar">
        <span className="code-card__req">
          <span className="tok-method">{method}</span>
          {path.length > 0 && <span> {path.join(" ")}</span>}
          {!done && <span className="code-caret" aria-hidden="true" />}
        </span>
        {done && <span className="status-chip">200 OK</span>}
      </div>
      <pre className={`code-card__body${done ? " is-in" : ""}`}>
        <code>
          <span className="tok-punc">{"{"}</span>{"\n"}
          {"  "}<span className="tok-key">"nome"</span><span className="tok-punc">: </span><span className="tok-str">"Matteo Santoro"</span><span className="tok-punc">,</span>{"\n"}
          {"  "}<span className="tok-key">"ruolo"</span><span className="tok-punc">: </span><span className="tok-str">"Full Stack Developer"</span><span className="tok-punc">,</span>{"\n"}
          {"  "}<span className="tok-key">"esperienza"</span><span className="tok-punc">: </span><span className="tok-str">"8+ anni"</span><span className="tok-punc">,</span>{"\n"}
          {"  "}<span className="tok-key">"stack"</span><span className="tok-punc">: [</span><span className="tok-str">"React"</span><span className="tok-punc">, </span><span className="tok-str">"Vue"</span><span className="tok-punc">, </span><span className="tok-str">"Node"</span><span className="tok-punc">, </span><span className="tok-str">"AWS"</span><span className="tok-punc">],</span>{"\n"}
          {"  "}<span className="tok-key">"certificazione"</span><span className="tok-punc">: </span><span className="tok-str">"AWS Developer Associate"</span><span className="tok-punc">,</span>{"\n"}
          {"  "}<span className="tok-key">"disponibile"</span><span className="tok-punc">: </span><span className="tok-key">true</span>{"\n"}
          <span className="tok-punc">{"}"}</span>
        </code>
      </pre>
    </figure>
  );
};

const HeroSection = () => {
  const reduced = useReducedMotion();
  const enter = (delay) => ({
    initial: reduced ? false : { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: EASE },
  });

  return (
    <section className="container-page">
      <div className="hero">
        <div>
          <motion.h1 className="hero__title display" {...enter(0)}>
            Sviluppo web solido, dal frontend al cloud.
          </motion.h1>
          <motion.p className="hero__lede" {...enter(0.08)}>
            Sono Matteo Santoro, Full Stack Developer con certificazione AWS e più di
            otto anni di esperienza. Costruisco applicazioni React, Vue e Node che
            reggono il traffico reale, per startup e aziende come Yoox, Leroy Merlin
            ed Enel.
          </motion.p>
          <motion.div className="hero__actions" {...enter(0.16)}>
            <a className="btn btn--primary" href="#contacts">Parliamo del tuo progetto</a>
            <a className="cta-link" href="#projects">Vedi i progetti</a>
          </motion.div>
        </div>
        <motion.div {...enter(0.1)}>
          <CodeCard />
        </motion.div>
      </div>

      <div className="clients">
        <ul className="clients__inner">
          <li className="clients__lead label-mono" aria-label="Aziende per cui ho lavorato">
            Ho scritto codice per
          </li>
          <li>Yoox Net-a-Porter</li>
          <li>ShopFully</li>
          <li>Leroy Merlin</li>
          <li>Enel</li>
          <li>Deghi</li>
          <li>Ingenico</li>
          <li>Vericast</li>
        </ul>
      </div>
    </section>
  );
};

export default HeroSection;
