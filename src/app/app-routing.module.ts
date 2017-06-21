import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LigneComponent } from './ligne/ligne.component';
import { ItineraireComponent } from './itineraire/itineraire.component';
import { TraficComponent } from './ligne/trafic/trafic.component';

const routes: Routes = [
  { path: 'itineraire/:type/:line', component:ItineraireComponent  },
  { path: 'trafic', component:TraficComponent  },
  { path: 'horaires/:type/:line', component:LigneComponent  },
  { path: '', redirectTo: '/trafic', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
