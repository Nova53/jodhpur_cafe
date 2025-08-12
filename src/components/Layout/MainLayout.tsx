import { Outlet } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

export default function MainLayout() {
  return (
    <div className="m-0 p-0">
      <Header />
      <main >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}