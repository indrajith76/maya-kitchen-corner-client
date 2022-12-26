import React, { useContext, useState } from "react";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import Swal from "sweetalert2";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => {
        Swal.fire("LogOut Successfully!", "", "success");
      })
      .then((err) => console.error(err));
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="shadow-md sticky top-0 z-40 bg-white ">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <Link
            to="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            <img src={logo} className="h-14 w-32" alt="" />
          </Link>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "font-medium tracking-wide text-yellow-400 underline underline-offset-2 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive
                    ? "font-medium tracking-wide text-yellow-400 underline underline-offset-2 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    : "font-medium tracking-wide text-gray-700 transition-colors duration-200"
                }
              >
                Foods
              </NavLink>
            </li>

            {user && (
              <>
                <li>
                  <NavLink
                    to="/myreviews"
                    className={({ isActive }) =>
                      isActive
                        ? "font-medium tracking-wide text-yellow-400 underline underline-offset-2 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        : "font-medium tracking-wide text-gray-700 transition-colors duration-200"
                    }
                  >
                    My Reviews
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/addservice"
                    className={({ isActive }) =>
                      isActive
                        ? "font-medium tracking-wide text-yellow-400 underline underline-offset-2 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        : "font-medium tracking-wide text-gray-700 transition-colors duration-200"
                    }
                  >
                    Add Service
                  </NavLink>
                </li>
                <li>
                  <button
                    onClick={handleSignOut}
                    className="font-medium tracking-wide border bg-yellow-400 hover:bg-yellow-300 duration-500 px-3 py-1 rounded-md text-white"
                  >
                    Log Out
                  </button>
                </li>
              </>
            )}
            <li>
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  isActive
                    ? "font-medium tracking-wide text-yellow-400 underline underline-offset-2 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    : "font-medium tracking-wide text-gray-700 transition-colors duration-200"
                }
              >
                Blogs
              </NavLink>
            </li>
            {!user && (
              <>
                <li>
                  <Link
                    to="/signin"
                    className="bg-yellow-400 px-5 py-2 rounded-lg text-white font-semibold"
                  >
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link
                    to="/signup"
                    className="bg-yellow-400 px-5 py-2 rounded-lg text-white font-semibold"
                  >
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full z-10">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        to="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <img src={logo} className="h-12 w-28" alt="" />
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <Link
                          to="/"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-400"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/services"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-400"
                        >
                          Foods
                        </Link>
                      </li>
                      {user && (
                        <>
                          <li>
                            <Link
                              to="/myreviews"
                              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-400"
                            >
                              My Reviews
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/addservice"
                              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-400"
                            >
                              Add Service
                            </Link>
                          </li>
                          <li>
                            <button
                              onClick={handleSignOut}
                              className="font-medium tracking-wide border bg-yellow-300 hover:bg-yellow-400 duration-500 px-3 py-1 rounded-md text-gray-700"
                            >
                              Log Out
                            </button>
                          </li>
                        </>
                      )}
                      <li>
                        <Link
                          to="/blogs"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-400"
                        >
                          Blogs
                        </Link>
                      </li>
                      {!user && (
                        <>
                          <li>
                            <Link
                              to="/signin"
                              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                              aria-label="Sign in"
                              title="Sign in"
                            >
                              Sign in
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/signup"
                              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                              aria-label="Sign up"
                              title="Sign up"
                            >
                              Sign up
                            </Link>
                          </li>
                        </>
                      )}
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
