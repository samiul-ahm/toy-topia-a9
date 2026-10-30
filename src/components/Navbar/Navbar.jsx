import { Link, NavLink } from "react-router";
import "./Navbar.css";
import { use } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { Bounce } from "react-toastify";

const Navbar = () => {
  const { user, logoutUser } = use(AuthContext);
  const links = (
    <>
      <NavLink className={"text-xl font-semibold"} to={"/"}>
        Home
      </NavLink>
      <NavLink className={"text-xl font-semibold"} to={"/all-toys"}>
        All Toys
      </NavLink>
      {user && (
        <NavLink className={"text-xl font-semibold"} to={"/profile"}>
          My Profile
        </NavLink>
      )}
    </>
  );

  const handleLogoutUser = () => {
    logoutUser()
      .then(() => {
        toast.success("Logout Successful!", {
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
      })
      .catch((err) => {
        toast.warn(err.message, {
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
    <div className="navbar bg-base-200 shadow rounded-2xl mt-5">
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
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost text-xl">
          {" "}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxVvisScwdCI20iigEVdUfWdvXYqWWRpeaJONQdqovZA&s=10"
            className="w-15 h-12"
            alt=""
          />
          ToyTopia
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-5 space-x-5">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <details className="dropdown">
            <summary className="btn m-1">
              <img
                src={user.photoURL}
                className="w-12 h-10 rounded-full"
                alt=""
              />
            </summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm space-y-2 font-semibold text-center">
              <li className="text-base px-2 py-1 truncate">
                {user.displayName}
              </li>
              <div className=" my-1">
                <li>
                  <Link to={"/profile"}>My Profile</Link>
                </li>
                <li>
                  <Link to={"/update-profile"}>Update Profile</Link>
                </li>
                <li>
                  <button
                    className="btn btn-secondary"
                    onClick={handleLogoutUser}
                  >
                    Logout
                  </button>
                </li>
              </div>
            </ul>
          </details>
        ) : (
          <Link className="btn btn-secondary" to={"/login"}>
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
