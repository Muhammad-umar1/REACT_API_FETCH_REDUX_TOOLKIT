import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../../Redux/Slices/ApiDataSlice/ApiDataSlice";

const Update = () => {
  const { id } = useParams();
  const defaultData = {
    name: "",
    fatherName: "",
    email: "",
    password: "",
  };
  const { userApiData, isLoading } = useSelector((state) => state?.data);
  const [UpdateData, setUpdateData] = useState(defaultData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const singleUser = userApiData.find((item) => item?.id === id);
      if (singleUser) {
        setUpdateData(singleUser);
      }
    }
  }, [id, userApiData]);

  const handleData = (e) => {
    const { name, value } = e.target;
    setUpdateData({ ...UpdateData, [name]: value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser(UpdateData));
    navigate("/postList");
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
            value={UpdateData && UpdateData?.name}
            onChange={handleData}
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
            value={UpdateData && UpdateData?.fatherName}
            onChange={handleData}
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
            value={UpdateData && UpdateData?.email}
            onChange={handleData}
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
            value={UpdateData && UpdateData?.password}
            onChange={handleData}
            className="w-full rounded bg-white border border-gray-300 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <button
          onClick={(event) => {
            handleUpdate(event);
          }}
          className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Update Post
          {/* <b>{index !== null ? "Update Post" : "Add Post"}</b> */}
        </button>
        <p className="text-xs text-gray-500 mt-3">
          Literally, you probably haven't heard of them jean shorts.
        </p>
      </div>
    </div>
  );
};

export default Update;
