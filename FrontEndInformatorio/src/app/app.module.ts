import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'angular4-carousel';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component'; 
import { FormularioContactoComponent } from './formulario-contacto/formulario-contacto.component';
import { InformacionComponent } from './informacion/informacion.component';
import { CarouselComponent } from './carousel/carousel.component';
import { InformacionsidebarComponent } from './informacionsidebar/informacionsidebar.component';
import { InicioComponent } from './inicio/inicio.component'

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent, 
    FormularioContactoComponent,
    InformacionComponent,
    InformacionsidebarComponent,
    InicioComponent,
    CarouselComponent,

  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
   [CarouselModule]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
