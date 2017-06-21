import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SelectModule } from 'ng2-select';
import { AgmCoreModule } from 'angular2-google-maps/core';

/*import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations.d';*/

import { ApiBusService } from 'app/apiRatp.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { LigneComponent } from './ligne/ligne.component';
import { RechercheComponent } from './ligne/recherche/recherche.component';
import { LigneMapComponent } from './ligne/ligne-map/ligne-map.component';
import { LigneHorairesComponent } from './ligne/ligne-horaires/ligne-horaires.component';
import { ItineraireComponent } from './itineraire/itineraire.component';
import { TraficComponent } from './ligne/trafic/trafic.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FormItiComponent } from './form-iti/form-iti.component';
import { AlertModule} from 'ngx-bootstrap';
import { DatepickerModule } from 'ngx-bootstrap' ;


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    LigneComponent,
    RechercheComponent,
    LigneMapComponent,
    LigneHorairesComponent,
    ItineraireComponent,
    TraficComponent,
    AccueilComponent,
    FormItiComponent
  ],
  imports: [
    DatepickerModule.forRoot(),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AlertModule.forRoot(),
    
    AppRoutingModule,
    SelectModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBA78Ji7rLOc2othaLzbmoJiOREf_r0sQg'
    }), // JS apikey
    /*BrowserAnimationsModule,
    NoopAnimationsModule*/
  ],
  providers: [ApiBusService],
  bootstrap: [AppComponent]
})
export class AppModule { }