import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable, combineLatest } from 'rxjs';
import { Post } from '../../models/post.model';
import { deletePost, loadPosts } from '../../store/post.actions';
import { selectAllPosts } from '../../store/post.selectors';
import { Router } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { MaterialModule } from '../../module/Matérial.module';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule, MaterialModule,ReactiveFormsModule],
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts$: Observable<Post[]>;
  filteredPosts$: Observable<Post[]>;
  filterControl: FormControl;

  constructor(private store: Store, private router: Router) {
    this.posts$ = this.store.select(selectAllPosts);
    this.filterControl = new FormControl('');
    this.filteredPosts$ = combineLatest([
      this.posts$,
      this.filterControl.valueChanges.pipe(startWith(''))
    ]).pipe(
      map(([posts, filterString]) =>
        posts.filter(post =>
          post.title.toLowerCase().includes(filterString.toLowerCase())
        )
      )
    );
  }

  ngOnInit(): void {
    this.store.dispatch(loadPosts());
  }

  onDelete(postId: string): void {
    if (postId) {
      this.store.dispatch(deletePost({ postId }));
    }
  }

  editPost(postId: string) {
    if (postId) {
      this.router.navigate(['/edit-post', postId]);
    }
  }
}
