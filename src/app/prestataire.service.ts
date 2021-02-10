import { Injectable } from '@angular/core';
import { HttpClient , HttpParams , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrestataireService {

   constructor(private http: HttpClient ) {}

   getServiceList(): Observable<any> {
       return this.http.get('http://localhost:8081/prestation');
   }
   private baseUrlPres = 'http://localhost:8081/prestation/Get';
   getPrestation(id: number): Observable<any> {
      return this.http.get(`${this.baseUrlPres}/${id}`);
   }
   private baseUrlDemo = 'http://localhost:8081/demonstration';
   getDemonstrationByID(id: number): Observable<any> {
         return this.http.get(`${this.baseUrlDemo}/${id}`);
   }
   getTypeServiceList(): Observable<any> {
          return this.http.get('http://localhost:8081/prestation/types');
    }

    getDemonstrationList(): Observable<any> {
              return this.http.get('http://localhost:8081/demonstration/GetDemonstrations');
    }

    getClientsList(): Observable<any> {
                  return this.http.get('http://localhost:8081/clients/getclients');
    }

    getrequest(type: String, client: String,prix: number): Observable<any> {
          const headers = new HttpHeaders()
                       .set('Authorization', 'Basic xpto')
                       .set('Content-Type', 'application/x-www-form-urlencoded');
       if(client!=null && type!=null){
       const params = new HttpParams()
         .set('type', type.valueOf())
         .set('client', client.valueOf())
         .set('prix',prix.toString());

              const httpOptions = {
                headers,
                params

              };
              // return this.http.post('http://localhost:80/demande', {params} , new FormData(), headers);
              return this.http.post<Response>(`http://localhost:8081/demonstration/search`,  new FormData(), httpOptions );
       }
       else if(client!=null && type==null){
         const params = new HttpParams()
                        .set('client', client.valueOf())
                        .set('prix',prix.toString());


              const httpOptions = {
                headers,
                params

              };
              return this.http.post<Response>(`http://localhost:8081/demonstration/search`,  new FormData(), httpOptions );
       }
       else if(client==null && type!=null){
          const params = new HttpParams()
         .set('type', type.valueOf())
         .set('prix',prix.toString());



                const httpOptions = {
                  headers,
                  params

                };
        return this.http.post<Response>(`http://localhost:8081/demonstration/search`,  new FormData(), httpOptions );
       }
       else {
         const params = new HttpParams()
                .set('prix',prix.toString());


                       const httpOptions = {
                         headers,
                         params

                       };
               return this.http.post<Response>(`http://localhost:8081/demonstration/search`,  new FormData(), httpOptions );

       }


     }



}
