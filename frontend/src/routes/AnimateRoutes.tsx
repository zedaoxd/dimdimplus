import { Route, Routes, useLocation } from "react-router-dom";
import { Auth, Home, Login, Sigup } from "../pages";
import { AnimatePresence } from "framer-motion";

export const AnimateRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />

        <Route path="/auth" element={<Auth />}>
          <Route path="" element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Sigup />} />
          {/* <Route path="forgot-password" element={<ForgotPassword />} /> */}
        </Route>
      </Routes>
    </AnimatePresence>
  );
};
