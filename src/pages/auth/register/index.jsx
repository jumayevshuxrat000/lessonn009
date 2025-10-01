import axios from "axios";
import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const nameRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();

    const register = {
      name: nameRef.current.value,
      username: usernameRef.current.value,
      password: passwordRef.current.value,
      createdAt: Date.now(),
    };

    axios
      .post("https://68d91c8f90a75154f0d99101.mockapi.io/users", register)
      .then(() => navigate("/login"))
      .catch((error) => console.log(error));

    nameRef.current.value = "";
    usernameRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
        <h1 className="text-2xl font-semibold text-center text-gray-900 mb-6">
          Create your account
        </h1>
        <form onSubmit={submit} className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Full Name
            </label>
            <input
              ref={nameRef}
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
              required
            />
          </div>

          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Username
            </label>
            <input
              ref={usernameRef}
              type="text"
              id="username"
              placeholder="Choose a username"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              ref={passwordRef}
              type="password"
              id="password"
              placeholder="••••••••"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white font-semibold py-2.5 rounded-lg hover:bg-gray-800 transition-all"
          >
            Sign up
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-5">
          Already have an account?{" "}
          <Link to="/login" className="text-black font-medium hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
