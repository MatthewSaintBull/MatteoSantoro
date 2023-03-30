const ProjectItem = ({image, alt, title, href}) => {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer">
            <div className="bg-white shadow rounded-lg overflow-hidden">
                <img src={image} alt={alt} className='object-cover h-64 w-full' />
                <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 truncate">{title}</h3>
                </div>
            </div>
        </a>
    );
}

export default ProjectItem;