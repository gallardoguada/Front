import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any; 

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit {
  

 Cargarfotos(){
 (function(d, s, id){var js; if (d.getElementById(id)) 
  {return;} js = d.createElement(s); 
  js.id = id; js.src = "https://embedsocial.com/embedscript/ei.js"; 
  d.getElementsByTagName("head")[0].appendChild(js);}(document, "script", "EmbedSocialScript")); 
}
  
  constructor() { }

  ngOnInit() {
    this.Cargarfotos()
    
  }

}