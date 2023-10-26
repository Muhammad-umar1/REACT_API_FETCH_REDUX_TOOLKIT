import React, { useEffect, useState } from "react";
import { getUserApi } from "../../Redux/Slices/ApiDataSlice/ApiDataSlice";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "./PostCard";

const PostList = () => {
  const { userApiData, isLoading, search } = useSelector(
    (state) => state?.data
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserApi());
  }, []);

  if (isLoading) {
    return <h1 className="font-bold text-lg"> Loading... </h1>;
  }
  return (
    <div>
      {userApiData
        .filter(
          (ele) =>
            search.length === 0 ||
            ele?.name.toLowerCase().includes(search.toLowerCase())
        )
        .map((user) => (
          <PostCard
            name={user?.name}
            fatherName={user?.fatherName}
            email={user?.email}
            password={user?.password}
            id={user?.id}
            key={user?.id}
          />
        ))}
      {/* {userApiData &&
        userApiData
          .filter((ele) => {
            if (search.length === 0) {
              return ele;
            } else {
              return ele.toLowerCase().includes(search.toLowerCase());
            }
          })
          .map((user) => (
            <PostCard
              name={user?.name}
              fatherName={user?.fatherName}
              email={user?.email}
              password={user?.password}
              id={user?.id}
              key={user?.id}
            />
          ))} */}
    </div>
  );
};

export default PostList;
