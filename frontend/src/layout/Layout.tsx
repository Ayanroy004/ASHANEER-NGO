import Footer from "../components/shared/common/Footer";
import AppHeader from "../components/shared/common/Header";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <AppHeader />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
