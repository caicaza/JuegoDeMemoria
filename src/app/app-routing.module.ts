import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from "./inicio/inicio.component";
import {ModeQuieroJugarComponent} from "./mode-quiero-jugar/mode-quiero-jugar.component";
import {ModeRelaxComponent} from "./mode-relax/mode-relax.component";

const routes: Routes = [
  {path:'Inicio', component:InicioComponent},
  {path:'QuieroJugar', component:ModeQuieroJugarComponent},
  {path:'ModoRelax', component:ModeRelaxComponent},
  {path:'', component:InicioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
