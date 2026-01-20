import Banner from '../shared/ui/Banner'
import WhatWhyServices from '../shared/common/WhatWhyServices'
import ContactUs from './ContactUs'

function MedicalSupport() {
  return <>
  <Banner text={"HEALTHCARE FOR ALL"} />
  <WhatWhyServices data={{ point: "MEDICAL SUPPORT TO NEEDY" }} />
  <ContactUs />
  </>
}

export default MedicalSupport