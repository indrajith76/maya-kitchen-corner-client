import React, { useContext, useState } from "react";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthProvider";

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photoUrl.value;

    if (!/.{6}/.test(password)) {
      setError("(Password should be at least 6 characters)");
      return;
    }

    if (!/[!@#$%^&*]/.test(password)) {
      setError("(Add at least one special character)");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setError("(Password should have at least one uppercase)");
      return;
    }

    setError("");

    const profile = {
      displayName: name,
      photoURL: photoUrl,
    };

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUserInfo(profile);
        console.log(user);
        form.reset();
        
      })
      .catch((err) => console.error(err));
  };

  const updateUserInfo = (profile) => {
    updateUserProfile(profile)
      .then(() => {
        console.log("User info Updated");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="my-10">
      <div className="border w-2/5 mx-auto p-10 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          <h2 className="text-4xl font-semibold text-slate-800 mt-5 mb-10 text-center">
            Sign Up
          </h2>
          <label htmlFor="name" className="text-lg">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="block w-full border h-10 pl-3 rounded my-4"
            id="name"
            placeholder="Name"
          />
          <label htmlFor="photoUrl" className="text-lg">
            Photo URL
          </label>
          <input
            type="text"
            name="photoUrl"
            className="block w-full border h-10 pl-3 rounded my-4"
            id="photoUrl"
            placeholder="Photo URL"
          />
          <label htmlFor="email" className="text-lg">
            E-mail
          </label>
          <input
            type="email"
            name="email"
            className="block w-full border h-10 pl-3 rounded my-4"
            id="email"
            placeholder="E-mail"
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
          />
          <div className="flex justify-center mt-10">
            <button
              className="bg-yellow-300 py-2 px-10 rounded text-slate-700 font-semibold"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
        <fieldset className="border mt-10">
          <legend className="text-center">Sign Up with</legend>
          <div className="flex justify-center gap-20 py-5">
            <button className="text-3xl text-slate-700">
              <FaGoogle />
            </button>
            <button className="text-3xl text-slate-700">
              <FaFacebook />
            </button>
            <button className="text-3xl text-slate-700">
              <FaGithub />
            </button>
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default SignUp;
