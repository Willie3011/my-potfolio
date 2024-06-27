import { useEffect, useState } from "react"

/* eslint-disable react/prop-types */
export default function ProjectCard({ key, project }) {
    const [img, setImg] = useState("");
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [tech, setTech] = useState();

    useEffect(() => {
        if (project.techStack) {
            setImg(project.img);
            setTitle(project.title);
            setDesc(project.description);
            setTech(project.techStack);
        }
    },[])
  return (
      <div key={key} className="bg-slate-800 shadow border-2 border-transparent hover:shadow-slate-800 w-52 h-auto rounded-lg overflow-hidden">
          <img src={img} alt="Project Img" className="w-full p-2 rounded-xl object-cover"/>
        
          <div className="px-2 py-2">
            <h4 className='text-base font-semibold'>{title}</h4>
              <p className=' line-clamp-3 text-xs mt-2 text-gray-400'>
                  {desc}
              </p>
              {/* tech stack */}
              <div className="flex flex-wrap mt-2 gap-1">
                  <span className="text-xs text-gray-400">Tech Stack:</span>
                  <div className="flex flex-wrap">
                      {
                          tech != "" ? (
                                project.techStack.map((tech, index) => (
                                    <img src={tech.img} key={index} className="h-4 w-4 object-cover"/>
                          ))
                          ) : (
                                  <div></div>
                          )
                    }                      
                  </div>
              </div>

              {/* action buttons */}
              <div className="mt-2 flex gap-2">
                  <button className='text-xs font-semibold text-gray-300 hover:text-white bg-emerald-700 hover:bg-emerald-500 w-fit px-2 py-2 rounded active:scale-95 duration-150'>View</button>
                  <button className="text-xs font-semibold text-gray-300 hover:text-white bg-gray-600 hover:bg-gray-500 px-2 rounded py-2 active:scale-95">Visit site</button>
              </div>
        
          </div>
      </div>
      
  )
}
