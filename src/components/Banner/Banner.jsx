/* eslint-disable react/no-unescaped-entities */
import banner from "../../assets/banner.svg";

function Banner() {
  return (
    <section className="flex m-auto max-w-[1440px] mt-4 pb-8 gap-2 h-auto lg:flex-row flex-col">
      {/* Left */}
      <div className="lg:w-1/2 flex lg:mt-6 flex-col">
        <h1 className="text-[16px] font-semibold bg-slate-700 w-fit h-[36px] p-1 rounded-lg border-b-2 border-b-emerald-500 hover:border-l-2 hover:border-b-4 cursor-pointer hover:border-l-emerald-500 text-emerald-500 text-balance md:text-wrap">
          About me
        </h1>
        <h2 className="mt-4 text-3xl font-roboto font-extralight italic">
          An ambitious{" "}
          <span className="underline font-light text-emerald-500">
            Software Engineer
          </span>{" "}
          with a thirst for success
        </h2>
        <p className="text-base md:text-lg font-normal mt-4 text-slate-400">
          I am Willem April, a passionate IT graduate with a Bachelor's degree
          in Information Technology from North West University. I specialize in
          full-stack development, creating dynamic, user-friendly applications
          that solve real-world problems. Proficient in C#, HTML, CSS,
          JavaScript, and experienced with tools like Git, Visual Studio, and
          Microsoft Azure, I bring technical expertise and a drive for
          innovation to every project.
        </p>
        <p className="text-base md:text-lg font-normal mt-4 text-slate-400">
          From intuitive salary calculators to e-commerce platforms, I turn
          complex challenges into seamless digital solutions. I thrive in both
          collaborative and independent environments, always striving for
          excellence and clarity in my work. Explore my portfolio to see how I
          bring visions to life through code.
        </p>

        <div className="mt-6">
          <button className="bg-slate-700 h-[44px] text-red-400 font-semibold px-4 py-2 rounded-3xl border-b-2 border-red-500 active:border-l-4 hover:border-b-4 duration-50 transition-all hover:text-red-400 active:scale-95">
            Let's connect
          </button>
        </div>
      </div>

      {/* Right */}
      <div className="lg:w-1/2 mt-4 lg:mt-0 lg:flex relative">
        <img src={banner} className="h-full w-full object-contain" />
      </div>
    </section>
  );
}

export default Banner;
