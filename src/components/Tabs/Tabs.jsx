/* eslint-disable react/prop-types */


function Tabs({ tabs, activeTab, onTabClick }) {
    
  return (
    <div className="container h-12 border-b mt-1 border-gray-600">
        <ul className="h-full flex items-center gap-7 px-6">
        {tabs.map((tab) => (
            <li 
            key={tab.id}
            className={activeTab === tab.id ? "bg-slate-700 h-full rounded-t-lg flex justify-center items-center text-lg cursor-pointer font-semibold max-md:text-base w-[100px]" : "cursor-pointer hover:bg-slate-700 text-gray-600 font-bold rounded-t-lg h-full w-[100px] flex items-center justify-center max-md:text-sm"}
            onClick={() => onTabClick(tab.id)}
            >
                {tab.title}
            </li>
        ))}
        </ul>
    </div>
  )
}

export default Tabs