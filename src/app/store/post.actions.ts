import { createAction, props } from '@ngrx/store';
import { Post } from './../models/post.model';

export const loadPosts = createAction('[Post] Load Posts');
export const loadPostsSuccess = createAction('[Post] Load Posts Success',props<{ posts: Post[] }>());
export const loadPostsFailure = createAction('[Post] Load Posts Failure',props<{ error: any }>());  

export const deletePost = createAction('[Post list] Delete Post' , props<{postId:string}>());
export const deleteSuccess = createAction('[Post list] Delete post success', props<{postId:string}>());
export const deletePostfailed = createAction('[Post list] Delete post failed',props<{error:any}>());

export const addPost = createAction('[Add Post ] Delete Post' , props<{post:Post}>());
export const addPostSuccess = createAction('[Add Post success] Delete post success', props<{post:Post}>());
export const addPostfailed = createAction('[Add Post fail] Delete post failed',props<{error:any}>());


export const updatePost = createAction('[Post] Update Post',props<{ post: Post }>());
export const updatePostSuccess = createAction('[Post] Update Post Success',props<{ post: Post }>());
export const updatePostFailed = createAction('[Post] Update Post Failed',props<{ error: any }>())

