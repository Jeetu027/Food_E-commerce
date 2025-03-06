import Categories from "./Components/Categories/Categories";
import FoodItems from "./Components/FoodItems/FoodItems";
import NavBar from "./Components/NavBar/NavBar";
import Slider from "./Components/Slider/Slider";

const App = () => {
  return (
    <div>
      <NavBar />
      <Slider />
      <Categories />
      <FoodItems />
    </div>
  );
};

export default App;
