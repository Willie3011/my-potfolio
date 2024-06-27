import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const ProjectArr = [
  
]

function Projects() {
  const [dropdown, setDropdown] = useState(false);
  const [projects, setProjects] = useState([]);
  function handleDropdown() {
    setDropdown(!dropdown);
  }

  useEffect(() => {
    if (ProjectArr) {
      setProjects(ProjectArr);
    }
  }, [])

  console.log(projects.length)
  console.log(ProjectArr)
  return (
    <section className={"h-auto flex flex-col gap-2 px-4 mt-4 text-semibold w-screen"}>
      <span className="text-base font-semibold bg-slate-700 w-fit h-[36px] p-1 rounded-lg border-b-2 border-b-emerald-500 hover:border-l-2 hover:border-b-4 cursor-pointer hover:border-l-emerald-500 text-emerald-500 text-balance md:text-wrap">
        My Projects
      </span>

      {/* Categories */}
      <div className="mt-4">
      <button onClick={() => handleDropdown()} data-dropdown-toggle="dropdown" className="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-1 focus:outline-none focus:ring-emerald-300 font-medium w-fit rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ">
        Categories
        <BiChevronDown />
        </button>
        {/* Dropdown menu */}
        <div id='dropdown' className={dropdown ? "z-10 absolute mt-1 bg-gray-700 divide-y divide-gray-100 rounded-lg shadow w-44" : "hidden"}>
          <ul className="py-2 text-sm text-gray-200" aria-labelledby="dropdownButton">
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-600 hover:text-white">All</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-600 hover:text-white">Back-end</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-600 hover:text-white">Front-end</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-600 hover:text-white">Full-stack</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
      {
        projects.length > 0 ? (
          projects.map((project, index) => (
            <ProjectCard key={index} project={project} />           
          ))
        ) : (
            <div className='w-full h-[50dvh] flex items-center justify-center text-2xl text-slate-400 font-bold '> No projects found</div>
        )
      }
      </div>
      
      
      {/* Projects */}
      
    </section>
  );
}

export default Projects;
