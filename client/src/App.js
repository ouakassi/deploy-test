import { BrowserRouter } from "react-router-dom";

import "./styles/Globals.css";
import "./styles/Layout.css";
import "./styles/buttons.css";
import "./styles/Base.css";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import ScrollUpComponent from "./components/ScrollUpComponent";

import ScrollToTop from "./hooks/useScrollToTop";
import Routes from "./pages/Routes";
import ContactIcon from "./components/contact/ContactIcon";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes />
        <Footer />
        <ContactIcon />
      </BrowserRouter>
      <ScrollUpComponent />
    </>
  );
};

export default App;
