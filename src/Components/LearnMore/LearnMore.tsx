import RoundedButton from "../../Ui/RoundedButton/RoundedButton";

const LearnMore = () => {
  return (
    <div className="flex mx-auto mt-35 w-[1280px] h-[600px] justify-center items-center">
      <div className="flex flex-col max-w-[570px]">
        <div className="font-semibold text-5xl">
          Everyone can be a chef in their own kitchen
        </div>
        <div className="mt-6">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minimum
        </div>
        <RoundedButton
          name="Learn More"
          className="flex justify-center items-center rounded-[15px] bg-black text-white mt-18 w-45 h-15"
        />
      </div>
      <div>
        <img src="./learnmoreimg.png" alt="" />
      </div>
    </div>
  );
};

export default LearnMore;
