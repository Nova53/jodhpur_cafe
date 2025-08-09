import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function MainLayout() {
  return (
    <div>
      <Header />
      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}