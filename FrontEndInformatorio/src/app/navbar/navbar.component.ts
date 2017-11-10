import { Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() mensajeDelHijo = new EventEmitter();
  
    cargarInformacion(){
      this.mensajeDelHijo.emit('informacion');
    }
  
    cargarProyectos(){
      this.mensajeDelHijo.emit('proyectos');
    }

    cargarformulariocontacto(){
      this.mensajeDelHijo.emit('formulario');
    }
    cargarCursos(){
      this.mensajeDelHijo.emit('curso');
    }

  constructor() { }

  ngOnInit() {
  }

}
