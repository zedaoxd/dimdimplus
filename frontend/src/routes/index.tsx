import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Auth, Home, Login } from "../pages";
import { Footer, Navbar } from "../components";

export const Approutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />}>
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
