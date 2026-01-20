import WhatWhyServices from "../shared/common/WhatWhyServices";
import Banner from "../shared/ui/Banner";
import ContactUs from "./ContactUs";

function FoodDist() {
  return (
    <>
      <Banner text="FOOD DISTRIBUTION"/>
      <WhatWhyServices data={{ point: "FOOD DISTRIBUTION TO NEEDY" }} />
      <ContactUs />
    </>
  );
}

export default FoodDist;
