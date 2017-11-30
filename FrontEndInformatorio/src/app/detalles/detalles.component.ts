import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DetallesService} from './detalles.service';


@Component({
  selector: 'detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
  
    @Output() mensajeDelHijo = new EventEmitter();
  
      evento=null;
  
      cargarCursos(){
        this.mensajeDelHijo.emit('cursos');  
        }
      
   constructor() { }
      
        ngOnInit() {
        }
      
      }
   
    