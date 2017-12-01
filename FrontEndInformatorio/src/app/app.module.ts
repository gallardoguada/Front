import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'angular4-carousel';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component'; 
import { FormularioContactoComponent } from './formulario-contacto/formulario-contacto.component';
import { InformacionComponent } from './informacion/informacion.component';
import { CarouselComponent } from './carousel/carousel.component';
import { InformacionsidebarComponent } from './informacionsidebar/informacionsidebar.component';
import { InicioComponent } from './inicio/inicio.component';
import { PaginaComponent } from './pagina/pagina.component';
import { ContainerComponent } from './container/container.component'

import { BlogService } from './pagina/pagina.service'

import { HttpModule } from '@angular/http'
import { CursosComponent } from './cursos/cursos.component'
import {CursosService} from './cursos/cursos.service';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { IniciotabsComponent } from './iniciotabs/iniciotabs.component';
import { FotosComponent } from './fotos/fotos.component';
import { VideosComponent } from './videos/videos.component';
import { RegistroComponent } from './registro/registro.component';




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
    PaginaComponent,
    ContainerComponent,
    CursosComponent,
    PaginaInicioComponent,
    IniciotabsComponent,
    FotosComponent,
    VideosComponent,
    RegistroComponent

  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
   [CarouselModule],
   FormsModule,
   HttpModule

  ],
  providers: [BlogService, CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
