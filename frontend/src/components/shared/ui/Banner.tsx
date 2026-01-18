import React from "react";
import { Carousel } from "antd";

const Banner: React.FC = () => {
  return (
    <section className="h-screen overflow-hidden mt-16" >
      <Carousel autoplay pauseOnHover={false} className="h-full">
        {/* Slide 1 */}
        <div className="w-screen h-screen">
          <img
            src="https://plus.unsplash.com/premium_photo-1682092585257-58d1c813d9b4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Banner 1"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Slide 2 */}
        <div className="w-screen h-screen">
          <img
            src="https://images.unsplash.com/photo-1535090467336-9501f96eef89?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Banner 2"
            className="w-full h-full object-cover"
          />
        </div>
      </Carousel>
    </section>
  );
};

export default Banner;
