import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NabvarComponent } from './components/shared/nabvar/nabvar.component';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { MisComprasComponent } from './components/mis-compras/mis-compras.component';

// RUTAS
import { APP_ROUTING } from './app.routes';





// COMPONENTES





//SERVICIOS
@NgModule({
  declarations: [
    AppComponent,
    NabvarComponent,
    HomeComponent,
    NosotrosComponent,
    MisComprasComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
