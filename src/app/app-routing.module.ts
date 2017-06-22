import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LigneComponent } from './ligne/ligne.component';
import { ItineraireComponent } from './itineraire/itineraire.component'
import { ContentComponent } from './content/content.component';
import { TraficComponent } from './ligne/trafic/trafic.component';

import { PlansComponent } from './plans/plans.component';
import { VisiteAparisComponent } from './visite-aparis/visite-aparis.component';


const routes: Routes = [
  { path: 'itineraire/:type/:line', component:ItineraireComponent  },
  { path: 'horaires/:type/:line', component:LigneComponent  },
  { path: 'trafic', component:TraficComponent  },
  { path: 'plans', component:PlansComponent  },
  { path: 'visite-a-paris', component:VisiteAparisComponent  },
  { path: '', component:ContentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
