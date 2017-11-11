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
import { InicioComponent } from './inicio/inicio.component';
<<<<<<< HEAD
import { PaginaComponent } from './pagina/pagina.component';
import { ContainerComponent } from './container/container.component'

import { BlogService } from './pagina/pagina.service'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
=======
import { CursosComponent } from './cursos/cursos.component'
import {CursosService} from './cursos/cursos.service';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

>>>>>>> afed100d1a8a73bd9192f99d7d4a00022f77d61d


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
<<<<<<< HEAD
    PaginaComponent,
    ContainerComponent,
=======
    CursosComponent,
>>>>>>> afed100d1a8a73bd9192f99d7d4a00022f77d61d

  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
   [CarouselModule],
   FormsModule,
<<<<<<< HEAD
   HttpModule

  ],
  providers: [BlogService],
=======
   HttpModule,
  ],
  providers: [CursosService],
>>>>>>> afed100d1a8a73bd9192f99d7d4a00022f77d61d
  bootstrap: [AppComponent]
})
export class AppModule { }
