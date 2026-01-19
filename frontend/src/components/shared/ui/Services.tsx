import { FaGraduationCap } from "react-icons/fa";
import { GiHeartPlus, GiShinyApple } from "react-icons/gi";
import { IoMedicalOutline } from "react-icons/io5";
import { LuHousePlus, LuTreePine } from "react-icons/lu";

function Services() {
  return (
    <>
      <section className="ms-37.5 me-37.5">
        <div>
          <h2 className="text-center text-4xl font-bold text-gray-800 my-10">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border p-4 rounded-lg shadow hover:shadow-lg transition flex items-center gap-4">
              {<LuHousePlus className="text-8xl font-normal text-red-400" />}
              <div>
                <h3 className="text-xl font-semibold mb-2"> Old Age Home</h3>
                <p>
                  Description of Service One. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="border p-4 rounded-lg shadow hover:shadow-lg transition flex items-center gap-4">
              <FaGraduationCap className="text-8xl font-normal text-blue-500" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Learning of kids</h3>
                <p>
                  Description of Service Two. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="border p-4 rounded-lg shadow hover:shadow-lg transition flex items-center gap-4">
              <GiShinyApple className="text-8xl font-normal text-red-500" />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Food distribution to needy
                </h3>
                <p>
                  Description of Service Three. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="border p-4 rounded-lg shadow hover:shadow-lg transition flex items-center gap-4">
              <GiHeartPlus className="text-8xl font-normal text-green-500" />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Medical support to rural areas
                </h3>
                <p>
                  Description of Service Three. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="border p-4 rounded-lg shadow hover:shadow-lg transition flex items-center gap-4">
              <LuTreePine className="text-8xl font-normal text-green-500" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Tree plantation</h3>
                <p>
                  Description of Service Three. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="border p-4 rounded-lg shadow hover:shadow-lg transition flex items-center gap-4">
              <IoMedicalOutline className="text-8xl font-normal text-yellow-500" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Services 6</h3>
                <p>
                  Description of Service Three. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
