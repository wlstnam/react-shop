import { createSlice } from "@reduxjs/toolkit";

// 초기 상태 정의
const initialState = {
  user: null,
  isAuthenticated: false,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});
export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
