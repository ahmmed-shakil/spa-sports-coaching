import logo from "./logo.svg";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material";
import Header from "./Header/Header";
import Slider from "./Slider/Slider";
import Form from "./Form/Form";
import FormContainer from "./FormContainer/FormContainer";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F6C505",
    },
    secondary: {
      main: "#11cb5f",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial",
  },
});

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <FormContainer />
    </div>
  );
}

export default App;
