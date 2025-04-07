import { useEffect, useState } from "react";
import FoodItemCard from "../../Ui/Card/FoodItemCard";
import { FoodItemsCardType } from "../../Types/FoodItems.types";

const FoodItems = () => {
  const [recipeList, setRecipeList] = useState<FoodItemsCardType[]>([]); //1st [] type che and array hase 2nd [] is empty.
  useEffect(() => {
    setRecipeList([
      {
        imgsrc: "./f1.png",
        name: "Big and Juicy Wagyu Beef Cheeseburger",
        time: "30 min",
        category: "Snack",
        bgcolor: "bg-[#E7F9FD]",
      },
      {
        imgsrc: "./f2.png",
        name: "Fresh Lime Roasted Salmon with Ginger Sauce",
        time: "30 Minutes",
        category: "Fish",
        bgcolor: "bg-[#E7F9FD]",
      },
      {
        imgsrc: "./f3.png",
        name: "Strawberry Oatmeal Pancake with Honey Syrup",
        time: "30 Minutes",
        category: "BreakFast",
        bgcolor: "bg-[#E7F9FD]",
      },
      {
        imgsrc: "./f4.png",
        name: "Fresh and Healthy Mixed Mayonnaise Salad",
        time: "30 Minutes",
        category: "Snack",
        bgcolor: "bg-[#E7F9FD]",
      },
      {
        imgsrc: "./f5.png",
        name: "Chicken Meatballs with Cream Cheese",
        time: "30 Minutes",
        category: "snack",
        bgcolor: "bg-[#E7F9FD]",
      },
      {
        imgsrc: "./f6.png",
        name: "Fruity Pancake with Orange & Blueberry",
        time: "30 Minutes",
        category: "Sweet",
        bgcolor: "bg-[#E7F9FD]",
      },
      {
        imgsrc: "./f7.png",
        name: "The Best Easy One Pot Chicken and Rice",
        time: "30 Minutes",
        category: "Snack",
        bgcolor: "bg-[#E7F9FD]",
      },
      {
        imgsrc: "./f8.png",
        name: "The Creamiest Creamy Chicken and Bacon Pasta",
        time: "30 Minutes",
        category: "Noodles",
        bgcolor: "bg-[#E7F9FD]",
      },
    ]);
  });
  return (
    <div className="flex flex-col  gap-6 mt-42  mx-auto justify-center items-center">
      <div className="font-semibold text-5xl">Simple and tasty recipes</div>
      <div className="w-176 text-center mt-4">
        Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqut enim ad minimum
      </div>
      <div className="grid grid-cols-3 gap-10 mt-24">
        {recipeList.map((item) => {
          return (
            <FoodItemCard
              imgsrc={item.imgsrc}
              name={item.name}
              time={item.time}
              category={item.category}
              bgcolor={item.bgcolor}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FoodItems;
