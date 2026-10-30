import { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { Bounce } from "react-toastify";
import { ToastContainer } from "react-toastify";

const UpdateProfile = () => {
  const { updateUser } = use(AuthContext);
  const navigate = useNavigate();
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const displayName = form.name.value;
    const photoURL = form.photoURL.value;
    console.log(displayName, photoURL);

    updateUser(displayName, photoURL)
      .then(() => {
        toast.success('Updated successfully', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
        navigate("/");
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div className="mt-16 flex flex-col justify-center items-center "><ToastContainer
    position="top-center"
    autoClose={1000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick={false}
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
    transition={Bounce}
    />
      <h2 className="text-3xl font-bold text-center mb-5 ">Update Profile</h2>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleUpdate} className="fieldset">
            {/* Name */}
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
            />
            {/* photo */}
            <label className="label">Photo</label>
            <input
              type="text"
              name="photoURL"
              className="input"
              placeholder="PhotoURL"
            />

            <button type="submit" className="btn btn-neutral mt-4">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
