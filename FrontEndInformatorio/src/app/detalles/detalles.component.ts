import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DetallesService} from './detalles.service';


@Component({
  selector: 'detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  @Input('cursoSelectDetalle') curosSeleccionado;



   constructor() { }

        ngOnInit() {
        }

      }

