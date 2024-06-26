/* eslint-disable react/prop-types */
import Skill from "./Skill"
import skillsImg from '../../assets/mind-map-animate.svg';

function Skills({ skills }) {
    
    return (
        <section className="h-auto mt-8">
            <span className="bg-slate-700 p-1 h-[36px] rounded-lg border-b-2 text-[16px] text-emerald-500 font-semibold border-emerald-500 hover:border-l-2 hover:border-b-4 cursor-pointer duration-75">My skills</span>
            <div className="flex items-center justify-center flex-col-reverse gap-4 mt-8 lg:flex-row">
                {/* left */}
                <div className="lg:w-1/2 w-full">
                    <img src={skillsImg} className="w-full" />
                </div>
                    {/* right */}
                    <div className="lg:w-1/2 w-full h-full flex flex-col gap-1">
                    <h2 className="font-thin text-4xl mb-4">My Expertise Area</h2>
                    {    
                        skills.map((skill, index) => <Skill key={index} skill={skill}/>)
                    }
                    </div>
            </div>
        </section>
    )
}

export default Skills