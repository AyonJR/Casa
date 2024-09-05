import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../firebase/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const { loginUserWithGoogle, loginUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await loginUser(email, password);
      Swal.fire({
        title: "Success!",
        text: "Logged in successfully",
        icon: "success",
        confirmButtonText: "Cool",
      });
      navigate(location?.state?.from || "/");
      console.log(user);
    } catch (error) {
      console.error("Login Error:", error);
      Swal.fire({
        title: "Error!",
        text: "Login failed",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  // Google login
  const handleGoogleLogin = async () => {
    try {
      await loginUserWithGoogle();
      Swal.fire({
        title: "Success!",
        text: "Logged in with Google successfully",
        icon: "success",
        confirmButtonText: "Cool",
      }).then(() => {
        navigate(location?.state ? location.state : "/");
        console.log(user);
      });
    } catch (error) {
      console.error("Google login error:", error);
      Swal.fire({
        title: "Error!",
        text: "Google login failed",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div>
      {/* headers */}
      <div>
        <div className="relative w-full h-[300px] sm:h-[400px] overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://i.ibb.co/6HszWw6/aaron-huber-G7s-E2-S4-Lab4-unsplash.jpg"
            alt="Full Image"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

          {/* Centered text */}
          <div className="absolute inset-0 flex justify-center items-center">
            <h1 className="text-white mt-14 text-3xl sm:text-4xl font-bold">
              Welcome <span className="text-customGreen">Back!</span>
            </h1>
          </div>
        </div>
      </div>

      {/* main content */}
      <div className="flex items-center justify-center lg:mt-10 px-4">
        <div className="flex flex-col justify-center lg:flex-row items-center lg:space-x-8 w-full max-w-7xl">
          

          {/* login form */}
          <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg w-full max-w-md">
            <div className="flex justify-center mb-6">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Back to homepage"
                className="flex items-center p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  className="w-14 h-14 dark:text-customGreen"
                >
                  <path d="M27.912 7.289l-10.324-5.961c-0.455-0.268-1.002-0.425-1.588-0.425s-1.133 0.158-1.604 0.433l0.015-0.008-10.324 5.961c-0.955 0.561-1.586 1.582-1.588 2.75v11.922c0.002 1.168 0.635 2.189 1.574 2.742l0.016 0.008 10.322 5.961c0.455 0.267 1.004 0.425 1.59 0.425 0.584 0 1.131-0.158 1.602-0.433l-0.014 0.008 10.322-5.961c0.955-0.561 1.586-1.582 1.588-2.75v-11.922c-0.002-1.168-0.633-2.189-1.573-2.742zM27.383 21.961c0 0.389-0.211 0.73-0.526 0.914l-0.004 0.002-10.324 5.961c-0.152 0.088-0.334 0.142-0.53 0.142s-0.377-0.053-0.535-0.145l0.005 0.002-10.324-5.961c-0.319-0.186-0.529-0.527-0.529-0.916v-11.922c0-0.389 0.211-0.73 0.526-0.914l0.004-0.002 10.324-5.961c0.152-0.090 0.334-0.143 0.53-0.143s0.377 0.053 0.535 0.144l-0.006-0.002 10.324 5.961c0.319 0.185 0.529 0.527 0.529 0.916z"></path>
                  <path d="M22.094 19.451h-0.758c-0.188 0-0.363 0.049-0.515 0.135l0.006-0.004-4.574 2.512-5.282-3.049v-6.082l5.282-3.051 4.576 2.504c0.146 0.082 0.323 0.131 0.508 0.131h0.758c0.293 0 0.529-0.239 0.529-0.531v-0.716c0-0.2-0.11-0.373-0.271-0.463l-0.004-0.002-5.078-2.777c-0.293-0.164-0.645-0.26-1.015-0.26-0.39 0-0.756 0.106-1.070 0.289l0.010-0.006-5.281 3.049c-0.636 0.375-1.056 1.055-1.059 1.834v6.082c0 0.779 0.422 1.461 1.049 1.828l0.009 0.006 5.281 3.049c0.305 0.178 0.67 0.284 1.061 0.284 0.373 0 0.723-0.098 1.027-0.265l-0.012 0.006 5.080-2.787c0.166-0.091 0.276-0.265 0.276-0.465v-0.716c0-0.293-0.238-0.529-0.529-0.529z"></path>
                </svg>
              </a>
            </div>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="w-full bg-customGreen  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Log In
                </button>
              </div>
            </form>
            <div className="mt-4">
              <button
                onClick={handleGoogleLogin}
                className="flex items-center justify-center w-full bg-white border border-gray-300 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                <FcGoogle className="mr-2" />
                Continue with Google
              </button>
            </div>
            <div className="mt-4 text-center">
              <p>
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="text-customGreen hover:underline"
                >
                  Sign up here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
