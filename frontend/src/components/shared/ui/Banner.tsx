import React from "react";
import { Carousel } from "antd";

export interface BannerProps {
  text?: string;
}

const Banner: React.FC<BannerProps> = ({ text }) => {
  return (
    <section className="h-screen overflow-hidden mt-16 relative">
      {text && (
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center left z-5 ">
          <h1 className="text-white text-6xl font-extrabold drop-shadow-2xl drop-shadow-black">
            {text}
          </h1>
        </div>
      )}

      <Carousel autoplay pauseOnHover={false} className="h-full">
        <div className="w-screen h-screen">
          <img
            src="https://plus.unsplash.com/premium_photo-1682092585257-58d1c813d9b4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Banner 1"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-screen h-screen">
          <img
            src="https://images.unsplash.com/photo-1535090467336-9501f96eef89?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Banner 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-screen h-screen">
          <img
            src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVkaWNhbCUyMGNhcmV8ZW58MHx8MHx8fDA%3D"
            alt="Banner 3"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-screen h-screen">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/c6/WMAS_Ambulance.jpg"
            alt="Banner 3"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-screen h-screen">
          <img
            src="https://images.unsplash.com/photo-1609139003551-ee40f5f73ec0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZCUyMGRpc3RyaWJ1dGlvbnxlbnwwfHwwfHx8MA%3D%3D"
            alt="Banner 3"
            className="w-full h-full object-cover"
          />
        </div>
      </Carousel>
    </section>
  );
};

export default Banner;
