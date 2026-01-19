import Banner from "../shared/ui/Banner";
import Services from "../shared/ui/Services";
import ShortStory from "../shared/ui/ShortStory";
import ContactUs from "./ContactUs";

function Home() {
  return (
    <>
      <Banner />
      <ShortStory />
      <Services />
      <ContactUs />
    </>
  );
}

export default Home;
