import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EmailVerify from "./pages/EmailVerify";
import LoginRegister from "./pages/LoginRegister";
import ResetPassword from "./pages/ResetPassword";
import Test from "./pages/Test";
import ProtectedRoute from "./routes/ProtectedRoute";
import { AppContext } from "./context/AppContext";
import { useContext } from "react";

function App() {
  const { isLoggedIn, authChecked } = useContext(AppContext);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginRegister />} />
          <Route
            path="/email-verify"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn} authChecked={authChecked}>
                <EmailVerify />
              </ProtectedRoute>
            }
          />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
