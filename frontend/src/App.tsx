import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Approutes } from "./routes";
import { GlobalStyle } from "./styles/globalStyles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./context/authContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <GlobalStyle />
        <Approutes />
        <ToastContainer />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
