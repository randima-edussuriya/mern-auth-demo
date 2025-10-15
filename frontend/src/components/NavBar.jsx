import logo from "../assets/logo.svg";
import arrowIcon from "../assets/arrow_icon.svg";

function NavBar() {
  return (
    <div className="absolute top-0 flex items-center justify-between w-full p-4 sm:p-6">
      <img src={logo} alt="Logo" className="cursor-pointer w-28 sm:w-32" />
      <button className="flex items-center gap-2 px-6 py-2 transition-all border border-blue-600 rounded-full cursor-pointer hover:bg-blue-200">
        Login
        <img src={arrowIcon} alt="arrowIcon" />
      </button>
    </div>
  );
}

export default NavBar;
