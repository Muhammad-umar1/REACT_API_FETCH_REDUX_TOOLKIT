import axios from "axios";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postApi } from "../Redux/Slices/ApiDataSlice/ApiDataSlice";

const Form = () => {
  const [inputData, setInputData] = useState({
    name: "",
    fatherName: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const formData = "formData";
  const setLocalstorga = (data) => {
    localStorage.setItem(formData, JSON.stringify(data));
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputData((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  };

  const OnClickHandle = (e) => {
    e.preventDefault();
    dispatch(postApi(inputData));
    setLocalstorga(inputData);
    console.log("i am inputData ", inputData);
    setInputData({
      name: "",
      fatherName: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="border w-full flex justify-center">
      <div className="w-full lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col justify-self-center mt-10 md:m-10">
        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
          Add Detail
        </h2>

        <div className="relative mb-4">
          <label
            htmlFor="full-name"
            className="leading-7 text-sm text-gray-600"
          >
            Full Name
          </label>
          <input
            type="text"
            id="full-name"
            name="name"
            value={inputData.name}
            onChange={handleInput}
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label
            htmlFor="father-name"
            className="leading-7 text-sm text-gray-600"
          >
            Father Name
          </label>
          <input
            type="text"
            id="father-name"
            name="fatherName"
            value={inputData.fatherName}
            onChange={handleInput}
            className="w-full h-10 border border-1 border-gray-300 rounded focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none text-base text-gray-700 py-1 px-3 leading-8 transition-colors"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={inputData.email}
            onChange={handleInput}
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relaative mb-4">
          <label htmlFor="password" className="leading-7 text-sm text-gray-600">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            value={inputData.password}
            onChange={handleInput}
            className="w-full rounded bg-white border border-gray-300 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <button
          onClick={(event) => {
            OnClickHandle(event);
          }}
          className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Add Post
          {/* <b>{index !== null ? "Update Post" : "Add Post"}</b> */}
        </button>
        <p className="text-xs text-gray-500 mt-3">
          Literally, you probably haven't heard of them jean shorts.
        </p>
      </div>
    </div>
  );
};

export default Form;
