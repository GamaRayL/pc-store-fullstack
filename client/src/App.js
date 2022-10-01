import { BrowserRouter } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material";
import { NavBar, AppRouter } from "./components";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
        <NavBar />
        <AppRouter />
      </BrowserRouter>
    </StyledEngineProvider>
  );
}

export default App;
