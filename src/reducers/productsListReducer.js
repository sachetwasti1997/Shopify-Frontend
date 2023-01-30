import { createSlice } from "@reduxjs/toolkit";
import { getAllProducts } from "../actions/productsActions";

const productListSlice = createSlice({
  name: "productList",
  initialState: {
    products: [],
    isLoading: true,
    errorRes: null,
  },
  extraReducers(builder) {
    builder
    .addCase(getAllProducts.rejected, (state, action) => {
      state.isLoading = false
      state.errorRes = action.payload
    })
    .addCase(getAllProducts.fulfilled, (state, action) => {
      state.isLoading = false
      state.products = action.payload
    })
  },
});
console.log(productListSlice.reducer);
export default productListSlice.reducer;
