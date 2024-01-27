import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { PostService } from '../services/post.service';
import { DetailComponent } from '../detail/detail.component';



@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit{
  //http = inject(HttpClient);
  private postService = inject(PostService);
  
  posts: any =[];
  

  ngOnInit(): void {
    //this.fetchPosts();
    this.loadPosts();
  }
  //fetchPosts() {
  //  this.http.get('http://localhost:8081/employees')
  //  .subscribe((posts: any) => {
  //    console.log(posts);
  //    this.posts = posts;
  //  });

  //loadPosts(){
  //  this.postService.getPosts().subscribe((posts: any) => {
  //    console.log(posts)
  //    this.posts = posts;
  //  });
  //}

  loadPosts(){
    this.postService.getPosts().subscribe({
      next: (posts: any) => {
      this.posts = posts;
      console.log('Succesfully');
      },
      error: (error) => console.log("Error", error)
    })
  }

  
}



