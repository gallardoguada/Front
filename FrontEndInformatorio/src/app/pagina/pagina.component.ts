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

  parseBody(body:string) {
    // you will need to improve this regex.
    return body.replace(/(http.*?\s)/, "<a href=\"$1\" target=blank >$1</a>")
  }

  posts = [];
  
  ngOnInit() {
    this.BlogService.getPosts().subscribe(responsePosts => this.posts = responsePosts); 
  }

}