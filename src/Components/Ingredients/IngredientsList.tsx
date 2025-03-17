import React from "react";

const IngredientsList = () => {
  return (
    <div className="flex justify-between w-[1280px] my-20 mx-auto gap-10">
      <div className="flex flex-col w-[840px]">
        <div className="font-semibold text-4xl">Ingrediwnts</div>
        <div className="font-semibold text-2xl mt-12">For main dish</div>
        <div className="text-lg text-black/80 p-3 border-b border-black/20 mt-8">
          Lorem ipsum dolor sit amet
        </div>
        <div className="text-lg text-black/80 p-3 border-b border-black/20 mt-8">
          Lorem ipsum dolor sit amet
        </div>
        <div className="text-lg text-black/80 p-3 border-b border-black/20 mt-8">
          Lorem ipsum dolor sit amet
        </div>
        <div className="text-lg text-black/80 p-3 border-b border-black/20 mt-8">
          Lorem ipsum dolor sit amet
        </div>
        <div className="font-semibold text-2xl mt-12">For main dish</div>
        <div className="text-lg text-black/80 p-3 border-b border-black/20 mt-8">
          Lorem ipsum dolor sit amet
        </div>
        <div className="text-lg text-black/80 p-3 border-b border-black/20 mt-8">
          Lorem ipsum dolor sit amet
        </div>
        <div className="text-lg text-black/80 p-3 border-b border-black/20 mt-8">
          Lorem ipsum dolor sit amet
        </div>
        <div className="text-lg text-black/80 p-3 border-b border-black/20 mt-8">
          Lorem ipsum dolor sit amet
        </div>
      </div>
      <div className="flex flex-col gap-8 max-w-[400px]">
        <div className="font-semibold text-[32px]">Other Recipe</div>
        <div className="flex gap-6">
          <img src="/or-1.png" alt="img" />
          <div className="flex flex-col">
            <div className="font-semibold text-[20px] leading-7 -tracking-[4%]">
              Chicken Meatball with Creamy Chees...
            </div>
            <div className="text-black/60 text-[16px]">By Andreas Paula</div>
          </div>
        </div>
        <div className="flex gap-6">
          <img src="/or-2.png" alt="img" />
          <div className="flex flex-col">
            <div className="font-semibold text-[20px] leading-7 -tracking-[4%]">
              Chicken Meatball with Creamy Chees...
            </div>
            <div className="text-black/60 text-[16px]">By Andreas Paula</div>
          </div>
        </div>
        <div className="flex gap-6">
          <img src="/or-3.png" alt="img" />
          <div className="flex flex-col">
            <div className="font-semibold text-[20px] leading-7 -tracking-[4%]">
              Chicken Meatball with Creamy Chees...
            </div>
            <div className="text-black/60 text-[16px]">By Andreas Paula</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IngredientsList;
