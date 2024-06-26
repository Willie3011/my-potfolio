/* eslint-disable react/prop-types */
import profile from "../../assets/banner.jpg";
import banner from "../../assets/banner1.jpg";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaGithub,
} from "react-icons/fa";
import Tabs from "../Tabs/Tabs";

function Header({ tabs, activeTab, onTabClick }) {
  return (
    <header className="-z-10 h-[80vh] max-md:h-auto w-full flex flex-col items-center bg-slate-950">
      {/* Banner */}
      <div className="relative h-[30%] sm:h-[40%] md:h-[50%] lg:h-[60%] w-full lg:w-[90%] max-w-[1440px] rounded-b-lg shadow-lg overflow-hidden">
        <img src={banner} className="h-full w-full object-cover" />
        <div className="absolute left-0 top-0 h-full w-full opacity-50 bg-black"></div>
      </div>
      {/* Wrapper */}
      <div className="relative mb-2 px-3 h-auto sm:h-1/2 md:h-[40%] lg:h-[30%] lg:w-[90%] w-full max-w-[1440px]">
        {/* Profile Wrapper*/}
        <div className="h-[80%] max-md:h-auto w-full flex items-start justify-between max-md:flex-col max-md:gap-2">
          <div className="flex items-center h-full max-md:flex-col">
            {/* Image */}
            <div className="-mt-14 2xl:-mt-40 max-md:-ml-20 lg:ml-8 max-sm:h-[120px] max-md:h-[150px] md:h-[180px] 2xl:h-[350px] cursor-pointer border-4 border-slate-700 rounded-full overflow-hidden bg-slate-600">
              <img src={profile} className="w-full h-full object-cover" />
            </div>
            <div className="ml-2 2xl:-mt-32">
              {/* Name and Profession */}
              <div className="flex flex-col gap-1 2xl:gap-4">
                <h1 className="text-3xl 2xl:text-8xl font-bold">
                  Willem April
                </h1>
                <h2 className="text-slate-400 2xl:text-3xl 2xl:w-fit font-semibold w-[200px]">
                  Aspiring Web Developer (FullStack Developer)
                </h2>
              </div>
              {/* Social Media */}
              <div className="mt-2">
                <ul className="flex gap-1">
                  <li className="border h-8 w-8 2xl:w-16 2xl:h-16 duration-200 hover:border-slate-700 rounded-full flex items-center justify-center border-slate-400">
                    <a href="">
                      <FaFacebook className="text-2xl 2xl:text-5xl duration-200 text-slate-400 hover:scale-90 hover:text-slate-200" />
                    </a>
                  </li>
                  <li className="border h-8 w-8 2xl:w-16 2xl:h-16 duration-200 hover:border-slate-700 rounded-full flex items-center justify-center border-slate-400">
                    <a href="">
                      <FaInstagram className="text-2xl 2xl:text-5xl duration-200 text-slate-400 hover:scale-90 hover:text-slate-200" />
                    </a>
                  </li>
                  <li className="border h-8 w-8 2xl:w-16 2xl:h-16 duration-200 hover:border-slate-700 rounded-full flex items-center justify-center border-slate-400">
                    <a href="">
                      <FaLinkedin className="text-2xl 2xl:text-5xl duration-200 text-slate-400 hover:scale-90 hover:text-slate-200" />
                    </a>
                  </li>
                  <li className="border h-8 w-8 2xl:w-16 2xl:h-16 duration-200 hover:border-slate-700 rounded-full flex items-center justify-center border-slate-400">
                    <a href="">
                      <FaWhatsapp className="text-2xl 2xl:text-5xl duration-200 text-slate-400 hover:scale-90 hover:text-slate-200" />
                    </a>
                  </li>
                  <li className="border h-8 w-8 2xl:w-16 2xl:h-16 duration-200 hover:border-slate-700 rounded-full flex items-center justify-center border-slate-400">
                    <a href="">
                      <FaGithub className="text-2xl 2xl:text-5xl text-slate-400 hover:scale-90 hover:text-slate-200" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Buttons */}
          <div className="flex h-full max-md:w-full md:items-end lg:justify-end gap-1 max-md:items-center max-md:justify-center">
            <button className="bg-red-500 max-md:flex-1 md:px-4 max-md:px-1 max-md:text-xs py-2 rounded-lg text-sm font-semibold duration-200 shadow-sm shadow-slate-800 hover:bg-slate-800">
              <p className="text-nowrap">Download CV</p>
            </button>
            <button className="bg-slate-700 max-md:flex-1 md:px-4 max-md:px-1 max-md:text-xs py-2 text-sm rounded-lg font-semibold duration-200 shadow-sm shadow-slate-800 hover:bg-slate-800">
              <p className="text-nowrap">Contact Me</p>
            </button>
          </div>
        </div>
      </div>
      <div className="h-[2px] w-full bg-gray-900"></div>

      {/* Tabs */}
      <div className="max-md:h-auto w-full">
        <Tabs tabs={tabs} activeTab={activeTab} onTabClick={onTabClick} />
      </div>
    </header>
  );
}

export default Header;
