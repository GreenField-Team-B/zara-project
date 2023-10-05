import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
  user: null, // Initial user state
  product:[],
  loading: false,
  data: [],
  error: null,
};

export const fetchProductData = createAsyncThunk('user/fetchProductData',
async () => {
const response = await axios.get('http://127.0.0.1:5000/api/product/getAll')
return response.data
})


const userSlice = createSlice({
  name: 'user',
  name: 'products',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload; // Set the user data
      state.product = action.payload
    },
    clearUser: (state) => {
      state.user = null; // Clear user data
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


export const { setUser, clearUser } = userSlice.actions;
export const selectUser = (state) => state.user.user; // Selector to get user data

export default userSlice.reducer;
