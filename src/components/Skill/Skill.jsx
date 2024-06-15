/* eslint-disable react/prop-types */

function Skill({imgUrl, title}) {
  return (
    <div className="flex gap-2 p-2 mx-4 items-center h-full w-auto">
        <img src={imgUrl} alt="skill Image" className="h-[60px] max-w-none object-contain"/>
        <h4 className="text-xl font-semibold text-slate-400 text-nowrap">{title}</h4>
    </div>
  )
}

export default Skill