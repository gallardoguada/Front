import { Component, OnInit } from '@angular/core';
import {DetallesService} from './detalles.service';


@Component({
  selector: 'detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
  detalles: any;

  constructor(private DetallesService: DetallesService) { }
  
  cursos = [];

  ngOnInit() {
this.DetallesService.getDetalles().subscribe(   ResponseDetalles => this.detalles=ResponseDetalles);

  }

}
