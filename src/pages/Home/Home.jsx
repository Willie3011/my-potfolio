import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../sections/Banner/Banner'
import Skills from '../../sections/Skills/Skills'

function Home() {
  return (
    <div className="h-auto">
        <Navbar/>
        <Banner/>
        <Skills/>
    </div>
  )
}

export default Home