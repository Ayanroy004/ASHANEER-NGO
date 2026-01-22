import { FaNetworkWired } from "react-icons/fa";
import Navigation from "../shared/common/Navigation";
import Banner from "../shared/ui/Banner";
import { LuBicepsFlexed } from "react-icons/lu";
import { BiShieldPlus } from "react-icons/bi";

export interface AboutProps {
  data: { point: string };
}

function About() {
  return (
    <>
      <Banner text="ABOUT US" />

      {/* OUR STORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <Navigation data={{ point: "OUR STORY" }} />
        <div className="text-base sm:text-lg md:text-xl mt-8 space-y-4 text-gray-800 leading-relaxed">
          <p>
            Welcome to our NGO! We are dedicated to making a positive impact
            in our community through various initiatives and programs. Our
            mission is to provide support and resources to those in need,
            promote education, and foster a sense of unity and compassion
            among all individuals.
          </p>
          <p>
            Since our inception, we have been involved in numerous projects
            aimed at improving the lives of underprivileged individuals and
            communities. From organizing food drives and educational workshops
            to providing medical assistance and advocating for social justice,
            our NGO is committed to creating lasting change.
          </p>
          <p>
            We believe that everyone has the power to make a difference, and
            we invite you to join us in our efforts. Whether through
            volunteering, donating, or simply spreading awareness about our
            cause, your support is invaluable to us. Together, we can work
            towards a better future for all.
          </p>
        </div>
      </section>

      {/* VISION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <Navigation data={{ point: "VISION" }} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="pt-2">
                <FaNetworkWired className="text-4xl sm:text-5xl text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-xl p-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                alias inventore eos eius sapiente.
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* MISSION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <Navigation data={{ point: "MISSION" }} />
        <div className="flex flex-col md:flex-row mt-8 gap-6">
          <div className="shrink-0">
            <LuBicepsFlexed className="text-5xl sm:text-6xl text-red-600" />
          </div>
          <div className="text-base sm:text-lg md:text-xl space-y-4 leading-relaxed text-gray-800">
            <p>
              Welcome to our NGO! We are dedicated to making a positive impact
              in our community through various initiatives and programs. Our
              mission is to provide support and resources to those in need,
              promote education, and foster a sense of unity and compassion
              among all individuals.
            </p>
            <p>
              Since our inception, we have been involved in numerous projects
              aimed at improving the lives of underprivileged individuals and
              communities. From organizing food drives and educational
              workshops to providing medical assistance and advocating for
              social justice, our NGO is committed to creating lasting change.
            </p>
            <p>
              We believe that everyone has the power to make a difference, and
              we invite you to join us in our efforts. Whether through
              volunteering, donating, or simply spreading awareness about our
              cause, your support is invaluable to us. Together, we can work
              towards a better future for all.
            </p>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <Navigation data={{ point: "HOW WE WORK" }} />
        <div className="mt-8 flex flex-col gap-8">
          {[1, 2].map((_, i) => (
            <div key={i} className="flex flex-col md:flex-row items-start gap-6">
              <div className="shrink-0">
                <BiShieldPlus className="text-5xl sm:text-6xl text-green-600" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-green-600 mb-2 mt-2">
                  Heading
                </h3>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut,
                  architecto! Consectetur nesciunt distinctio odit quia aliquam,
                  dolor quas iusto laboriosam dolorum tempore unde quae delectus,
                  nemo voluptatem asperiores, excepturi non. Magni illo debitis
                  eveniet sint vero est veniam? Dicta laudantium sit eum ducimus
                  reiciendis possimus soluta totam? Modi, hic. Odit eum voluptatum
                  veniam quas exercitationem ratione, perferendis aliquam fuga hic?
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY TRUST US */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16">
        <Navigation data={{ point: "WHY TRUST US?" }} />
        <div className="text-base sm:text-lg md:text-xl mt-8 space-y-4 leading-relaxed text-gray-800">
          <p>
            Welcome to our NGO! We are dedicated to making a positive impact
            in our community through various initiatives and programs. Our
            mission is to provide support and resources to those in need,
            promote education, and foster a sense of unity and compassion
            among all individuals.
          </p>
          <p>
            Since our inception, we have been involved in numerous projects
            aimed at improving the lives of underprivileged individuals and
            communities. From organizing food drives and educational workshops
            to providing medical assistance and advocating for social justice,
            our NGO is committed to creating lasting change.
          </p>
          <p>
            We believe that everyone has the power to make a difference, and
            we invite you to join us in our efforts. Whether through
            volunteering, donating, or simply spreading awareness about our
            cause, your support is invaluable to us. Together, we can work
            towards a better future for all.
          </p>
        </div>
      </section>
    </>
  );
}

export default About;
