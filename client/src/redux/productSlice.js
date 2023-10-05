import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
  products:[],// Initial product state
  loading: false,
  data: [],
  error: null,
};

export const fetchProductData = createAsyncThunk('products/fetchProductData',
async () => {
const response = await axios.get('http://127.0.0.1:5000/api/products/getAll')
return response.data
})


const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.products = action.payload; // Set the product data
    },
    extraReducers: (builder) => {
builder.addCase(fetchProductData.pending,(state) => {
   state.loading = true
})
builder.addCase(fetchProductData.fulfilled,(state,action) => {
  state.loading = false
  state.data = action.payload
})
builder.addCase(fetchProductData.rejected,(state,action) => {
  state.loading = false
  state.error = action.error.message
})
    }
  },
});


export const { setProduct} = productSlice.actions;
export const selectProducts = (state) => state.products.products; // Selector to get products data

export default productSlice.reducer;
