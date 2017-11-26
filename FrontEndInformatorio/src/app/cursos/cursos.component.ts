import { Component, OnInit } from '@angular/core';
import {CursosService} from './cursos.service';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  constructor(private CursosService: CursosService) { }
  
  cursos = [];

  ngOnInit() {
this.CursosService.getCursos().subscribe(   ResponseCursos => this.cursos=ResponseCursos);

  }

}

