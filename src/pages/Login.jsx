import { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useLocation, useNavigate } from "react-router";
import { useRef } from "react";
import { toast } from "react-toastify";
import { Bounce } from "react-toastify";
import { ToastContainer } from "react-toastify";

const Login = () => {
  const { loginUser } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const emailRef = useRef();

  const handleForgetPassword = () => {
    const email = emailRef.current.value || "";
    navigate("/forget-password", { state: { email } });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    loginUser(email, password)
      .then((res) => {
        // console.log(res.user);
        // alert("login successfaul");
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
        navigate(location?.state || "/");
      })
      .catch((err) => {
       toast.error(err.message, {
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
    <div className="flex items-center justify-center mt-16">
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
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleLogin} className="fieldset">
            {/* email*/}
            <label className="label">Email</label>
            <input
              ref={emailRef}
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
            <div onClick={handleForgetPassword}>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
          </form>
          <p>
            Don't have an account?{" "}
            <Link className="text-lg underline" to={"/register"}>
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
