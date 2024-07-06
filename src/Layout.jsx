import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-800 text-white">
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
