/* eslint-disable react/prop-types */
import Navbar from "../../components/Navbar/Navbar"
import LoginForm from '../../sections/LoginForm/LoginForm';
function Login({isAuthorized, handleAuth}) {
  return (
      <div className="h-screen">
      <Navbar isAuthorized={isAuthorized} />
      <LoginForm isAuthorized={isAuthorized} handleAuth={handleAuth} />
    </div>
  )
}

export default Login