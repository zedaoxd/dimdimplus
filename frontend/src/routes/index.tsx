import { BrowserRouter } from "react-router-dom";
import { Footer, Navbar } from "../components";
import { AnimateRoutes } from "./AnimateRoutes";

export const Approutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <AnimateRoutes />
      <Footer />
    </BrowserRouter>
  );
};
