import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  ver: boolean; 
  ocultarinfo: boolean;  
  links: boolean; 
  aniolinks; 


  proyecto = {id: null, nombre: null, anio: null, descripcion: null, desarrolladores: null, descarga: null};

   proyectos= [ {
    'anio': '2012',
    'proyecto': [
      {
        "id": "1",
        "nombre": "Proyecto 1",
        "descripcion": "Proyecto desarrollado durante el año 2012.",
        "desarrolladores": "nombre y apellido",
        "descarga": "www.descarga.com/proyecto1"
      },
      {
        "id": "2",
        "nombre": "Proyecto 2",
        "descripcion": "Proyecto desarrollado durante el año 2012.",
        "desarrolladores": "nombre y apellido",
        "descarga": "www.descarga.com/proyecto2"
      },
    ]
  },
  {
    'anio': '2013',
    'proyecto': [
      {
        "id": "3",
        "nombre": "Proyecto 3",
        "descripcion": "Proyecto desarrollado durante el año 2013.",
        "desarrolladores": "nombre y apellido",
        "descarga": "www.descarga.com/proyecto3"
      },
      {
        "id": "4",
        "nombre": "Proyecto 4",
        "descripcion": "Proyecto desarrollado durante el año 2013.",
        "desarrolladores": "nombre y apellido",
        "descarga": "www.descarga.com/proyecto4"
      },
    ]
  },
  {
    'anio': '2014',
    'proyecto': [
      {
        "id": "5",
        "nombre": "Proyecto 5",
        "descripcion": "Proyecto desarrollado durante el año 2014.",
        "desarrolladores": "nombre y apellido",
        "descarga": "www.descarga.com/proyecto5"
      },
      {
        "id": "6",
        "nombre": "Proyecto 6",
        "descripcion": "Proyecto desarrollado durante el año 2014.",
        "desarrolladores": "nombre y apellido",
        "descarga": "www.descarga.com/proyecto6"
      },
    ]
  },
  {
    'anio': '2015',
    'proyecto': [
      {
        "id": "7",
        "nombre": "Proyecto 7",
        "descripcion": "Proyecto desarrollado durante el año 2015.",
        "desarrolladores": "nombre y apellido",
        "descarga": "www.descarga.com/proyecto7"
      },
      {
        "id": "8",
        "nombre": "Proyecto 8",
        "descripcion": "Proyecto desarrollado durante el año 2015.",
        "desarrolladores": "nombre y apellido",
        "descarga": "www.descarga.com/proyecto8"
      },
    ]
  },
  {
    'anio': '2016',
    'proyecto': [
      {
        "id": "9",
        "nombre": "Proyecto 9",
        "descripcion": "Proyecto desarrollado durante el año 2016.",
        "desarrolladores": "nombre y apellido",
        "descarga": "www.descarga.com/proyecto9"
      },
      {
        "id": "10",
        "nombre": "Proyecto 10",
        "descripcion": "Proyecto desarrollado durante el año 2016.",
        "desarrolladores": "nombre y apellido",
        "descarga": "www.descarga.com/proyecto10"
      },
    ]
  }
];


  cargarProyecto(proyectoEntrada){
    this.proyecto = proyectoEntrada;
    this.ocultarinfo = true; 
  }

  constructor() { 
    this.ver = true; 
    this.ocultarinfo = false;
    this.links = false;
    this.aniolinks = 0; 
  }

  ocultar(){
    this.ver = false;
  }

  mostrar(){
    this.ver = true;  
    this.ocultarinfo = false;
  }

  link(anio){   
    this.links = !this.links;
    this.aniolinks = anio;      
  }

  ngOnInit() {
  }

} 
