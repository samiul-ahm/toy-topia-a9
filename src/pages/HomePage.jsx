import { Link } from "react-router";
import Hero from "../components/Hero";
import PopularToys from "../components/PopularToys";

const HomePage = () => {
  return (
    <div className="my-10 space-y-5">
      {/* hero section*/}
      <Hero></Hero>
      {/* popular toys*/}
      <PopularToys></PopularToys>
      <div className="flex justify-center items-center">
        <Link
          className="btn btn-secondary"
          to={"/all-toys"}
        >
          Show All Toys
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
