/* eslint-disable react/prop-types */
import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { MdClose } from "react-icons/md";

function Navbar({isAuthorized}) {
  const [toggleMenu, setToggleMenu] = useState(false);
  let menuButton;
  if (toggleMenu) {
    menuButton = <MdClose />;
  } else {
    menuButton = <RiMenu3Fill />;
  }

  const handleToggle = () => {
    toggleMenu === false ? setToggleMenu(true) : setToggleMenu(false);
  };
  return (
    <nav className="p-2 h-[60px] flex items-center justify-between">
      <div className="container w-[80%] m-auto flex items-center justify-between">
        <div className="font-semibold text-xl">
          <h4 className="hidden md:block">
            Willem<span className="font-bold text-red-600">-</span>
            <span className="font-bold text-emerald-400">April</span>
          </h4>
          <h4 className="block text-bold text-2xl md:hidden">
            W<span className="text-emerald-500">April</span>
            <span className="text-red-500 text-3xl">.</span>
          </h4>
        </div>
        <div className="text-sm lg:flex hidden">
          <ul className="flex items-center gap-2">
            <li className="font-semibold p-2 text-slate-400 transition-all duration-300 hover:text-emerald-200">
              <a href="/my-potfolio/">Home</a>
            </li>
            <li className="font-semibold p-2 text-slate-400 transition-all duration-300 hover:text-emerald-200">
              <a href="#">About</a>
            </li>

            <li className="font-semibold p-2 text-slate-400 transition-all duration-300 hover:text-emerald-200">
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="/my-potfolio/login" className="ml-4 px-4 py-2 rounded-3xl font-semibold bg-red-500 active:scale-95 hover:bg-slate-500 transition-all duration-300 ease-in">
                {isAuthorized ? "Logout" :"Login"}
              </a>
            </li>
            <li>
              
            </li>
          </ul>
        </div>

        <div
          onClick={() => handleToggle()}
          className="text-slate-100 text-2xl transition-all duration-300 ease-in-out block lg:hidden"
        >
          {menuButton}
        </div>

        {/* Mobile menu */}
        <div
          className={
            toggleMenu === true
              ? "absolute top-[60px] left-0 md:left-auto md:right-[32px] rounded-b-md md:rounded-md bg-slate-800 text-white md:w-[400px] w-screen transition-all duration-300 z-10"
              : "transition-all duration-500 ease-out absolute -top-[100%] right-0 left-0 md:right-[0px] bg-slate-700 text-red md:w-[400px] w-screen z-10"
          }
        >
          <ul className="p-4 flex flex-col w-full items-center gap-2 text-base">
            <li className=" font-semibold p-2 transition-all duration-300 hover:text-emerald-200">
              <a href="/my-potfolio/">Home</a>
            </li>
            <li className="font-semibold p-2 transition-all duration-300 hover:text-emerald-200">
              <a href="#">Projects</a>
            </li>
            <li className="font-semibold p-2  transition-all duration-300 hover:text-emerald-200">
              <a href="#">Contact</a>
            </li>
            <li className="w-full p-2 text-center">
              <a href="/my-potfolio/login" className="px-4 py-2 block rounded-xl font-semibold bg-red-700 hover:bg-slate-500 transition-all duration-300 ease-in">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
