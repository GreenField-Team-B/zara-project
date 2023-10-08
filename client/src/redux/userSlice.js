import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const sendTokenToServer = async (token) => {
  try {
    const response = await axios.post('http://127.0.0.1:5000/api/user/token', { token });
    return response.data; // Assuming the server responds with the user object.
  } catch (error) {
    throw error; // Handle errors appropriately.
  }
};


// userSlice.js

const userSlice = createSlice({
  name: 'user',
  initialState: null, // Initial state can be null or an empty object.
  reducers: {
    setUser: (state, action) => {
      return action.payload; // Set the user object in the state.
    },
  },
});


// Thunk function
export const verifyTokenAndSetUser = (token) => async (dispatch) => {
  try {
    const user = await sendTokenToServer(token); // Use the Axios function from step 1.
    dispatch(setUser(user)); // Dispatch the setUser action with the user object.
  } catch (error) {
    console.error(error)
  }
};


// to get user's object in all components use:
// 
// import { useSelector } from 'react-redux'
// 
// const user = useSelector((state) => state.user);
export const { setUser } = userSlice.actions;
export default userSlice.reducer;
