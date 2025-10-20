import logo from "../assets/logo.svg";
import arrowIcon from "../assets/arrow_icon.svg";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function NavBar() {
  const navigate = useNavigate();
  const { userData } = useContext(AppContext);
  return (
    <div className="absolute top-0 flex items-center justify-between w-full p-4 sm:p-6">
      <img src={logo} alt="Logo" className="w-28 sm:w-32" />
      {userData ? (
        <div className="bg-blue-600 rounded-full w-8 h-8 flex justify-center items-center text-white sm:w-9 sm:h-9">
          {userData.name[0].toUpperCase()}
        </div>
      ) : (
        <button
          onClick={() => navigate("/login")}
          className="flex items-center gap-2 px-6 py-2 border border-blue-600 rounded-full cursor-pointer hover:bg-blue-200 transition-all"
        >
          Login
          <img src={arrowIcon} alt="arrowIcon" />
        </button>
      )}
    </div>
  );
}

export default NavBar;
