import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null, // Initial user state
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload; // Set the user data
    },
    clearUser: (state) => {
      state.user = null; // Clear user data
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export const selectUser = (state) => state.user.user; // Selector to get user data
export default userSlice.reducer;
