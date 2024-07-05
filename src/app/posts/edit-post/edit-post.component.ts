import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Post } from '../../models/post.model';
import { updatePost } from '../../store/post.actions';
import { map } from 'rxjs/operators';
import { NotificationService } from '../../notification.service';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../module/Matérial.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-post',
  standalone:true,
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
  imports:[
    CommonModule,
    MaterialModule,
    FormsModule
  ]
})
export class EditPostComponent implements OnInit {
  post: Post | undefined;

  constructor(private route: ActivatedRoute, 
    private store: Store<{ posts: Post[] }>,
    private router: Router,
    private notificationService:NotificationService
  ) {}

  ngOnInit(): void {
    const postId = this.route.snapshot.paramMap.get('id') as string;
    if (postId) {
      this.store.select('posts').pipe(
        map((postsState: any) => {
          if (Array.isArray(postsState.posts)) {
            return postsState.posts;
          }
          return [];
        })
      ).subscribe(posts => {
        const originalPost = posts.find((p: Post) => p.id === postId);
        if (originalPost) {
          this.post = { ...originalPost }; 
        }
      });
    }
  }

  onUpdatePost() {
    if (this.post) {
      this.store.dispatch(updatePost({ post: this.post }));
    this.notificationService.showSuccess('Post updated successfully!');
      this.router.navigate(['/']);
    }
  }
}