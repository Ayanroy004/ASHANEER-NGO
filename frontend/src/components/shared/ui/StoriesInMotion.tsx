import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function StoriesInMotion() {
  const videos = [
    "/videos/story1.mp4",
    "/videos/story2.mp4",
    "/videos/story3.mp4",
    "/videos/story4.mp4",
    "/videos/story5.mp4",
    "/videos/story6.mp4",
  ];

  // Responsive settings
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3, // show 3 videos at a time
      slidesToSlide: 1, // slide 1 video at a time
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          STORIES IN MOTION
        </h2>

        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          showDots={false}
          containerClass="carousel-container"
          itemClass="px-2"
        >
          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-black rounded-xl overflow-hidden shadow-lg"
              style={{ height: 260 }}
            >
              <video
                src={video}
                controls
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default StoriesInMotion;
