const SkillItem = ({title, description}) => {
    return (
        <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-bold mb-4">{title}</h3>
            <p className="px-4">
                {description}
            </p>
        </div>
    );
}

export default SkillItem;