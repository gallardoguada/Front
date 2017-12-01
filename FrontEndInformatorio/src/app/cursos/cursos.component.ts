import { Component, OnInit } from '@angular/core';
import {CursosService} from './cursos.service';


@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {



  volver(){
    this.cursoSeleccionado = null;
  }

  cursoSeleccionado = null;

  verCurso(curso){
    this.cursoSeleccionado = curso;
    console.log(this.cursoSeleccionado);
  }

  constructor(private CursosService: CursosService) { }

  cursos = [];

  ngOnInit() {
this.CursosService.getCursos().subscribe(   ResponseCursos => this.cursos=ResponseCursos);

  }

}
