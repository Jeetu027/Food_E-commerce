import React from "react";
import Slider from "../../Components/Slider/Slider";
import Categories from "../../Components/Categories/Categories";
import FoodItems from "../../Components/FoodItems/FoodItems";
import LearnMore from "../../Components/LearnMore/LearnMore";
import Inbox from "../../Components/Inbox/Inbox";

const HomePage = () => {
  return (
    <div>
      <Slider />
      <Categories />
      <FoodItems />
      <LearnMore />
      <Inbox />
    </div>
  );
};

export default HomePage;
