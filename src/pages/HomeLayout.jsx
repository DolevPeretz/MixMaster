import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function HomeLayout() {
  const navigat = useNavigate();
  const isLpading = navigat.state === "loading";
  return (
    <>
      <Navbar />
      <section className="page">
        {isLpading ? <div className="loading" /> : <Outlet />}
      </section>
    </>
  );
}

export default HomeLayout;
