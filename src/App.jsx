/* eslint-disable no-unused-vars */
import Home from "./pages/Home/Home";
import Login from './pages/Auth/Login'
import Admin from "./pages/Admin/Admin";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const storedUserId = localStorage.getItem('userID');
    if (storedUserId) {
      setUserId(storedUserId);
      setIsAuthorized(true);
    }
  }, []);

  const handleAuth = async (data) => {
    const id = data.uid;
    localStorage.setItem('userID', id);
    setUserId(id);
    if (!id) {
      setIsAuthorized(false);
    }
    else
    {
      setIsAuthorized(true);
      }
    console.log(id);
  }

  return (
    <div className=" box-border bg-slate-900 h-auto text-white">
      <Router basename="/my-potfolio">
        <Routes>
          <Route path="/login" element={<Login isAuthorized={isAuthorized} handleAuth={handleAuth} />} />
          <Route path="/" element={<Home isAuthorized={isAuthorized} />} />
          <Route path="/admin" element={<Admin isAuthorized={isAuthorized} userID={userId} />} />
          {userId ? (<Route path="/admin" element={<Admin isAuthorized={isAuthorized} userID={userId} />} />)
              : (<Route path="/" element={<Home isAuthorized={isAuthorized} />} />)
          }
        </Routes>
      </Router>
    </div>
  );
}

export default App;
