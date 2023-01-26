import { createSlice } from "@reduxjs/toolkit";
import { getAllProducts } from "../actions/productsActions";

const productListSlice = createSlice({
  name: "productList",
  initialState: {
    products: [],
    isLoading: false,
    errorRes: null,
  },
  extraReducers(builder) {
    builder
    .addCase(getAllProducts.rejected, (state, action) => {
      state.isLoading = false
      state.errorRes = action.payload
    })
    .addCase(getAllProducts.pending, (state) => {
      state.isLoading = true
    })
    .addCase(getAllProducts.fulfilled, (state, action) => {
      state.isLoading = false
      state.products = action.payload
    })
  },
});

export default productListSlice.reducer;
