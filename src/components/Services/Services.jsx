/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import Service from "./Service";

function Services({ services }) {
  return (
    <section className="h-auto mt-4">
      <span className="bg-slate-700 p-1 h-[36px] rounded-lg border-b-2 text-[16px] text-emerald-500 font-semibold border-emerald-500 hover:border-l-2 hover:border-b-4 cursor-pointer duration-75">
        My services
      </span>
      <h2 className="text-3xl mt-4 font-thin">
        I'm a Passionate{" "}
        <span className="text-emerald-500 font-normal italic">developer</span>{" "}
        who loves simplicity in things.
      </h2>
      <h1 className="text-4xl mt-2">What I Do:</h1>
      <div className="mt-8 grid max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 items-center">
        {services.map((service, index) => (
          <Service key={index} service={service} />
        ))}
      </div>
    </section>
  );
}

export default Services;
