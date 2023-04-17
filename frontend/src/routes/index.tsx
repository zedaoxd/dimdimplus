import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages";
import { Footer, Navbar } from "../components";

export const Approutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
