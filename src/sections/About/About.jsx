/* eslint-disable react/prop-types */
import Banner from "../../components/Banner/Banner";
import Services from "../../components/Services/Services";
import Skills from "../../components/Skills/Skills";

function About({ services, skills }) {
  return (
    <div className="h-auto px-8">
      <Banner />
      <Services services={services} />
      <Skills skills={skills} />
    </div>
  );
}

export default About;
