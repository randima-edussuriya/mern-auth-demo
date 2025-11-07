import { useContext, useEffect, useState } from "react";
import lock_icon from "../assets/lock_icon.svg";
import mail_icon from "../assets/mail_icon.svg";
import person_icon from "../assets/person_icon.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import logo_badge from "../assets/logo_badge.svg";

function LoginRegister() {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  // get context values
  const { backendUrl, isLoggedIn, setIsLoggedIn, getUserData } =
    useContext(AppContext);

  const navigate = useNavigate();
  const location = useLocation();

  //handle form input change
  const handlechange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  //handle form submit
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (isLoginForm) {
        // login logic
        const { data } = await axios.post(
          `${backendUrl}/api/auth/login`,
          formData
        );
        if (data.success) {
          toast.success("login successful");
          setIsLoggedIn(true);
          getUserData();
          navigate(location.state?.from?.pathname || "/", { replace: true });
        }
      } else {
        // register logic
        const { data } = await axios.post(
          `${backendUrl}/api/auth/register`,
          formData
        );
        if (data.success) {
          toast.success(data.message);
          setIsLoginForm(true);
        }
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Something went wrong, Please try again later"
      );
      console.error(error);
    }
  };

  // redirect if already logged in
  useEffect(() => {
    if (isLoggedIn)
      navigate(location.state?.from?.pathname || "/", { replace: true });
  }, [isLoggedIn]);

  return (
    <div className="flex items-center justify-center min-h-screen  bg-linear-to-br from-blue-300 to-green-300 px-6 sm:px-0">
      <div className="w-full sm:w-100 p-10 text-indigo-300 rounded-lg shadow-lg bg-slate-900">
        {/* ------------------------------------------
              Header section
        ---------------------------------------------- */}
        <img
          onClick={() => navigate("/")}
          className="mx-auto mb-3 w-13 sm:w-15 cursor-pointer"
          src={logo_badge}
          alt="Logo badge"
        />
        <h1 className="mb-3 text-2xl sm:text-3xl font-semibold text-center text-white">
          {isLoginForm ? "Login" : "Sign Up"}
        </h1>
        <p className="mb-4 text-center">
          {isLoginForm ? "Log in to your account" : "Create your account"}
        </p>
        {/* ------------------------------------------
              Form Section
        ---------------------------------------------- */}
        <form onSubmit={handleSubmit}>
          {/* Full name filed */}
          {!isLoginForm && (
            <div className="mb-4">
              <div className="flex bg-slate-700 rounded-full gap-3 px-5 py-2.5 w-full">
                <img className="w-4" src={person_icon} alt="person icon" />
                <input
                  onChange={handlechange}
                  name="name"
                  className="w-full bg-transparent outline-none"
                  type="text"
                  placeholder="Full Name"
                  required
                />
              </div>
              {error && (
                <span className="text-red-400">error message for field</span>
              )}
            </div>
          )}
          {/* Email filed */}
          <div className="mb-4">
            <div className="flex bg-slate-700 rounded-full gap-3 px-5 py-2.5 w-full">
              <img className="w-4" src={mail_icon} alt="mail icon" />
              <input
                onChange={handlechange}
                name="email"
                className="w-full bg-transparent outline-none"
                type="email"
                placeholder="Email Address"
                required
              />
            </div>
            {error && (
              <span className="text-red-400">error message for field</span>
            )}
          </div>
          {/* Password filed */}
          <div className="mb-4">
            <div className="flex bg-slate-700 rounded-full gap-3 px-5 py-2.5 w-full">
              <img className="w-4" src={lock_icon} alt="person icon" />
              <input
                onChange={handlechange}
                name="password"
                className="w-full bg-transparent outline-none"
                type="password"
                placeholder="Password"
                required
              />
            </div>
            {error && (
              <span className="text-red-400">error message for field</span>
            )}
          </div>

          {isLoginForm && (
            <p
              onClick={() => navigate("/reset-password")}
              className="cursor-pointer mb-4 hover:text-indigo-200"
            >
              Forgot Password?
            </p>
          )}
          <button
            type="submit"
            className="mb-4 rounded-full w-full py-2 bg-linear-to-br from-blue-900 to-blue-400 cursor-pointer text-white font-medium hover:from-blue-800 transition-all"
          >
            {isLoginForm ? "Login" : "Sign Up"}
          </button>
        </form>

        {isLoginForm ? (
          <p className="text-center mt-4 text-gray-400">
            Don't have an account?{" "}
            <span
              onClick={() => setIsLoginForm(false)}
              className="underline cursor-pointer text-blue-400 hover:text-blue-300 transition-all"
            >
              Sign Up
            </span>
          </p>
        ) : (
          <p className="text-center mt-4 text-gray-400">
            Already have an account?{" "}
            <span
              onClick={() => setIsLoginForm(true)}
              className="underline cursor-pointer text-blue-400 hover:text-blue-300 transition-all"
            >
              Login here
            </span>
          </p>
        )}
      </div>
    </div>
  );
}

export default LoginRegister;
