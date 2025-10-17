import { useState } from "react";
import lock_icon from "../assets/lock_icon.svg";
import mail_icon from "../assets/mail_icon.svg";
import person_icon from "../assets/person_icon.svg";

function LoginRegister() {
  const [isLogin, setIsLogin] = useState(false);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  //handle form input change
  const handlechange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  //handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="flex items-center justify-center min-h-screen  bg-gradient-to-br from-blue-300 to-green-300 px-6 sm:px-0">
      <div className="w-full sm:w-100 p-10 text-indigo-300 rounded-lg shadow-lg bg-slate-900">
        {/* ------------------------------------------
              Header section
        ---------------------------------------------- */}
        <img
          className="mx-auto mb-3 w-13 sm:w-15"
          src="favicon.svg"
          alt="Logo"
        />
        <h1 className="mb-3 text-3xl font-semibold text-center text-white">
          {isLogin ? "Login" : "Sign Up"}
        </h1>
        <p className="mb-4 text-center">
          {isLogin ? "Log in to your account" : "Create your account"}
        </p>
        {/* ------------------------------------------
              Form Section
        ---------------------------------------------- */}
        <form onSubmit={handleSubmit}>
          {/* Full name filed */}
          {!isLogin && (
            <div className="mb-4">
              <div className="flex bg-slate-700 rounded-full gap-3 px-5 py-2.5 w-full">
                <img className="w-4" src={person_icon} alt="person icon" />
                <input
                  onChange={handlechange}
                  name="fullName"
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

          {isLogin && <p className="cursor-pointer mb-4">Forgot Password?</p>}
          <button
            type="submit"
            className="mb-4 rounded-full w-full py-2 bg-gradient-to-br from-blue-900 to-blue-400 cursor-pointer text-white font-medium"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        {isLogin ? (
          <p className="text-center mt-4 text-gray-400">
            Don't have an account?{" "}
            <span
              onClick={() => setIsLogin(false)}
              className="underline cursor-pointer text-blue-400"
            >
              Sign Up
            </span>
          </p>
        ) : (
          <p className="text-center mt-4 text-gray-400">
            Already have an account?{" "}
            <span
              onClick={() => setIsLogin(true)}
              className="underline cursor-pointer text-blue-400"
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
