import { Component, OnInit, inject } from '@angular/core';
import { DetailService } from '../services/detail.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostComponent } from '../post/post.component';
import { isEmpty } from 'rxjs';
import { PostService } from '../services/post.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit{
  private detailService = inject(DetailService);
  
  private postService = inject(PostService);
  posts: any =[];

  details: any =[];
  id: number = 0;
  textValue: string = '';
  mostrarTabla: boolean = false;
  mostrarTablaPosts: boolean = true;
  

  ngOnInit(): void {
    //this.loadDetails(this.textValue);
     this.search(this.textValue);
    //this.search(1);
    this.loadPosts();
    
  }

  // loadDetails(textValue: number){
  //   this.detailService.getDetails(textValue).subscribe({
  //     next: (posts: any) => {
  //     this.posts = posts;
  //     console.log('Succesfully details');
  //     },
  //     error: (error) => console.log("Error", error)
  //   })
  //}
  search(textValue: string) {
    if (Number(textValue).valueOf() > 0 && Number(textValue).valueOf() < 25) {
      this.mostrarTabla = true;
      this.mostrarTablaPosts = false;
      this.detailService.getDetails(Number(textValue).valueOf()).subscribe({
        next: (details: any) => {
        this.details = details;
        console.log('Succesfully details');
        },
        error: (error) => console.log("Error", error)
      })
      swal("Detalles del empleado");
    }   
    else
    {
      this.mostrarTabla = false;
      this.mostrarTablaPosts = true;
    }
  }
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


