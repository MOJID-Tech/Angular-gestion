import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { Routes, RouterModule } from '@angular/router';
import { ServicesprestataireComponent } from './servicesprestataire/servicesprestataire.component';
import { AddserviceComponent } from './addservice/addservice.component';
import { ListeprestationsComponent } from './listeprestations/listeprestations.component';
import { OffresclientComponent } from './offresclient/offresclient.component';
import { DetailsprestationsComponent } from './detailsprestations/detailsprestations.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'inscription', component: InscriptionComponent},
  {path: 'offres', component: ServicesprestataireComponent},
  {path: 'addoffre', component: AddserviceComponent},
  {path: 'services', component: ListeprestationsComponent},
  {path: 'accueil', component: OffresclientComponent},
  {path: 'details/:id', component: DetailsprestationsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
