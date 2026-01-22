import React from "react";
import { Carousel } from "antd";

export interface BannerProps {
  text?: string;
}

const Banner: React.FC<BannerProps> = ({ text }) => {
  return (
    <section className="relative w-full min-h-screen h-[100svh] overflow-hidden">

      {/* Overlay */}
      {text && (
        <>
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <div className="absolute inset-0 flex items-center justify-center z-20 px-4 text-center">
            <h1 className="
              text-white font-extrabold drop-shadow-2xl
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl
            ">
              {text}
            </h1>
          </div>
        </>
      )}

      {/* Carousel must be full height */}
      <Carousel
        autoplay
        pauseOnHover={false}
        className="h-full"
      >
        {[
          "https://plus.unsplash.com/premium_photo-1682092585257-58d1c813d9b4?q=80&w=1170&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1535090467336-9501f96eef89?q=80&w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&auto=format&fit=crop&q=60",
          "https://upload.wikimedia.org/wikipedia/commons/c/c6/WMAS_Ambulance.jpg",
          "https://images.unsplash.com/photo-1609139003551-ee40f5f73ec0?w=600&auto=format&fit=crop&q=60",
        ].map((src, i) => (
          <div key={i} className="w-screen h-[100svh]">
            <img
              src={src}
              alt={`Banner ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Banner;
