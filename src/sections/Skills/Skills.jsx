import { useState, useEffect } from 'react';
import { skills } from '../../data/data';
import Skill from '../../components/Skill/Skill';

function Skills() {
    const [skillsArr, setSkillsArr] = useState([]);

    useEffect(() => {
        setSkillsArr(skills);
    }, []);

    console.log(skillsArr);
    return (
        <div className="h-[200px] relative w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <div className="flex w-200% animate-marquee-infinite">
                <div className='w-[50%] gap-5 flex items-center justify-center md:justify-start whitespace-nowrap '>
                    {skills.concat(skills).map((skill, index) => <Skill key={index} imgUrl={skill.imgUrl} title={skill.title} />
                    )}
                </div>
            </div>
            </div>
            )
}

            export default Skills