import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import About from "../../sections/About/About";
import Projects from "../../sections/Projects/Projects";
import Blog from "../../sections/Blog/Blog";
import { skills, services } from "../../data/data";

function Home() {
  const [activeTab, setActiveTab] = useState(1);
  const tabs = [
    {
      id: 1,
      title: "About",
    },
    {
      id: 2,
      title: "Projects",
    },
    {
      id: 3,
      title: "Blog",
    },
  ];

  const renderSection = () => {
    switch (activeTab) {
      case 1:
        return <About services={services} skills={skills} />;
      case 2:
        return <Projects />;
      case 3:
        return <Blog />;
    }
  };
  return (
    <div className="h-auto">
      <Navbar />
      <Header tabs={tabs} activeTab={activeTab} onTabClick={setActiveTab} />

      {/* Tab content */}
      <div className="">{renderSection()}</div>
    </div>
  );
}

export default Home;
