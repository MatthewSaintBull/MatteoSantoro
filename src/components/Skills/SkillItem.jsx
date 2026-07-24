// Riga dello spec sheet (F3): nome · valore · dettaglio.
const SkillItem = ({ title, value, detail }) => {
    return (
        <div className="spec__row">
            <dt className="spec__name">{title}</dt>
            <dd className="spec__value">{value}</dd>
            <dd className="spec__detail">{detail}</dd>
        </div>
    );
};

export default SkillItem;
