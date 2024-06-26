/* eslint-disable react/prop-types */
import Banner from '../../components/Banner/Banner';
import Services from '../../components/Services/Services';

function About({services, skills}) {
  return (
    <div className="h-auto px-8">
      <Banner/>
      <Services services={services}/>
      {/* Skills */}
      <div className=""></div>
    </div>
  )
}

export default About