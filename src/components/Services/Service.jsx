/* eslint-disable react/prop-types */

function Service( {key, service}) {
  return (
    <div key={key} className="max-sm:h-auto h-[260px] p-4 w-full border-1 bg-slate-800 border-emerald-500 rounded-lg hover:border-2 overflow-hidden">
        {/* icon */}
        <div className="bg-slate-600 w-8 h-8 flex items-center justify-center rounded-full">
            {<service.icon className="text-emerald-400 text-xl"/>}
        </div>
        {/* title */}
        <h3 className="font-semibold text-lg mt-4">{service.title}</h3>
        {/* desc */}
        <p className="text-sm text-gray-400 font-thin text-balance my-4">{service.description}</p>
    </div>
  )
}

export default Service