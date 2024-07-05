import { createReducer, on } from '@ngrx/store';
import { Post } from './../models/post.model';
import { addPost, addPostSuccess, addPostfailed, deleteSuccess, loadPostsSuccess, updatePostFailed, updatePostSuccess } from './post.actions';
import { v4 as uuidv4 } from 'uuid';

export interface PostState {
  posts: Post[];
  error: any;
}

export const initialState: PostState = {
  posts: [],
  error: null
};

export const postReducer = createReducer(
  initialState,

  on(loadPostsSuccess, (state, { posts }) => ({ ...state, posts })),

  on(deleteSuccess, (state, { postId }) => ({
    ...state,
    posts: state.posts.filter(post => post.id !== postId)
  })),

  on(addPostSuccess, (state, { post }) => {
    const newPost: Post = {
      ...post,
      id: uuidv4()
    };
    return {
      ...state,
      posts: [...state.posts, newPost],
      error: null
    };
  }),

  on(addPostfailed, (state, { error }) => ({
    ...state,
    error
  })),

  on(updatePostSuccess, (state, { post }) => {
    const updatedPosts = state.posts.map(p => p.id === post.id ? post : p);
    return {
      ...state,
      posts: updatedPosts,
      error: null
    };
  }),

  on(updatePostFailed, (state, { error }) => ({
    ...state,
    error
  }))
);
