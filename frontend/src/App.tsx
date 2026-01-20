import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import ContactUs from "./components/pages/ContactUs";
import Layout from "./layout/Layout";
import OldAgeHome from "./components/pages/OldAgeHome";
import Education from "./components/pages/Education";
import FoodDist from "./components/pages/FoodDist";
import MedicalSupport from "./components/pages/MedicalSupport";
import TreePlant from "./components/pages/TreePlant";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="old-age-home" element={<OldAgeHome />} />
        <Route path="learning-kids" element={<Education />} />
        <Route path="food-dist" element={<FoodDist />} />
        <Route path="medical-support" element={<MedicalSupport />} />
        <Route path="tree-plant" element={<TreePlant />} />
        <Route path="service6" element={<TreePlant />} />

        <Route path="contact-us" element={<ContactUs />} />
      </Route>
    </Routes>
  );
}
