import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../sections/Banner/Banner'
import Skills from '../../sections/Skills/Skills'
import Header from '../../components/Header/Header'
function Home() {
  return (
    <div className="h-auto">
        <Navbar/>
        <Header/>
        <Banner/>
        <Skills/>
    </div>
  )
}

export default Home