import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AppContext } from "../context/AppContext";

function ProfileMenu({ setIsMenuOpen }) {
  const { userData, backendUrl, setIsLoggedIn, setUserData } =
    useContext(AppContext);

  const navigate = useNavigate();

  //user logout
  const handleLogout = async () => {
    try {
      const { data } = await axios.post(`${backendUrl}/api/auth/logout`);
      if (data.success) {
        setIsLoggedIn(false);
        setUserData(null);
        navigate("/");
      }
    } catch (error) {
      toast.error("Something went wrong, Please try again later");
      console.error(error);
    } finally {
      setIsMenuOpen(false);
    }
  };

  //send verification OTP
  const sendVerificationOtp = async () => {
    try {
      const { data } = await axios.post(
        `${backendUrl}/api/auth/send-verify-otp`
      );
      if (data.success) {
        toast.success(data.message);
        navigate("/email-verify");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Something went wrong, Please try again later"
      );
      console.error(error);
    } finally {
      setIsMenuOpen(false);
    }
  };
  return (
    <div className="absolute transition-all text-black top-0 right-0 z-10 pt-10">
      <ul className="list-none p-2 bg-gray-100 rounded">
        {userData.isAccountVerified === false && (
          <li
            onClick={sendVerificationOtp}
            className="py-1 px-2 hover:bg-gray-200 cursor-pointer rounded"
          >
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
  );
}

export default ProfileMenu;
