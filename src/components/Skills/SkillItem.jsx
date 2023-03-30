import { useState } from "react";

const SkillItem = ({ title, description }) => {
    const [isExpanded, setIsExpanded] = useState(false)
    return (
        <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-bold mb-4">{title}</h3>
            <p className={`px-4 ${isExpanded ? 'h-max' : 'h-10 md:h-32 lg:h-40'} overflow-hidden`}>
                {description}
            </p>
            <button className="w-full h-10 flex justify-center -mb-5 mt-5 border-t-[1px] border-gray-600 py-2 " onClick={()=>setIsExpanded(!isExpanded)}>
                <i className={`fa-solid ${isExpanded ? 'fa-angle-up' : 'fa-angle-down'} text-gray-900 text-3xl`}></i>
            </button>
        </div>
    );
}

export default SkillItem;