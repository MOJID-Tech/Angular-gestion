import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class RegisterService {

 constructor(private http: HttpClient) {

 }

   registerService(nom: string, prenom: string,daten: Date,tel: string,addr: string,email: string,password: string) {
             var datenaissance=daten.toString();
             const params = new HttpParams()
                 .set('nom', nom)
                 .set('prenom', prenom)
                 .set('daten', datenaissance)
                 .set('tel', tel)
                 .set('adresse',addr)
                 .set('email', email)
                 .set('password', password)
                 ;
               const headers = new HttpHeaders()
                 .set('Authorization', 'Basic xpto')
                 .set('Content-Type', 'application/x-www-form-urlencoded');

               const httpOptions = {
                 headers,
                 params
                };
      return this.http.post<Response>(`http://localhost:8080/clients/register`,  new FormData(), httpOptions );
   }

}
