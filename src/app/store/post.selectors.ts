import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostState } from './post.reducer';

export const selectPostState = createFeatureSelector<PostState>('posts');

export const selectAllPosts = createSelector(
  selectPostState,
  (state: PostState) => state.posts
);