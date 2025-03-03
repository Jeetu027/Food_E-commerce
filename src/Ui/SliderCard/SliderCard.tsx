import RoundedButton from "../RoundedButton/RoundedButton";
import Timer from "../../assets/Timer.svg";
import { FaceBook } from "../Svg/MySvg";

const SliderCard = () => {
  return (
    <div className="flex w-[1280px] h-[640px] rounded-[60px] overflow-hidden ">
      <div className="flex flex-col w-full bg-[#E7FAFE] p-[50px]">
        <div>
          <RoundedButton
            img="/public/btn1.png"
            name="Hot Recipes"
            className="bg-white"
          />
          <div className="font-semibold text-[64px] mt-8">
            Spicy delicious chicken wings
          </div>
          <div className="mt-6">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim
          </div>
          <div className="flex gap-4 mt-8">
            <RoundedButton
              img={<FaceBook />}
              name="30 Minutes"
              className="bg-black/5"
            />
            <RoundedButton
              img="/public/forkknife.svg"
              name="Hot Recipes"
              className="bg-black/5 "
            />
          </div>
        </div>
        <div></div>
      </div>
      <div className="w-full">
        <img
          className="object-cover h-full w-full "
          src="/public/sliderright.png"
          alt="img"
        />
      </div>
    </div>
  );
};

export default SliderCard;
