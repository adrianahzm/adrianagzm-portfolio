import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent implements OnInit {
  public dataServices = [
    {
      titulo1: 'SEO Organico',
      titulo2: 'Pocisionamiento y optimización de texto',
      icono: 'fas fa-th-large',
      modalInfo: [
        {
          nombre: 'Crecimiento en Palabras Orgánicas',
        },
        {
          nombre: 'Posicionamiento en redes sociales',
        },
        {
          nombre: 'Aumento en la Visibilidad en Línea',
        },
        {
          nombre: 'Optimización para una Mejor Legibilidad',
        },
      ],
    },
    {
      titulo1: 'Desarrollador',
      titulo2: 'Web',
      icono: 'fas fa-code',
      modalInfo: [
        {
          nombre: 'Creativo desarrollador de experiencia de usuario',
        },
        {
          nombre: 'Desarrollador de interface de usuario',
        },
        {
          nombre: 'Desarrollador de paginas web',
        },
        {
          nombre: 'desrrollador de backend',
        },
      ],
    },
    {
      titulo1: 'Campañas en',
      titulo2: 'redes sociales',
      icono: 'fas fa-pencil-alt',
      modalInfo: [
        {
          nombre: 'Creativo desarrollador de experiencia de usuario',
        },
        {
          nombre: 'Desarrollador de interface de usuario',
        },
        {
          nombre: 'Desarrollador de paginas web',
        },
        {
          nombre: 'desrrollador de backend',
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
