import banner from '../../assets/banner.svg'
import react from '../../assets/react.svg';
import html from '../../assets/html.svg';
import css from '../../assets/css.svg';
import tailwind from '../../assets/tailwind.svg';
import github from '../../assets/github.svg';
import firebase from '../../assets/firebase.svg';
import javascript from '../../assets/javascript.svg';

function Banner() {
    return (
        <div className="flex m-auto max-w-[1440px] mt-4 pb-8 gap-2 h-auto lg:h-screen lg:flex-row flex-col">
            {/* Left */}
            <div className="lg:w-1/2 ">
                <h1 className="text-[40px] text-balance md:text-wrap sm:text-[52px] md:text-[64px]">Transforming Ideas into Impactful <span className="font-bold font-roboto italic text-emerald-500">Digital Solutions</span></h1>
                <p className="text-base md:text-lg md:mr-16 font-medium  text-slate-400">
                I am Willem April, a passionate IT graduate dedicated to crafting code that makes a difference. With deep expertise in full-stack development, I specialize in creating dynamic, user-friendly applications that solve real-world problems. From intuitive salary calculators to comprehensive e-commerce platforms, I combine technical prowess with a relentless drive for innovation. Explore my work and discover how I turn complex challenges into seamless digital realities, bringing your vision to life.
                </p>
            </div>
            
            {/* Right */}
            <div className="w-1/2 h-full hidden lg:flex relative">
                <img src={banner} className='h-full w-full object-contain' />
                <img src={react}  className='h-12  top-[25%] right-[30%] absolute'/>
                <img src={html}  className='h-12  top-[20%] left-[10%] absolute'/>
                <img src={css}  className='h-12 top-[70%] right-[47%] absolute'/>
                <img src={tailwind}  className='h-12  top-[60%] right-[80%] absolute'/>
                <img src={github}  className='h-12  top-[10%] right-[10%] absolute'/>
                <img src={firebase}  className='h-12  top-[10%] right-[50%] absolute'/>
                <img src={javascript}  className='h-12  top-[35%] right-[25%] absolute'/>
            </div>
        </div>
    )
}

export default Banner