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
      <Banner />
      <section>
        <div className="ms-37.5 me-37.5 pt-20">
          <Navigation data={{ point: "OUR STORY" }} />
          <div className="text-lg mb-4 mt-12">
            <p>
              Welcome to our NGO! We are dedicated to making a positive impact
              in our community through various initiatives and programs. Our
              mission is to provide support and resources to those in need,
              promote education, and foster a sense of unity and compassion
              among all individuals.
            </p>
            <p className="mt-4">
              Since our inception, we have been involved in numerous projects
              aimed at improving the lives of underprivileged individuals and
              communities. From organizing food drives and educational workshops
              to providing medical assistance and advocating for social justice,
              our NGO is committed to creating lasting change.
            </p>
            <p className="mt-4">
              We believe that everyone has the power to make a difference, and
              we invite you to join us in our efforts. Whether through
              volunteering, donating, or simply spreading awareness about our
              cause, your support is invaluable to us. Together, we can work
              towards a better future for all.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="ms-37.5 me-37.5 pt-20">
          <Navigation data={{ point: "VISION" }} />
          <div className="grid grid-cols-3 gap-7 mb-4 mt-12">
            <div className="flex items-start gap-4">
              <div className="pt-2">
                <FaNetworkWired className="text-5xl" />
              </div>
              <h3 className="p-2 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                alias inventore eos eius sapiente{" "}
              </h3>
            </div>
            <div className="flex items-start gap-4">
              <div className="pt-2">
                <FaNetworkWired className="text-5xl" />
              </div>
              <h3 className="p-2 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                alias inventore eos eius sapiente{" "}
              </h3>
            </div>
            <div className="flex items-start gap-4">
              <div className="pt-2">
                <FaNetworkWired className="text-5xl" />
              </div>
              <h3 className="p-2 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                alias inventore eos eius sapiente{" "}
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="ms-37.5 me-37.5 pt-20">
          <Navigation data={{ point: "MISSION" }} />
          <div className="flex mt-12 gap-6">
            <div>
              <LuBicepsFlexed className="text-6xl text-red-600" />
            </div>
            <div className="text-lg mb-4">
              <p>
                Welcome to our NGO! We are dedicated to making a positive impact
                in our community through various initiatives and programs. Our
                mission is to provide support and resources to those in need,
                promote education, and foster a sense of unity and compassion
                among all individuals.
              </p>
              <p className="mt-4">
                Since our inception, we have been involved in numerous projects
                aimed at improving the lives of underprivileged individuals and
                communities. From organizing food drives and educational
                workshops to providing medical assistance and advocating for
                social justice, our NGO is committed to creating lasting change.
              </p>
              <p className="mt-4">
                We believe that everyone has the power to make a difference, and
                we invite you to join us in our efforts. Whether through
                volunteering, donating, or simply spreading awareness about our
                cause, your support is invaluable to us. Together, we can work
                towards a better future for all.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="ms-37.5 me-37.5 pt-20">
          <Navigation data={{ point: "HOW WE WORK" }} />
          <div className="mt-12 flex flex-col gap-12">
            <div className="flex items-center gap-6">
              <div>
                <BiShieldPlus className="text-6xl text-green-600" />
              </div>

              <div>
                <h3 className="text-3xl font-bold text-green-600 mb-2 mt-2 bebas-neue-regular">
                  Heading
                </h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut,
                  architecto! Consectetur nesciunt distinctio odit quia aliquam,
                  dolor quas iusto laboriosam dolorum tempore unde quae
                  delectus, nemo voluptatem asperiores, excepturi non. Magni
                  illo debitis eveniet sint vero est veniam? Dicta laudantium
                  sit eum ducimus reiciendis possimus soluta totam? Modi, hic.
                  Odit eum voluptatum veniam quas exercitationem ratione,
                  perferendis aliquam fuga hic?
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div>
                <BiShieldPlus className="text-6xl text-green-600" />
              </div>

              <div>
                <h3 className="text-3xl font-bold text-green-600 mb-2 mt-2 bebas-neue-regular">
                  Heading
                </h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut,
                  architecto! Consectetur nesciunt distinctio odit quia aliquam,
                  dolor quas iusto laboriosam dolorum tempore unde quae
                  delectus, nemo voluptatem asperiores, excepturi non. Magni
                  illo debitis eveniet sint vero est veniam? Dicta laudantium
                  sit eum ducimus reiciendis possimus soluta totam? Modi, hic.
                  Odit eum voluptatum veniam quas exercitationem ratione,
                  perferendis aliquam fuga hic?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="ms-37.5 me-37.5 pt-20">
          <Navigation data={{ point: "WHY TRUST US?" }} />
          <div className="text-lg mb-4 mt-12">
            <p>
              Welcome to our NGO! We are dedicated to making a positive impact
              in our community through various initiatives and programs. Our
              mission is to provide support and resources to those in need,
              promote education, and foster a sense of unity and compassion
              among all individuals.
            </p>
            <p className="mt-4">
              Since our inception, we have been involved in numerous projects
              aimed at improving the lives of underprivileged individuals and
              communities. From organizing food drives and educational workshops
              to providing medical assistance and advocating for social justice,
              our NGO is committed to creating lasting change.
            </p>
            <p className="mt-4">
              We believe that everyone has the power to make a difference, and
              we invite you to join us in our efforts. Whether through
              volunteering, donating, or simply spreading awareness about our
              cause, your support is invaluable to us. Together, we can work
              towards a better future for all.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
