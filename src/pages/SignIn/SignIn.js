import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";
import { useLocation, useNavigate } from "react-router-dom";

const SignIn = () => {
  useTitle("Sign In");
  const [error, setError] = useState("");
  const { signIn, googleSignIn, facebookSignIn, githubSignIn } =
    useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;

        console.log(user?.uid);
        const currentUser = {
          id: user?.uid,
        };

        fetch("https://maya-kitchen-corner-server.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("token", data.token);
            Swal.fire("Congratulations!", "Login Successfully.", "success");
            setError("");
            form.reset();
            navigate(from, { replace: true });
          });
      })
      .catch((err) => {
        console.error(err);
        setError(err.message.slice(22, err.message.length - 2));
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        const currentUser = {
          id: user?.uid,
        };
        fetch("https://maya-kitchen-corner-server.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("token", data.token);
            Swal.fire("Congratulations!", "Login Successfully.", "success");
            navigate(from, { replace: true });
          });
      })
      .catch((err) => {
        setError(err.message.slice(22, error.message.length - 2));
        console.error(err);
      });
  };

  const handleFacebookSignIn = () => {
    facebookSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);

        const currentUser = {
          id: user?.uid,
        };

        fetch("https://maya-kitchen-corner-server.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("token", data.token);
            Swal.fire("Congratulations!", "Login Successfully.", "success");
            navigate(from, { replace: true });
          });
      })
      .catch((err) => {
        setError(err.message.slice(22, error.message.length - 2));
        console.error(err);
      });
  };

  const handleGithubSignIn = () => {
    githubSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);

        const currentUser = {
          id: user?.uid,
        };

        fetch("https://maya-kitchen-corner-server.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("token", data.token);
            Swal.fire("Congratulations!", "Login Successfully.", "success");
            navigate(from, { replace: true });
          });
      })
      .catch((err) => {
        setError(err.message.slice(22, error.message.length - 2));
        console.error(err);
      });
  };

  return (
    <div className="my-10">
      <div className="border w-11/12 md:w-3/4 lg:w-2/5 mx-auto p-10 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          <h2 className="text-4xl font-semibold text-slate-800 mt-5 mb-10 text-center">
            Sign In
          </h2>
          <label htmlFor="email" className="text-lg">
            E-mail
          </label>
          <input
            type="email"
            name="email"
            className="block w-full border h-10 pl-3 rounded my-4"
            id="email"
            placeholder="E-mail"
            required
          />
          <label htmlFor="password" className="text-lg">
            Password <small className="text-red-500">{error}</small>
          </label>
          <input
            type="password"
            name="password"
            className="block w-full border h-10 pl-3 rounded my-4"
            id="password"
            placeholder="Password"
            required
          />
          <div className="flex justify-center mt-10">
            <button
              className="bg-yellow-300 py-2 px-10 rounded text-slate-700 font-semibold"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
        <fieldset className="border mt-10">
          <legend className="text-center">Sign In with</legend>
          <div className="flex justify-center gap-20 py-5">
            <button
              onClick={handleGoogleSignIn}
              className="text-3xl text-slate-700"
            >
              <FaGoogle />
            </button>
            <button
              onClick={handleFacebookSignIn}
              className="text-3xl text-slate-700"
            >
              <FaFacebook />
            </button>
            <button
              onClick={handleGithubSignIn}
              className="text-3xl text-slate-700"
            >
              <FaGithub />
            </button>
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default SignIn;
