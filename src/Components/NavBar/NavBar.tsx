import { Link } from "react-router-dom";
import { FaceBook, Instagram, Logo, Twitter } from "../../Ui/Svg/MySvg";

const NavBar = () => {
  const navItems = [
    {
      name: "Home",
      url: "",
    },
    {
      name: "Recipe",
      url: "recipe",
    },
    {
      name: "Blog",
      url: "",
    },
    {
      name: "Contact",
      url: "contact",
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
    <div className="sticky top-0 z-1000 flex justify-between items-center p-10 mx-10 border-b border-black/10 bg-white">
      <div>
        <Logo />
      </div>
      <div className="flex gap-15">
        {navItems.map((item) => {
          return (
            <Link to={item.url} className="font-medium text-[16px]">
              {item.name}
            </Link>
          );
        })}
      </div>
      <div className="flex gap-10">
        {socialIcons.map((item) => {
          return <div>{item.logo}</div>;
        })}
      </div>
    </div>
  );
};

export default NavBar;
