import WhatWhyServices from "../shared/common/WhatWhyServices";
import Banner from "../shared/ui/Banner";
import ContactUs from "./ContactUs";



function OldAgeHome() {
  return (
    <>
      <Banner text="OLD AGE HOME"/>
      <WhatWhyServices data={{point: "OLD AGE HOME"}}/>
      <ContactUs />
    </>
  );
}

export default OldAgeHome;
