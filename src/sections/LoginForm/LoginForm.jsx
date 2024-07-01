/* eslint-disable react/prop-types */
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import { auth } from '../../firebase/firebaseConfig'
import { signInWithEmailAndPassword } from "firebase/auth";

function LoginForm({ handleAuth }) {
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });    
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await signInWithEmailAndPassword(auth, user.email, user.password)
                .then((userCred) => {
                    const user = userCred.user;
                    handleAuth(user);
            })
            navigate("/admin");
        }
        catch(error) {
            setError("Login failed. Please check your credentials." + error)
        }
        finally {
            setIsLoading(false);
        }
    }


    return (
        <section className="flex items-center px-2 justify-center mt-10 w-full h-auto ">
            <section className="w-full bg-slate-800 border-slate-700 rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                        Login
                    </h1>
                    <form className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                onChange={handleInputChange}
                                className="border text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                                placeholder="name@company.com"
                                required="" />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="••••••••"
                                onChange={handleInputChange}
                                className="border text-sm rounded-lg block w-full p-2.5 bg-slate-700 border-slate-600 placeholder-gray-400 text-white" required="" />
                        </div>
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        <button onClick={handleSubmit} type="submit" className={isLoading ? "w-full bg-slate-700 h-10 rounded-lg" : "w-full h-10 text-white bg-red-600 hover:bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"}>{isLoading ? < Loading /> : "Login"}</button>

                    </form>
                </div>
            </section>
        </section>

    )
}

export default LoginForm