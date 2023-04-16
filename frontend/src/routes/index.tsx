import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages";
import { Navbar } from "../components";

export const Approutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
