import { useLoaderData } from "react-router";
import ToyCard from "../components/ToyCard";
import { useEffect } from "react";

const AllToys = () => {
  const allToys = useLoaderData();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="my-16 space-y-10">
      <h2 className="text-2xl text-center font-bold">
        All Toys ({allToys.length})
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {allToys.map((toy) => (
          <ToyCard key={toy.id} toy={toy}></ToyCard>
        ))}
      </div>
    </div>
  );
};

export default AllToys;
