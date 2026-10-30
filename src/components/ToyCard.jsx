import { Link } from "react-router";

const ToyCard = ({ toy }) => {
  const { id, thumbnail, toyName, rating, availableQuantity, price } = toy;
  // console.log(toy);

  return (
    <div className="card bg-base-100  shadow-xl">
      <figure>
        <img
          src={thumbnail}
          alt="Shoes" className="w-full h-96"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
         {toyName} 
          <div className="badge badge-secondary">Available : {availableQuantity}</div>
        </h2>
        
        <div className="card-actions space-x-10 mt-4">
          <div className="badge badge-outline">Price: ${price}</div>
          <div className="badge badge-outline">Rating: {rating}</div>
        </div>
        <div className="flex justify-center items-center mt-4">
          <Link className="text-white btn-neutral btn" to={`/all-toys/${id}`}>Toy Details</Link></div>
      </div>
    </div>
  );
};

export default ToyCard;
