import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts = createAsyncThunk(
  "getAllProducts",
  async (obj, { dispatch, getState, rejectWithValue, fulfillWithValue }) => {
    try {
      const res = await axios.get("http://localhost:8000/api/products/");
      const formattedRes = res.data;
      return fulfillWithValue(formattedRes);
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
