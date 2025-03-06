import { FaceBook, Instagram, Logo, Twitter } from "../../Ui/Svg/MySvg";

const Footer = () => {
  const links = [
    {
      name: "Recipes",
      url: "",
    },
    {
      name: "Blog",
      url: "",
    },
    {
      name: "Contact",
      url: "",
    },
    {
      name: "About us",
      url: "",
    },
  ];
  const socialIcons = [
    {
      logo: <FaceBook />,
      url: "",
    },
    {
      logo: <Instagram />,
      url: "",
    },
    {
      logo: <Twitter />,
      url: "",
    },
  ];
  return (
    <div className="flex flex-col mt-40 mx-auto w-[1280px] h-48">
      <div className="flex justify-between items-center ">
        <Logo />
        <div className="flex gap-15 font-medium">
          {links.map((item) => {
            return <div>{item.name}</div>;
          })}
        </div>
      </div>
      <div className="w-full h-[1px] bg-black/10 my-12"></div>
      <div className="flex justify-between items-center">
        <div></div>
        <div>© 2020 Flowbase. Powered by Webflow</div>
        <div className="flex gap-10">
          {socialIcons.map((item) => {
            return <div>{item.logo}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
