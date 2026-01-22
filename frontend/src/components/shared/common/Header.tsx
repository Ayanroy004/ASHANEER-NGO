import { Menu, Drawer } from "antd";
import { AiOutlineDown, AiOutlineMenu } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "./Button";
import LogoImage from "../../../../public/logo.png";

const items = [
  { key: "/", label: "Home" },
  { key: "/about", label: "ABOUT US" },
  {
    key: "/services",
    label: (
      <div className="flex items-center justify-between">
        SERVICES{" "}
        <span className="text-xs ps-1 lg:inline-block md:hidden">
          <AiOutlineDown />
        </span>
      </div>
    ),
    children: [
      { key: "/old-age-home", label: "Old Age Home" },
      { key: "/learning-kids", label: "Learning of kids" },
      { key: "/food-dist", label: "Food distribution to needy" },
      { key: "/medical-support", label: "Medical support to rural areas" },
      { key: "/tree-plant", label: "Tree plantation" },
      { key: "/service6", label: "Services 6" },
    ],
  },
  { key: "/contact-us", label: "CONTACT US" },
];

export default function AppHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const handleNavigate = (path: string) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <div className="mb-30">
      <header className="px-6 h-30 fixed top-0 left-0 right-0 z-50 bg-white/50 backdrop-blur-md shadow-xl">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div
            className="text-xl font-bold cursor-pointer flex items-center"
            onClick={() => navigate("/")}
          >
            <img src={LogoImage} alt="Logo" className="h-30 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <Menu
              mode="horizontal"
              selectedKeys={[location.pathname]}
              items={items}
              onClick={(e) => navigate(e.key)}
              className="border-b-0 font-medium"
              style={{ backgroundColor: "transparent" }}
            />
          </div>

          {/* Desktop Button */}
          <div className="hidden lg:block">
            <Button
              data={{ text: "Donate Now", css: "btn" }}
              onClick={() => navigate("/contact-us")}
            />
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden text-2xl cursor-pointer">
            <AiOutlineMenu onClick={() => setOpen(true)} />
          </div>
        </div>
      </header>

      {/* Mobile / Tablet Drawer */}
      <Drawer
        placement="right"
        open={open}
        onClose={() => setOpen(false)}
        bodyStyle={{ padding: 0 }}
      >
        <Menu
          mode="inline"
          selectedKeys={[location.pathname]}
          items={items}
          onClick={(e) => handleNavigate(e.key)}
        />
        <div className="p-4">
          <Button
            data={{ text: "Donate Now", css: "btn w-full" }}
            onClick={() => handleNavigate("/contact-us")}
          />
        </div>
      </Drawer>
    </div>
  );
}
