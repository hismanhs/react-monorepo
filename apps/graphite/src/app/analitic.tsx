import { createSlice } from '@reduxjs/toolkit';

interface Post {
  id: number;
  title: string;
}

export const initialState: {
  loading: boolean;
  hasErrors: boolean;
  posts: Post[];
} = {
  loading: false,
  hasErrors: false,
  posts: [],
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPosts: (state) => {
      state.loading = true;
    },
    getPostsSuccess: (state, { payload }) => {
      state.posts = [...state.posts, payload];
      state.loading = false;
      state.hasErrors = false;
    },
    getPostsFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const { getPosts, getPostsSuccess, getPostsFailure } =
  postsSlice.actions;
export const postsSelector = (state: any) => state.posts;
export default postsSlice.reducer;
