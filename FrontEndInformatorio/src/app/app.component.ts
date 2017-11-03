import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Informatorio 2017';

  metodoMensajePadre(mensaje){
    this.title = mensaje;
    console.log(this.title);
  }
}
