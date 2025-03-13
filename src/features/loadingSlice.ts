import { createSlice } from '@reduxjs/toolkit';

export interface LoadingState {
  loading: boolean;
}

const initialState: LoadingState = {
  loading: true,
};

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.loading = action.payload;
    },
  },
});

export const {} = loadingSlice.actions;
export default loadingSlice.reducer;
