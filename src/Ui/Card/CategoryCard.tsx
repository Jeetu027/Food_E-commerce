import React from "react";
import { CategoryCardType } from "../../Types/Category.types";

const CategoryCard = (props: CategoryCardType) => {
  return (
    <div
      className={`flex flex-col w-45 h-50 justify-center items-center rounded-4xl gap-12 ${props.bgColor}`}
    >
      <img src={props.imgsrc} alt="img" />

      <div className="font-semibold text-lg">{props.name}</div>
    </div>
  );
};

export default CategoryCard;
