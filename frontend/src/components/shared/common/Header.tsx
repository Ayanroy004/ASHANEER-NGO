import { Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

const items = [
  { key: "/", label: "Home" },
  { key: "/about", label: "ABOUT US" },
  { key: "/services", label: "SERVICES" },
  { key: "/contact-us", label: "CONTACT US" },
];

export default function AppHeader() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="shadow-xl px-6 h-16 fixed top-0 left-0 right-0 bg-white z-50 ">
      <div className="flex items-center justify-around h-full">
        <div
          className="text-xl font-bold mr-10 cursor-pointer"
          onClick={() => navigate("/")}
        >
          NGO LOGO
        </div>

        <Menu
          mode="horizontal"
          selectedKeys={[location.pathname]}
          items={items}
          onClick={(e) => navigate(e.key)}
          className="border-b-0 font-medium"
          style={{ backgroundColor: "transparent" }}
        />
      </div>
    </header>
  );
}
