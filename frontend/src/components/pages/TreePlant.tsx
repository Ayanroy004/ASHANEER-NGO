import WhatWhyServices from "../shared/common/WhatWhyServices"
import Banner from "../shared/ui/Banner"
import ContactUs from "./ContactUs"

function TreePlant() {
  return <>
  <Banner text={"TREE PLANTATION"}/>
  <WhatWhyServices data={{ point: "TREE PLANTATION" }} />
  <ContactUs />
  
  </>
}

export default TreePlant