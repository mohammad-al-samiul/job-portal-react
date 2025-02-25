import { Footer } from "@/pages/shared/footer";
import { Navbar } from "@/pages/shared/navbar";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <>
      <div className="grid-background"></div>

      <main className="min-h-screen max-w-[1400px] mx-auto">
        <Navbar />
        <Outlet />
      </main>

      <Footer />
    </>
  );
};
