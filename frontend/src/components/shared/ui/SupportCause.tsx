import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface SupportCause {
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
}

const causes: SupportCause[] = [
  {
    title: "A HOME FOR\nOUR ELDERS",
    description:
      "Every senior deserves warmth, respect, and care. Help us create safe havens where their golden years shine with dignity and love.",
    imageUrl: "/images/old_age_home.jpg",
    linkUrl: "#",
  },
  {
    title: "BRIGHTER\nFUTURES FOR KIDS",
    description:
      "Unlock the power of education and dreams for children in need. Together, we can nurture talents and open doors to endless possibilities.",
    imageUrl: "/images/learning_kids.jpg",
    linkUrl: "#",
  },
  {
    title: "A PLATE\nFULL OF HOPE",
    description:
      "No one should face the pangs of hunger. Join us in delivering nutritious meals that nourish bodies and fuel spirits.",
    imageUrl: "/images/food_donation.jpg",
    linkUrl: "#",
  },
  {
    title: "HEALING\nHANDS AND HEARTS",
    description:
      "Access to healthcare is a right, not a privilege. Stand with us to bring vital medical support where it’s needed the most.",
    imageUrl: "/images/medical_support.jpg",
    linkUrl: "#",
  },
  {
    title: "PLANTING\nSEEDS OF TOMORROW",
    description:
      "Together, we can restore the earth — one tree at a time. Help us build greener communities for generations to come.",
    imageUrl: "/images/tree_plantation.jpg",
    linkUrl: "#",
  },
  {
    title: "HOPE IN\nCRISIS MOMENTS",
    description:
      "When disaster strikes, every second counts. Support our emergency care efforts to bring swift relief and restore lives.",
    imageUrl: "/images/emergency_care.jpg",
    linkUrl: "#",
  },
];

function SupportCauseCard({ cause }: { cause: SupportCause }) {
  return (
    <div
      className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white flex flex-col
      transform transition-transform duration-300 ease-in-out hover:-translate-y-3 hover:shadow-2xl"
      style={{ margin: "0 auto" }}
    >
      <div
        className="relative h-64 rounded-t-lg bg-cover bg-center flex items-end p-6 overflow-hidden group"
        style={{ backgroundImage: `url(${cause.imageUrl})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-40 rounded-t-lg transition-opacity duration-300 ease-in-out group-hover:opacity-60"></div>

        {/* Title */}
        <div className="relative transform transition-transform duration-300 ease-in-out group-hover:scale-105">
          <h3 className="text-white text-2xl font-extrabold whitespace-pre-line leading-snug">
            {cause.title}
          </h3>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <p className="text-gray-700 flex-grow">{cause.description}</p>
        <a
          href={cause.linkUrl}
          className="mt-4 text-green-600 font-semibold hover:underline hover:text-green-800 transition-colors duration-300 ease-in-out"
        >
          know more &gt;
        </a>
      </div>
    </div>
  );
}

export default function SupportCauseSection() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4, // show 4 cards on desktop
      slidesToSlide: 1, // slide 1 card at a time
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
    <section className="py-16 bg-white max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-extrabold text-center mb-12 uppercase">
        SUPPORT A CAUSE
      </h2>

      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3500}
        keyBoardControl={true}
        showDots={false}
        containerClass="carousel-container"
        itemClass="px-4"
        draggable={true}
      >
        {causes.map((cause, index) => (
          <SupportCauseCard key={index} cause={cause} />
        ))}
      </Carousel>
    </section>
  );
}
