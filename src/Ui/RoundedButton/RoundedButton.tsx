import React, { ReactElement } from "react";

const RoundedButton = (props: {
  img: string | ReactElement;
  name: string;
  className: string;
}) => {
  return (
    <div
      className={` inline-flex ${props.className} justify-center items-center p-3 px-5 gap-3 rounded-4xl`}
    >
      <div>
        {typeof props.img === "string" ? (
          <img src={props.img} alt="" />
        ) : (
          props.img
        )}
      </div>
      <div className="font-semibold text-sm">{props.name}</div>
    </div>
  );
};

export default RoundedButton;
