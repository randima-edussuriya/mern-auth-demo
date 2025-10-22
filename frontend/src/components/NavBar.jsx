import logo from "../assets/logo.svg";
import arrowIcon from "../assets/arrow_icon.svg";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

function NavBar() {
  const navigate = useNavigate();
  const { userData, backendUrl, setIsLoggedIn } = useContext(AppContext);

  //user logout
  const handleLogout = async () => {
    try {
      const { data } = await axios.post(`${backendUrl}/api/auth/logout`);
      if (data.success) {
        setIsLoggedIn(false);
        navigate("/login");
      }
    } catch (error) {
      toast.error("Something went wrong, Please try again later");
      console.error(error);
    }
  };

  return (
    <div className="absolute top-0 flex items-center justify-between w-full p-4 sm:p-6">
      <img src={logo} alt="Logo" className="w-28 sm:w-32" />
      {userData ? (
        <div className="bg-blue-600 text-white rounded-full flex justify-center items-center w-8 h-8 sm:w-9 sm:h-9 relative group">
          {userData.name[0].toUpperCase()}
          <div className="absolute hidden group-hover:block transition-all text-black top-0 right-0 z-10 pt-10">
            <ul className="list-none p-2 bg-gray-100 rounded">
              {userData && userData.isAccountVerified === false && (
                <li className="py-1 px-2 hover:bg-gray-200 cursor-pointer rounded">
                  Verify Email
                </li>
              )}
              <li
                onClick={handleLogout}
                className="py-1 px-2 hover:bg-gray-200 cursor-pointer rounded pr-11"
              >
                Logout
              </li>
            </ul>
          </div>
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
