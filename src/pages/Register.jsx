import { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { ToastContainer } from "react-toastify";
import { Bounce } from "react-toastify";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser, updateUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const displayName = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((res) => {
        console.log(res.user);

        // update User for image and name
        updateUser(displayName, photoURL)
          .then(() => {
            toast.success("Register Successful!", {
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
          .catch((err) => {
            const message = err.message;
            toast.warn(message, {
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
          });
      })
      .catch((err) => {
        const message = err.message;
        toast.warn(message, {
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
      });
  };

  return (
    <div className="mt-16 flex flex-col justify-center items-center ">
      <ToastContainer
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
      <h2 className="text-3xl font-bold text-center mb-5 ">Please Register</h2>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleRegister} className="fieldset">
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
            {/* email*/}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            {/* password*/}
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
            />

            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
          </form>
          <p>
            Alreay have an account?{" "}
            <Link className="underline text-lg" to={"/login"}>
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
