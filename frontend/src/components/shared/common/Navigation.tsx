import type { AboutProps } from "../../pages/About";

function Navigation({ data }: AboutProps) {
  const navItems = [
    "OUR STORY",
    "VISION",
    "MISSION",
    "HOW WE WORK",
    "WHY TRUST US?",
  ];

  return (
    <>
      <div className="w-full grid grid-cols-5 mb-8 bg-yellow-300">
        {navItems.map((item) => (
          <div
            key={item}
            className={`${item === data.point ? "bg-green-400" : ""}  md:text-base text-xs md:p-6 p-2 flex items-center justify-center w-full`}
          >
            <h3>{item}</h3>
          </div>
        ))}
        {/* <div className="">
          <h3>OUR STORY</h3>
        </div>
        <div className="">
          <h3>VISION</h3>
        </div>
        <div className="">
          <h3>MISSION</h3>
        </div>
        <div className="">
          <h3>HOW WE WORK</h3>
        </div>
        <div className="">
          <h3>WHY TRUST US?</h3>
        </div> */}
      </div>
    </>
  );
}

export default Navigation;
