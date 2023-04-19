import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Approutes } from "./routes";
import { GlobalStyle } from "./styles/globalStyles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Approutes />
      <ToastContainer />
    </QueryClientProvider>
  );
}

export default App;
