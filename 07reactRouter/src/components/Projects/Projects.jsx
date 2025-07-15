import React from 'react'

function Projects() {
  
  const projects = [
    {
      id: 1,
      title: "Currency Converter",
      description: "A real-time currency converter app built with React and API integration.",
      tags: ["React", "API", "Tailwind CSS"],
      // demoLink: "https://currency-converter-demo.netlify.app",
      codeLink: "https://github.com/Shrey-ansh10/react/tree/main/06currencyConverter",
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Background Changer",
      description: "A simple React app that changes the background color with a click.",
      tags: ["React", "JavaScript", "CSS"],
      // demoLink: "https://bg-changer-demo.netlify.app",
      codeLink: "https://github.com/Shrey-ansh10/react/tree/main/04bgchanger",
      image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Password Generator",
      description: "A secure password generator with customizable options.",
      tags: ["React", "Security", "Hooks"],
      // demoLink: "https://password-gen-demo.netlify.app",
      codeLink: "https://github.com/Shrey-ansh10/react/tree/main/05/05passwordGen",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Personal Portfolio with React Router Demo",
      description: "A demonstration of React Router with protected routes and navigation.",
      tags: ["React Router", "Authentication", "Frontend"],
      // demoLink: "https://router-demo.netlify.app",
      codeLink: "https://github.com/username/react-router-demo",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=500&auto=format&fit=crop"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            My Projects
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            A collection of my recent work and side projects.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between mt-auto pt-4 border-t border-gray-100">
                  {/* <a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
                  >
                    Live Demo
                  </a> */}
                  <a 
                    href={project.codeLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects

