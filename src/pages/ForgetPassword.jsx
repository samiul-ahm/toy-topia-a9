import { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { useLocation } from "react-router";
import { useState } from "react";
import { useEffect } from "react";

const ForgetPassword = () => {
  const { resetPassword } = use(AuthContext);
  const location = useLocation();
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (location.state.email) {
      setEmail(location.state.email);
    }
  }, [location]);

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Provide an email");
      return;
    }
    resetPassword(email)
      .then(() => {
        alert("reset email sent. Redirecting to Gmail...");
        window.location.href=("https://mail.google.com/");
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="flex items-center justify-center mt-16">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h2 className="card-title">Reset Password</h2>
          <form onSubmit={handleResetPassword} className="fieldset">
            {/* email*/}
            <label className="label">Enter Your Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
              placeholder="Email"
            />
            <button type="submit" className="btn btn-secondary">
              Reset password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
