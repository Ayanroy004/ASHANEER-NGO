import { Carousel } from "antd";

export interface VideoCarouselProps {
  videos: string[];
  title?: string;
  videosPerSlide?: number;
  autoplay?: boolean;
  showDots?: boolean;
  videoHeight?: number;
}

const VideoCarousel: React.FC<VideoCarouselProps> = ({
  videos,
  title = "Stories in Motion",
  videosPerSlide = 3,
  autoplay = true,
  showDots = true,
  videoHeight = 260,
}) => {
  // Group videos based on videosPerSlide
  const groupedVideos: string[][] = [];
  for (let i = 0; i < videos.length; i += videosPerSlide) {
    groupedVideos.push(videos.slice(i, i + videosPerSlide));
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {title && (
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            {title}
          </h2>
        )}

        <Carousel autoplay={autoplay} dots={showDots}>
          {groupedVideos.map((group, index) => (
            <div key={index}>
              <div
                className="grid gap-6 px-4"
                style={{
                  gridTemplateColumns: `repeat(${group.length}, minmax(0, 1fr))`,
                }}
              >
                {group.map((video, i) => (
                  <div
                    key={i}
                    className="bg-black rounded-xl overflow-hidden shadow-lg"
                    style={{ height: videoHeight }}
                  >
                    <video
                      src={video}
                      controls
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default VideoCarousel;
