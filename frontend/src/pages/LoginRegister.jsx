import React from "react";
import lock_icon from "../assets/lock_icon.svg";
import mail_icon from "../assets/mail_icon.svg";
import person_icon from "../assets/person_icon.svg";

function LoginRegister() {
  return (
    <div className="flex items-center justify-center min-h-screen  bg-gradient-to-br from-blue-300 to-green-300 px-6 sm:px-0">
      <div className="w-full sm:w-100 p-10 text-indigo-300 rounded-lg shadow-lg bg-slate-900">
        <img
          className="w-12 mx-auto mb-3 sm:w-15"
          src="favicon.svg"
          alt="Logo"
        />
        <h1 className="mb-3 text-3xl font-semibold text-center text-white">
          Login
        </h1>
        <p className="mb-4 text-center">Create your account</p>
        <form>
          <div className="flex bg-slate-700 rounded-full gap-3 mb-4 px-5 py-2.5 w-full">
            <img src={person_icon} alt="person icon" />
            <input
              className="w-full bg-transparent outline-none"
              type="text"
              placeholder="Full Name"
              required
            />
          </div>
          <div className="flex bg-slate-700 rounded-full gap-3 mb-4 px-5 py-2.5 w-full">
            <img src={mail_icon} alt="mail icon" />
            <input
              className="w-full bg-transparent outline-none"
              type="email"
              placeholder="Email Address"
              required
            />
          </div>
          <div className="flex bg-slate-700 rounded-full gap-3 mb-4 px-5 py-2.5 w-full">
            <img src={lock_icon} alt="person icon" />
            <input
              className="w-full bg-transparent outline-none"
              type="password"
              placeholder="Password"
              required
            />
          </div>
        </form>
        <p className="cursor-pointer">Forgot Password?</p>
        <button>Sign Up</button>
        <p>
          Already have an account?{" "}
          <span className="underline cursor-pointer">Login here</span>
        </p>
      </div>
    </div>
  );
}

export default LoginRegister;
