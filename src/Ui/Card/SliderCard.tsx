import CookProfile from "../Profile/CookProfile";
import RoundedButton from "../RoundedButton/RoundedButton";
import { Timer } from "../Svg/MySvg";
import { ForkKnife } from "../Svg/MySvg";
import { PlayBtn } from "../Svg/MySvg";

const SliderCard = () => {
  return (
    <div className="flex w-[1280px] relative h-[640px] rounded-[60px] overflow-hidden ">
      <div className="flex flex-col h-full w-[50%] bg-[#E7FAFE] p-[50px]">
        <div className=" grow ">
          <RoundedButton
            img="/public/btn1.png"
            name="Hot Recipes"
            className="bg-white"
          />
          <div className="font-semibold text-[64px] mt-8 leading-20">
            Spicy delicious chicken wings
          </div>
          <div className="mt-6">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim
          </div>
          <div className="flex gap-4 mt-8">
            <RoundedButton
              img={<Timer />}
              name="30 Minutes"
              className="bg-black/5"
            />
            <RoundedButton
              img={<ForkKnife />}
              name="Hot Recipes"
              className="bg-black/5 "
            />
          </div>
        </div>
        <div className="flex ">
          <CookProfile
            img="/public/profile.jpg"
            name="Jeet Barbhaya"
            date="27 aug 2004"
          />
          <div>
            <RoundedButton
              img={<PlayBtn />}
              name="View Recipes"
              className="flex-row-reverse bg-black p-4 text-white rounded-[15px] ml-40"
            />
          </div>
        </div>
      </div>

      <div className="flex w-[50%]">
        <img
          className="object-cover h-full w-full "
          src="/public/sliderright.png"
          alt="img"
        />
      </div>
      <div className=" absolute left-[50%] top-[50px] translate-x-[-50%]">
        <img src="/public/Badge.png" alt="" />
      </div>
    </div>
  );
};

export default SliderCard;
