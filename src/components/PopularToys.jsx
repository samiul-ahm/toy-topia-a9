import { useLoaderData } from "react-router";
import ToyCard from "./ToyCard";

const PopularToys = () => {
  const toyData = useLoaderData();
  const popularToys = [...toyData]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <div>
      <h2>Popular Toys</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {popularToys.map((toy) => (
          <ToyCard key={toy.id} toy={toy}></ToyCard>
        ))}
      </div>
    </div>
  );
};

export default PopularToys;
