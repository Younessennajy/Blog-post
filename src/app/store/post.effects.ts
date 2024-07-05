import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { loadPosts, loadPostsSuccess, loadPostsFailure,deletePost,deleteSuccess, deletePostfailed, addPost, addPostSuccess, addPostfailed, updatePost, updatePostSuccess, updatePostFailed } from './../store/post.actions';
import { Post } from './../models/post.model';


@Injectable()
export class PostEffects {
    constructor(private actions$: Actions, 
    private http: HttpClient) {}

  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPosts),
      mergeMap(() =>
        this.http.get<Post[]>('http://localhost:3000/posts').pipe(
            map(posts => loadPostsSuccess({ posts })),
            catchError(error => of(loadPostsFailure({ error })))
          )
        )
      )
    );
    deletePost$ = createEffect(()=>
        this.actions$.pipe(
            ofType(deletePost),
            mergeMap(action =>
                this.http.delete(`http://localhost:3000/posts/${action.postId}`).pipe(
                    map(()=>deleteSuccess({postId:action.postId})),
                    catchError(error=>of(deletePostfailed({error})))
                )
            )
        )
    );

    addPost$ = createEffect(() =>
        this.actions$.pipe(
          ofType(addPost),
          mergeMap(action =>
            this.http.post<Post>('http://localhost:3000/posts', action.post).pipe(
              map((post: Post) => addPostSuccess({ post })),
              catchError(error => of(addPostfailed({ error })))
            )
          )
        )
      );

      updatePost$ = createEffect(() =>
        this.actions$.pipe(
          ofType(updatePost),
          mergeMap(action =>
            this.http.put<Post>(`http://localhost:3000/posts/${action.post.id}`, action.post).pipe(
              map((post: Post) => updatePostSuccess({ post })),
              catchError(error => of(updatePostFailed({ error })))
            )
          )
        )
      );
  }