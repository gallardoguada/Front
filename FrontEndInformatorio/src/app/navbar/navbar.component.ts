import { Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() mensajeDelHijo = new EventEmitter();

    evento=null;

    cargarPaginainicio(){
      this.mensajeDelHijo.emit('pagina-inicio');
    }
  
    cargarInformacion(){
      this.mensajeDelHijo.emit('informacion');
    }
  
    cargarProyectos(){
      this.mensajeDelHijo.emit('proyectos');
    }

    cargarformulariocontacto(){
      this.mensajeDelHijo.emit('formulario');
    }
    cargarcursos(){
    this.mensajeDelHijo.emit('cursos');  
    }
    cargarpagina(){
      this.mensajeDelHijo.emit('pagina');
    }
        

    
  constructor() { }

  ngOnInit() {
  }

}
