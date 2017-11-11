import { Component, OnInit } from '@angular/core';
import { BlogService } from "./pagina.service"; 

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {

  constructor( private BlogService: BlogService) { 

  }

  posts = [];
  
  ngOnInit() {
    this.BlogService.getPosts().subscribe(responsePosts => this.posts = responsePosts); 
  }

}