import { RouterModule, Routes } from '@angular/router';

import{CuerpoComponent} from "./cuerpo/cuerpo.component";
import { CuerpofrutasComponent } from './cuerpofrutas/cuerpofrutas.component';
import { CuerpocarnesComponent } from './cuerpocarnes/cuerpocarnes.component';
import { CuerpogranosComponent } from './cuerpogranos/cuerpogranos.component';
import { CuerpocontactenosComponent } from './cuerpocontactenos/cuerpocontactenos.component';

const app_routes: Routes = [
 
  { path: 'cuerpo', component: CuerpoComponent},
  { path: 'cuerpofrutas', component: CuerpofrutasComponent },
  { path: 'cuerpocarnes', component: CuerpocarnesComponent },
  { path: 'cuerpogranos', component: CuerpogranosComponent },
  { path: 'cuerpocontactenos', component: CuerpocontactenosComponent }, 
  { path: '**', pathMatch: 'full', redirectTo: 'cuerpo' },
];
 
export const app_routing = RouterModule.forRoot(app_routes);