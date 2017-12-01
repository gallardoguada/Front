import { Component, OnInit } from '@angular/core';

import{Registrado} from 'D:/ProyectoInfo18112017/Front/FrontEndInformatorio/src/app/registrado';
/*El import{registrado} importa (valga la redundancia) la clase registrado definido en campos.ts*/

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})


export class RegistroComponent implements OnInit {


  model = new Registrado ('','','','','',''); /*Crea un MODELO de registrado y se le asigna valores iniciales según campos tenga*/

  submitted = false; /*variable submitted tipo booleana, inicializada en falso */


  onSubmit(){ /*Función establecida que pone la variable submitted en verdadero, cuando se la llame */
    this.submitted = true;
  }

  constructor() { }

  ngOnInit() {
  }

}
