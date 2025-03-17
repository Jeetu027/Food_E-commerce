import CookProfile from "../../Ui/Profile/CookProfile";
import { ForkKnife, Printer, Share, Timer } from "../../Ui/Svg/MySvg";

const RecipeInfo = () => {
  return (
    <div className="w-[1280px] mx-auto mt-20">
      <div className="flex justify-between items-end">
        <div className="flex flex-col ">
          <div className="font-semibold text-[64px]">
            Health Japanese Fried Rice
          </div>
          <div className="flex gap-8 justify-center items-center mt-12">
            <CookProfile
              img="/public/profile.jpg"
              name="Jeet Barbhaya"
              date="1 jan 2026"
            />
            <div className="w-[1px] h-full bg-black/10"></div>
            <CookProfile
              className="font-medium text-[12px]"
              img={<Timer />}
              date="1 jan 2025"
              name="PREP TIME"
            />
            <div className="w-[1px] h-full bg-black/10"></div>
            <CookProfile
              className="font-medium text-[12px]"
              img={<Timer />}
              date="11 jan 2025"
              name="COOK TIME"
            />
            <div className="w-[1px] h-full bg-black/10"></div>
            <CookProfile
              name="Chicken"
              img={<ForkKnife />}
              className="font-medium text-[12px] text-black/60"
            />
          </div>
        </div>
        <div className="flex gap-8">
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="bg-[#E7FAFE] w-20 h-20 flex justify-center items-center rounded-[40px]">
              <Printer />
            </div>
            <div>Print</div>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="bg-[#E7FAFE] w-20 h-20 flex justify-center items-center rounded-[40px]">
              <Share />
            </div>
            <div>Share</div>
          </div>
        </div>
      </div>
      <div className="flex gap-10 mt-16">
        <img className="w-[840px] h-[600px]" src="/recipeimg.png" alt="" />

        <div className="flex flex-col bg-[#E7FAFE] rounded-4xl w-full p-8 justify-between  ">
          <div className="flex flex-col ">
            <div className="font-semibold text-2xl mb-6">
              Nutrition Information
            </div>
            <div className="flex justify-between  border-b border-black/10 py-4">
              <div className="font-medium text-[18px] text-black/60">
                Calories
              </div>
              <div className="font-medium text-[18px]">219kcal</div>
            </div>
            <div className="flex justify-between  border-b border-black/10 py-4">
              <div className="font-medium text-[18px] text-black/60">
                Calories
              </div>
              <div className="font-medium text-[18px]">219kcal</div>
            </div>
            <div className="flex justify-between  border-b border-black/10 py-4">
              <div className="font-medium text-[18px] text-black/60">
                Calories
              </div>
              <div className="font-medium text-[18px]">219kcal</div>
            </div>
            <div className="flex justify-between  border-b border-black/10 py-4">
              <div className="font-medium text-[18px] text-black/60">
                Calories
              </div>
              <div className="font-medium text-[18px]">219kcal</div>
            </div>
            <div className="flex justify-between  border-b border-black/10 py-4">
              <div className="font-medium text-[18px] text-black/60">
                Calories
              </div>
              <div className="font-medium text-[18px]">219kcal</div>
            </div>
          </div>
          <div className="text-center text-black/60">
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.{" "}
          </div>
        </div>
      </div>
      <div className="my-20 text-black/60">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
    </div>
  );
};

export default RecipeInfo;
