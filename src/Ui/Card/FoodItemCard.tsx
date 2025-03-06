import { FoodItemsCardType } from "../../Types/FoodItems.types";
import { ForkKnife, Like, Timer } from "../Svg/MySvg";

const FoodItemCard = (props: FoodItemsCardType) => {
  return (
    <div>
      <div
        className={`flex flex-col ${props.bgcolor} rounded-[20px] w-100 p-4`}
      >
        <div className="max-h-62 relative">
          <img
            className=" max-h-62 w-full rounded-[20px] object-cover relative"
            src={props.imgsrc}
            alt=""
          />
          <div className="absolute top-5 right-5 w-12 h-12 rounded-[24px] bg-white  flex justify-center items-center">
            <Like />
          </div>
        </div>

        <div className="font-semibold text-2xl mt-6">{props.name}</div>
        <div className="flex w-fit mt-6 gap-1 text-black/60 justify-center items-center">
          <Timer />
          <div className="mr-6">{props.time}</div>
          <ForkKnife />
          <div>{props.category}</div>
        </div>
      </div>
    </div>
  );
};

export default FoodItemCard;
