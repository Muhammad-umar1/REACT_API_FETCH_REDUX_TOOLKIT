import React, { useEffect, useState } from "react";
import Popus from "./Popus";
import {
  deleteUser,
  getUserApi,
} from "../../Redux/Slices/ApiDataSlice/ApiDataSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function PostCard({ name, fatherName, email, password, id }) {
  const dispatch = useDispatch();

  return (
    <div className="flex bg-white shadow-lg rounded-lg mx-4 md:mx-auto mt-6 max-w-md md:max-w-2xl">
      <div className="flex items-start px-4 py-6">
        <img
          className="w-12 h-12 rounded-full object-cover mr-4 shadow"
          src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="avatar"
        />
        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900 mt-1">{name}</h2>
            <small className="text-sm text-gray-700 mt-2 ms-">22h ago</small>
          </div>
          <p className="text-gray-700 ">Joined 12 SEP 2012. </p>
          <p className="mt-3 text-gray-700 text-sm">
            Father Name: {fatherName}
          </p>
          <p className="mt-3 text-gray-700 text-sm">Email: {email}</p>
          <p className="mt-3 text-gray-700 text-sm">password: {password}</p>
          <Popus id={id} />
          <div className="mt-4 flex items-center">
            <div className="flex text-gray-700 text-sm mr-3">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                className="w-4 h-4 mr-1"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <span>12</span>
            </div>
            <div className="flex text-gray-700 text-sm mr-8">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                className="w-4 h-4 mr-1"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                />
              </svg>
              <span>8</span>
            </div>
            <div className="flex text-gray-700 text-sm mr-4">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                className="w-4 h-4 mr-1"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                />
              </svg>
              <span>share</span>
              <Link
                type="type"
                onClick={() => dispatch(deleteUser(id))}
                className="bg-sky-700 px-2 py-1 mx-2 rounded text-gray-100"
              >
                Delete
              </Link>
              <Link
                className="bg-sky-700 px-2 py-1 mx-2 rounded text-gray-100"
                to={`/edit/${id}`}
              >
                Edit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
