import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { logout } from "../../redux/user-slice";

function UserPage() {
  const user = useSelector((state) => state.user.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-8 w-full max-w-md">
        <div className="flex flex-col items-center text-center">
          <img
            className="w-24 h-24 rounded-full border border-gray-300 shadow-sm object-cover"
            src={`https://ui-avatars.com/api/?name=${user.username}&background=0D8ABC&color=fff`}
            alt="avatar"
          />
          <h1 className="mt-4 text-2xl font-semibold text-gray-900">
            {user.name || user.username}
          </h1>
          <p className="text-gray-500 text-sm mt-1">User ID: {user.id}</p>
        </div>

        <div className="mt-8 space-y-4 text-gray-700">
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium">Username</span>
            <span className="text-gray-600">{user.username}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium">Password</span>
            <span className="text-gray-600">{user.password}</span>
          </div>
        </div>

        <div className="flex gap-3 mt-8">
          <button
            onClick={handleLogout}
            className="w-1/2 py-2.5 rounded-lg font-semibold bg-black text-white hover:bg-gray-800 transition-all"
          >
            Logout
          </button>
          <Link
            to="/"
            className="w-1/2 py-2.5 rounded-lg font-semibold bg-gray-200 text-gray-800 text-center hover:bg-gray-300 transition-all"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserPage;
