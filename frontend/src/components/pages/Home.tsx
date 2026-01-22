import Banner from "../shared/ui/Banner";
import Goals from "../shared/ui/Goals";
import Services from "../shared/ui/Services";
import ShortStory from "../shared/ui/ShortStory";
import StoriesInMotion from "../shared/ui/StoriesInMotion";
import SupportCause from "../shared/ui/SupportCause";
import ContactUs from "./ContactUs";

function Home() {
  return (
    <>
      <Banner />
      <ShortStory />
      <Services />
      <Goals />
      <StoriesInMotion />
      <SupportCause />

      <ContactUs />
    </>
  );
}

export default Home;
