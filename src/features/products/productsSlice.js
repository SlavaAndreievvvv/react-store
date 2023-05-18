import axios from "axios";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { BASE_URL } from "../../utils/constants";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, thunkAPI) => {
    try {
      const res = await axios(`${BASE_URL}/products`);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    list: [],
    filtered: [],
    // related: [],
  },
  reducers: {
    filteredByPrice: (state, action) => {
      state.filtered = state.list.filter(({ price }) => price < action.payload);
    },
  },
  isLoading: false,
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.list = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getProducts.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { filteredByPrice } = productsSlice.actions;

export default productsSlice.reducer;
