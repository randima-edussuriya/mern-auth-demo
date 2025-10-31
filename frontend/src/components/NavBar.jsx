import logo from "../assets/logo.svg";
import arrowIcon from "../assets/arrow_icon.svg";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../context/AppContext";
import ProfileMenu from "./ProfileMenu";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const { userData } = useContext(AppContext);

  const navigate = useNavigate();

  useEffect(() => {
    //close menu on outside click
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    //cleanup event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="absolute top-0 flex items-center justify-between w-full p-4 sm:p-6">
      <img src={logo} alt="Logo" className="w-28 sm:w-32" />
      {userData ? (
        <div
          ref={menuRef}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="relative bg-blue-600 text-white rounded-full flex justify-center items-center w-8 h-8 sm:w-9 sm:h-9 cursor-pointer"
        >
          {userData.name[0].toUpperCase()}
          {isMenuOpen && <ProfileMenu setIsMenuOpen={setIsMenuOpen} />}
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
