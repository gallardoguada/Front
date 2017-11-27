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

   cargardetalles(){
     this.mensajeDelHijo.emit('detalledecursos')
   }

  constructor(private CursosService: CursosService) { }
  
  cursos = [];

  ngOnInit() {
this.CursosService.getCursos().subscribe(   ResponseCursos => this.cursos=ResponseCursos);

  }

}

