import RoundedButton from "../../Ui/RoundedButton/RoundedButton";

const Inbox = () => {
  return (
    <div className=" flex flex-col justify-center items-center w-[1280px] h-[442px] bg-[url('/inbox.png')] mt-40 mx-auto  ">
      <div className="font-semibold text-5xl">Deliciousness to your inbox</div>
      <div className="w-145 mt-6 text-center">
        Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqut enim ad minimum
      </div>
      <div className="flex items-center mt-16 bg-white w-120 h-20 rounded-3xl p-2">
        <input
          className="ml-4 grow"
          type="text"
          placeholder="Your email address..."
        />
        <RoundedButton
          name="Subscribe"
          className="bg-black text-white text-[14px] rounded-[16px] p-5 w-40 h-15"
        />
      </div>
    </div>
  );
};

export default Inbox;
