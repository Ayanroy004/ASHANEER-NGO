import Banner from "../shared/ui/Banner";
import WhatWhyServices from "../shared/common/WhatWhyServices";
import ContactUs from "./ContactUs";

function Education() {
  return (
    <>
      <Banner text="LEARNING OF KIDS"/>
      <WhatWhyServices data={{ point: "LEARNING OF KIDS" }} />
      <ContactUs />
    </>
  );
}

export default Education;
