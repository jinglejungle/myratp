import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LigneComponent } from './ligne/ligne.component';
import { ItineraireComponent } from './itineraire/itineraire.component'
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  { path: 'itineraire/:type/:line',   component:ItineraireComponent  },
  { path: 'horaires/:type/:line',        component:LigneComponent  },
  { path: '',   component:ContentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
