import { useLoaderData, useParams } from "react-router";

const ToyDetails = () => {
  const { id } = useParams();
  const toyData = useLoaderData();

  const toy = toyData.find((toy) => toy.id == id);
  const { thumbnail, description, toyName } = toy;

  const handleForm = (e) => {
    e.preventDefault();
    alert("We got your response");
    e.target.reset();
  };

  return (
    <div className="my-16 ">
      <div className="flex flex-col md:flex-row justify-between gap-5  bg-base-100 shadow-xl">
        <figure className="w-full md:w-1/2 p-4">
          <img src={thumbnail} className="rounded-2xl" alt="Album" />
        </figure>
        <div className="w-full md:w-1/2">
          <h2 className="font-bold text-3xl px-4 mb-5">{toyName}</h2>
          <p className="text-lg mb-5 p-10">{description}</p>
        </div>
      </div>
      <div className=" my-8 mx-auto card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
        <div className="card-body">
          <form onSubmit={handleForm} className="fieldset">
            {/* name */}
            <label className="label">Name</label>
            <input
              type="text"
              className="input"
              name="name"
              placeholder="name"
            />
            {/* email */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="email"
            />
            <button type="submit" className="btn btn-secondary mt-4">
              Try Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
