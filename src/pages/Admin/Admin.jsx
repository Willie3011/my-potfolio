/* eslint-disable react/prop-types */

import Navbar from '../../components/Navbar/Navbar';
import Home from '../../pages/Home/Home';
function Admin({ isAuthorized, userID }) {

  if (!isAuthorized && userID === "") {
    return <Home/>
  }
  console.log(isAuthorized);

  return (
    <div className="h-screen">
      <Navbar isAuthorized={isAuthorized}/>
            {/* Navigation bar */}
      {/* Overview or Home page */}
          {/* Text Changing */}
          {/* Profile and Banner */}
          {/* Projects */}
      </div>
  )
}

export default Admin