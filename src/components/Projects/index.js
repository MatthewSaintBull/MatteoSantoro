import React from "react";

const projects = [
  {
    id: 1,
    title: "Deghi.it",
    imageURL: require('../../assets/deghi-preview.png'),
    projectURL: "https://deghi.it",
  },
  {
    id: 2,
    title: "Viveresenzalattosio.it",
    imageURL: require('../../assets/viveresenzalattosio-preview.png'),
    projectURL: "https://viveresenzalattosio.it/"
  }
];

const Projects = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.projectURL}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-md shadow-md overflow-hidden"
          >
            <img src={project.imageURL} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h1 className="font-bold text-sm text-blue-500 truncate">{project.title}</h1>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;