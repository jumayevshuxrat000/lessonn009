import axios from "axios";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../../redux/user-slice";

function Login() {
  const usernameRef = useRef();
  const pasRef = useRef();
  const dispatch = useDispatch();
  const [error, setError] = useState();
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();

    const userData = {
      username: usernameRef.current.value,
      password: pasRef.current.value,
    };

    axios
      .get("https://68d91c8f90a75154f0d99101.mockapi.io/users")
      .then((res) => {
        const found = res.data.find(
          (u) =>
            u.username === userData.username && u.password === userData.password
        );

        if (found) {
          setError(null);
          dispatch(login(found));
          navigate("/user");
        } else {
          setError("Username yoki parol noto‘g‘ri");
        }
      })
      .catch((err) => setError(err.message));

    usernameRef.current.value = "";
    pasRef.current.value = "";
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
        <h1 className="text-2xl font-semibold text-center text-gray-900 mb-6">
          Sign in to your account
        </h1>
        <form onSubmit={submit} className="space-y-5">
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
              placeholder="Enter your username"
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
              ref={pasRef}
              type="password"
              id="password"
              placeholder="••••••••"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-black text-white font-semibold py-2.5 rounded-lg hover:bg-gray-800 transition-all"
          >
            Sign in
          </button>

          <p className="text-center text-sm text-gray-500">
            Don’t have an account yet?{" "}
            <Link
              to={"/register"}
              className="text-black font-medium hover:underline"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
