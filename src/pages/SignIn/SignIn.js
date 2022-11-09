import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";

const SignIn = () => {
  return (
    <div className="my-10">
      <div className="border w-2/5 mx-auto p-10 rounded-lg shadow-lg">
        <form>
          <h2 className="text-4xl font-semibold text-slate-800 mt-5 mb-10 text-center">Sign In</h2>
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
            Password
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
              Login
            </button>
          </div>
        </form>
        <fieldset className="border mt-10">
          <legend className="text-center">Sign In with</legend>
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

export default SignIn;
