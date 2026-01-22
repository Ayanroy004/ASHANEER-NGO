function Goals() {
  const services = [
    {
      title: "Good Health & Well Being",
      number: "3",
      icon: "❤️",
      gradient: "from-purple-300 to-purple-400",
    },
    {
      title: "Tree Plantation",
      number: "13",
      icon: "🌳",
      gradient: "from-green-300 to-green-400",
    },
    {
      title: "Food Donation",
      number: "2",
      icon: "🍲",
      gradient: "from-orange-300 to-orange-400",
    },
    {
      title: "Old Age Home",
      number: "1",
      icon: "👴",
      gradient: "from-indigo-300 to-indigo-400",
    },
    {
      title: "Learning Kids",
      number: "4",
      icon: "🎒",
      gradient: "from-sky-300 to-sky-400",
    },
    
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 text-center">
      <h3 className="text-3xl font-bold text-gray-800">OUR SERVICES</h3>
      <h2 className="text-4xl font-bold text-gray-800 mb-16">
        Making a Difference Together
      </h2>

      <div className="flex flex-wrap justify-center gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className={`w-48 h-52 bg-linear-to-br ${service.gradient}
              clip-hexagon flex flex-col items-center justify-center
              text-white shadow-lg transition duration-300
              hover:scale-105`}
          >
            <div className="text-4xl mb-3">{service.icon}</div>
            <p className="text-sm font-semibold uppercase text-center px-3">
              {service.title}
            </p>
            <span className="mt-2 text-lg font-bold">
              #{service.number}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Goals;
