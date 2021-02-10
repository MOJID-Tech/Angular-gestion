import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { HttpInterceptorService } from './httpInterceptor.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { InscriptionComponent } from './inscription/inscription.component';
import { AuthenticationService } from './login/auth.service';
import { RegisterService } from './inscription/register.service';
import { ServicesprestataireComponent } from './servicesprestataire/servicesprestataire.component';
import { AddserviceComponent } from './addservice/addservice.component';
import { SlidemenuComponent } from './slidemenu/slidemenu.component';
import { ListeprestationsComponent } from './listeprestations/listeprestations.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OffresclientComponent } from './offresclient/offresclient.component';
import { DetailsprestationsComponent } from './detailsprestations/detailsprestations.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    InscriptionComponent,
    ServicesprestataireComponent,
    AddserviceComponent,
    SlidemenuComponent,
    ListeprestationsComponent,
    OffresclientComponent,
    DetailsprestationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers: [AuthenticationService,RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
