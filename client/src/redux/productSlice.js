import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProductData = createAsyncThunk(
  "products/fetchProductData",
  async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:5000/api/products/getAll"
      );
      // console.log("this is daaaaaaaata",response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [], // Initial product state
    loading: false,
    data: [],
    error: null,
  },
  reducers: {
    // setProduct: (state, action) => {
    //   state.products = action.payload; // Set the product data
    // }
  },
  extraReducers(builder){
    builder.addCase(fetchProductData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProductData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(fetchProductData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default productSlice.reducer;
