/* eslint-disable react/prop-types */

import { useEffect, useState } from "react"

function Skill({skill}) {
  const [title, setTitle] = useState();
  const [imgUrl, setImgUrl] = useState('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if(skill == undefined){
      return;
    }
    else{
      setTitle(skill.title);
      setImgUrl(skill.imgUrl);  
      setProgress(skill.progress);
    }
  }, [skill])
  return (
    <div className="flex flex-col gap-2 items-center h-14 p-4 rounded-full w-full">
        <div className="flex gap-2 w-full items-center">
        <img src={imgUrl} alt="skill Image" className="h-5 max-w-none object-contain"/>
        <h4 className="text-sm font-semibold text-slate-400">{title}</h4>
        </div>
        <div className="w-full h-2.5 rounded-full bg-slate-800">
          <div className="bg-emerald-500 h-2.5 rounded-full" style={{width: progress + '%'}}></div>
        </div>
    </div>
  )
}

export default Skill