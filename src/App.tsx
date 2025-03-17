import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import HomePage from "./Pages/HomePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Recipe from "./Pages/Recipe/Recipe";
import ContactPaage from "./Pages/ContactPage/ContactPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/contact" element={<ContactPaage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
