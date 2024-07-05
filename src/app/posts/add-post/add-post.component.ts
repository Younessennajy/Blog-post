import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router, RouterModule } from '@angular/router';
import { NotificationService } from '../../notification.service';
import { addPost } from '../../store/post.actions';
import { Post } from '../../models/post.model';
import { MaterialModule } from '../../module/Matérial.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-post',
  imports : [
    RouterModule,
    MaterialModule
  ],
  standalone:true,
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  title: string = '';
  content: string = '';
  postForm: FormGroup;
  imageUrl: string | ArrayBuffer | null = null;

  constructor(
    private store: Store<{ posts: { posts: Post[] } }>,
    private router: Router,
    private formBuilder: FormBuilder,
    private notificationService: NotificationService
  ) {
      this.postForm = this.formBuilder.group({
        title: ['', Validators.required],
        content: ['', Validators.required]
      });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    const newPost: Post = {
      img: this.imageUrl as string,
      title: this.title,
      content: this.content
    };

    this.store.dispatch(addPost({ post: newPost }));
    this.title = '';
    this.content = '';
    this.imageUrl = null; 
    this.notificationService.showSuccess('Post added successfully!');
    this.router.navigate(['/']);
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageUrl = reader.result;
      };
    }
  }
}
