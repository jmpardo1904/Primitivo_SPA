import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { MisComprasComponent } from './components/mis-compras/mis-compras.component';



const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'nosotros', component: NosotrosComponent },
    { path: 'miscompras', component: MisComprasComponent },
    { path: '**', pathMatch:'full', redirectTo:'home' }

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);