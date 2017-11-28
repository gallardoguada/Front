import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {CursosService} from './cursos.service';


@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  @Output() mensajeDelHijo = new EventEmitter();

   evento = null;
   cursoSeleccionado = null;
   mostrarCurso = false;
   enable = false;

   cargardetalles(cursoEntra){
     //this.mensajeDelHijo.emit('detalledecursos')
     this.enable = true;
     console.log(this.cursoSeleccionado);
     
   }

  constructor(private CursosService: CursosService) { }
  
  cursos = [];

  ngOnInit() {
this.CursosService.getCursos().subscribe(   ResponseCursos => this.cursos=ResponseCursos);

  }

}

