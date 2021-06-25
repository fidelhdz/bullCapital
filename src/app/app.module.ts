import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { TestimonialsComponent } from './template/testimonials/testimonials.component';
import { ContactComponent } from './template/contact/contact.component';
import { WeOfferComponent } from './template/we-offer/we-offer.component';
import { HomeComponent } from './home/home.component';
import { PortadaComponent } from './portada/portada.component';
import { BullcapitalComponent } from './bullcapital/bullcapital.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PoliticasDePrivacidadComponent } from './politicas-de-privacidad/politicas-de-privacidad.component';
import { EmpleosComponent } from './empleos/empleos.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        TestimonialsComponent,
        ContactComponent,
        WeOfferComponent,
        HomeComponent,
        PortadaComponent,
        BullcapitalComponent,
        ServiciosComponent,
        ContactoComponent,
        PoliticasDePrivacidadComponent,
        EmpleosComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CarouselModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
