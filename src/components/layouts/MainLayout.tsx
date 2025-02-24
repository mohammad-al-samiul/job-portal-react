import { Footer } from "@/pages/shared/footer";
import { Navbar } from "@/pages/shared/navbar";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <>
      <div className="grid-background"></div>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
