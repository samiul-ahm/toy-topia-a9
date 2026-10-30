import { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router";
import Loading from "../components/Loading";

const MyProfile = () => {
  const { user, loading } = use(AuthContext);
  if (loading) {
    return <Loading></Loading>;
  }

  if (!user) {
    return null;
  }
  const { displayName, photoURL, email } = user;
  return (
    <div className="flex justify-center items-center mt-16 flex-col mx-5 my-10  ">
      <h2 className="text-3xl font-bold mb-5">My profile</h2>
      <fieldset className="card card-border bg-base-100 shadow-2xl">
        <div className="card-body">
          <img src={photoURL} className="rounded-full w-2xs" alt="" />
          <hr className="opacity-60 border-2" />
          <h2 className="card-title">Name : {displayName}</h2>
          <h2 className="card-title">Email : {email}</h2>
          <div className="card-actions justify-center">
            <Link to={"/update-profile"} className="btn btn-secondary">
              Update Profile
            </Link>
          </div>
        </div>
      </fieldset>
    </div>
  );
};

export default MyProfile;
