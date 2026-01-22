import { FaGraduationCap } from "react-icons/fa";
import { GiHeartPlus, GiShinyApple } from "react-icons/gi";
import { IoMedicalOutline } from "react-icons/io5";
import { LuHousePlus, LuTreePine } from "react-icons/lu";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Old Age Home",
    desc: "Providing care, comfort, and dignity to elderly people.",
    icon: <LuHousePlus />,
    color: "bg-red-100 text-red-500",
    link: "/old-age-home",
  },
  {
    title: "Learning of Kids",
    desc: "Empowering children through quality education.",
    icon: <FaGraduationCap />,
    color: "bg-blue-100 text-blue-500",
    link: "/learning-kids",
  },
  {
    title: "Food Distribution",
    desc: "Providing nutritious food to needy communities.",
    icon: <GiShinyApple />,
    color: "bg-orange-100 text-orange-500",
    link: "/food-dist",
  },
  {
    title: "Medical Support",
    desc: "Healthcare services for rural and underserved areas.",
    icon: <GiHeartPlus />,
    color: "bg-green-100 text-green-500",
    link: "/medical-support",
  },
  {
    title: "Tree Plantation",
    desc: "Building a greener future through plantation drives.",
    icon: <LuTreePine />,
    color: "bg-emerald-100 text-emerald-500",
    link: "/tree-plant",
  },
  {
    title: "Emergency Care",
    desc: "Quick medical response during emergencies.",
    icon: <IoMedicalOutline />,
    color: "bg-yellow-100 text-yellow-500",
    link: "/service6",
  },
];

function Services() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">
        Our Services
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Link key={index} to={service.link}>
            <div className="group h-full rounded-2xl border bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              {/* Icon */}
              <div
                className={`mb-4 flex h-16 w-16 items-center justify-center rounded-full text-3xl ${service.color}`}
              >
                {service.icon}
              </div>

              {/* Text */}
              <h3 className="mb-2 text-xl font-semibold text-gray-800 group-hover:text-primary">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.desc}</p>

              {/* Accent line */}
              <div className="mt-4 h-1 w-12 rounded bg-linear-to-r from-primary to-transparent opacity-0 transition group-hover:opacity-100" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Services;
