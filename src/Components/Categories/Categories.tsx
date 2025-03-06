import React from "react";
import RoundedButton from "../../Ui/RoundedButton/RoundedButton";
import CategoryCard from "../../Ui/Card/CategoryCard";

const Categories = () => {
  const categoryItems = [
    {
      img: "./breakfast.png",
      name: "Breakfast",
      color: "bg-[#708246]/10",
    },
    {
      img: "./vegan.png",
      name: "Vegan",
      color: "bg-[#6CC63F]/10",
    },
    {
      img: "./meat.png",
      name: "Meat",
      color: "bg-[#CC261B]/10",
    },
    {
      img: "./desert.png",
      name: "Desert",
      color: "bg-[#F09E00]/10",
    },
    {
      img: "./lunch.png",
      name: "Lunch",
      color: "bg-black/5",
    },
    {
      img: "./chocolate.png",
      name: "Chocolate",
      color: "bg-black/5  ",
    },
  ];
  return (
    <div className="w-[1280px] mx-auto">
      <div className="flex  justify-between items-center mt-40">
        <div className="font-semibold text-5xl">Categories</div>
        <RoundedButton
          className="bg-[#E7FAFE] px-7 py-5 rounded-[16px]"
          name="View All Categories"
        />
      </div>

      <div className="flex justify-between mt-20">
        {categoryItems.map((item) => {
          return (
            <CategoryCard
              bgColor={item.color}
              name={item.name}
              imgsrc={item.img}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
