import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BullcapitalComponent } from './bullcapital/bullcapital.component';
import { ContactoComponent } from './contacto/contacto.component';
import { EmpleosComponent } from './empleos/empleos.component';
import { PoliticasDePrivacidadComponent } from './politicas-de-privacidad/politicas-de-privacidad.component';
import { PortadaComponent } from './portada/portada.component';
import { ServiciosComponent } from './servicios/servicios.component';

const routes: Routes = [
    { path: '', component: PortadaComponent },
    { path: 'bull-capital', component: BullcapitalComponent },
    { path: 'servicios', component: ServiciosComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'empleos', component: EmpleosComponent },
    { path: 'politicas-de-privacidad', component: PoliticasDePrivacidadComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
