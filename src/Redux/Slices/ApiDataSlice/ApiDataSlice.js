import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect } from "react";

const initialState = {
  users: [],
  userApiData: [],
  search: [],
  isLoading: false,
  isError: false,
};

// delete user
export const deleteUser = createAsyncThunk("deleteUser/Api", async (id) => {
  try {
    const res = await axios.delete(
      `https://6511006f3ce5d181df5d9ab2.mockapi.io/Redux_toolkit_Api/${id}`
    );
    console.log("i am res.data", res?.data);
    return res?.data;
  } catch (error) {
    console.log("i am ERROR", error);
  }
});
// post user
export const postApi = createAsyncThunk(
  "postApi/user",
  async (user, { rejectWithValue }) => {
    const res = await axios.post(
      "https://6511006f3ce5d181df5d9ab2.mockapi.io/Redux_toolkit_Api",
      {
        name: user.name,
        fatherName: user.fatherName,
        email: user.email,
        password: user.password,
      }
    );
    try {
      return res?.data;
    } catch (error) {
      return rejectWithValue("i am ERROR", error);
    }
  }
);

// get all users user
export const getUserApi = createAsyncThunk("getUser/Api", async () => {
  const res = await axios.get(
    "https://6511006f3ce5d181df5d9ab2.mockapi.io/Redux_toolkit_Api"
  );
  try {
    console.log("i am res.data", res?.data);
    return res?.data;
  } catch (error) {
    console.log("i am ERROR", error);
  }
});

// update user
export const updateUser = createAsyncThunk(
  "updateuser/api",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `https://6511006f3ce5d181df5d9ab2.mockapi.io/Redux_toolkit_Api/${data.id}`,
        data
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const apiCrudReducer = createSlice({
  name: "api",
  initialState,
  reducers: {
    searchUser: (state, action) => {
      state.search = action.payload;
      // state.userApiData.filter((item) => item?.name === action.payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(postApi.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(postApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        console.log("I AM STATE.DATA", action.payload);
        state.users.push(action.payload);
      })
      .addCase(postApi.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.users = action.payload;
      })
      .addCase(getUserApi.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getUserApi.fulfilled, (state, action) => {
        state.userApiData = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(getUserApi.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
      })
      // delete user
      .addCase(deleteUser.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        const { id } = action.payload;
        if (id) {
          state.userApiData = state.userApiData.filter(
            (item) => item.id !== id
          );
          console.log("i am users" + state.users);
        }
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
      })
      .addCase(updateUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.userApiData = state.userApiData.map((item) => {
          item?.id === action.payload?.id ? action.payload : item;
        });
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.userApiData = action.payload.message;
      });
  },
});

export default apiCrudReducer.reducer;
export const { searchUser } = apiCrudReducer.actions;
