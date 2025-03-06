import Categories from "./Components/Categories/Categories";
import FoodItems from "./Components/FoodItems/FoodItems";
import Footer from "./Components/Footer/Footer";
import Inbox from "./Components/Inbox/Inbox";
import LearnMore from "./Components/LearnMore/LearnMore";
import NavBar from "./Components/NavBar/NavBar";
import Slider from "./Components/Slider/Slider";

const App = () => {
  return (
    <div>
      <NavBar />
      <Slider />
      <Categories />
      <FoodItems />
      <LearnMore />
      <Inbox />
      <Footer />
    </div>
  );
};

export default App;
