import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import ContactUs from "./components/pages/ContactUs";
import Layout from "./layout/Layout";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        
        <Route path="contact-us" element={<ContactUs />} />
      </Route>
    </Routes>
  );
}
