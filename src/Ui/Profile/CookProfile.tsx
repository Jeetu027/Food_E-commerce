import React from "react";
import { CookProfileType } from "../../Types/Profile.types";

const CookProfile = (props: CookProfileType) => {
  return (
    <div className="flex  ">
      <div>
        {props.img && (
          <div className="flex items-center justify-center h-[50px] w-[50px]">
            {typeof props.img === "string" ? (
              <img
                className="h-[50px] w-[50px] object-cover rounded-[25px]"
                src={props.img}
                alt=""
              />
            ) : (
              props.img
            )}
          </div>
        )}
      </div>
      <div className="ml-4 flex flex-col justify-center items-center">
        <span className={`font-bold text-4 ${props.className}`}>
          {props.name}
        </span>

        <div className="text-black/60 text-sm">{props.date}</div>
      </div>
    </div>
  );
};

export default CookProfile;
