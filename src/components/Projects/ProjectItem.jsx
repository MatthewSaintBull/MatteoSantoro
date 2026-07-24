// Card F6: uniforme, un solo segnale in hover (il bordo vira al cobalto).
const ProjectItem = ({ image, alt, name, role, detail, href }) => {
  return (
    <article>
      <a className="project" href={href} target="_blank" rel="noopener noreferrer">
        <figure>
          <img src={image} alt={alt} width={640} height={480} loading="lazy" />
        </figure>
        <div className="project__meta">
          <span className="label-mono">{role}</span>
          <h3 className="project__name">{name}</h3>
          <p className="project__detail">{detail}</p>
          <span className="project__action">Visita ↗</span>
        </div>
      </a>
    </article>
  );
};

export default ProjectItem;
