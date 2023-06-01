import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
    updateUser: (state, action) => {
      const { user } = action.payload;
      state.user = user;
    },
    setUserPreviewAvatar: (state, action) => {
      const avatar = action.payload;

      state.user.preview = avatar;
    },
  },
});

export default authSlice.reducer;

export const { setCredentials, logout, updateUser, setUserPreviewAvatar } =
  authSlice.actions;

export const selectCurrentToken = (state) => state.auth.token;
export const selectCurrentUser = (state) => state.auth.user;
