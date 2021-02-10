import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prestation } from '../models/prestation';
import { PrestataireService } from '../prestataire.service';
import { Typeservice } from '../models/typeservice';
import { Demonstration } from '../models/demonstration';

import { Client } from '../models/client';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-offresclient',
  templateUrl: './offresclient.component.html',
  styleUrls: ['./offresclient.component.css']
})
export class OffresclientComponent implements OnInit {


   prestations: Observable<Prestation[]>;
   types: Observable<Typeservice[]>;
   clients : Observable<Client[]>;
   demos : Observable<Demonstration[]>;
   nomtype : String = null;
   fullname : String = null;
   prixsaisie : number =0;
   ngOnInit() { this.reloadData(); }
   constructor(private prestataireService: PrestataireService,
   private router: Router) { }

    reloadData() {
       this.prestations = this.prestataireService.getServiceList();
       this.demos = this.prestataireService.getDemonstrationList();
       this.types=this.prestataireService.getTypeServiceList();
       this.clients=this.prestataireService.getClientsList();
       //Math.max.apply(Math, this.clients.map(function(o) { return o.y; }))
       //var id = this.prestations.map.reduce((a,{prix}) => Number(prix) > a ? Number(prix) : a , -1);
     }

      /*
     selectChange(e)
      {
          this.fullname=e.target.value;
      }
       */

     getdetails(id: number){
       this.router.navigate(['details', id]);
     }

      onOptionsSelectedPrix(value:number)
      {


           //let strToNum = new Number(value); // Number {2}
           this.prixsaisie= value;
           console.log(this.prixsaisie);

       //    prix : number = parseInt(value, 10);
          /* let strToNum = new Number(value); // Number {2}
            if(strToNum!=0)
            {
                 this.prestations=  this.prestations.pipe (
                  map(prestations =>
                  prestations.filter(prestation => prestation.prix <= strToNum)));

             }
        */



      }

      onOptionsSelected(value:String){
           console.log("the selected value is " + value);
           this.fullname=value;
          /*
           if(this.fullname!=null)
          {

             if(this.nomtype!=null)
                 this.demos = this.prestataireService.getDemonstrationList();
                  /*
                 this.demos=this.demos.pipe (
                  demos.filter(demonstra => demonstra.prestation.client.nom_client==this.fullname)));
                  -/
           }
           */

        /*
            if(this.fullname!=null)
            {

             if(this.nomtype!=null)
                 this.demos = this.prestataireService.getDemonstrationList();

                        this.demos=this.demos.pipe (
                                  map(demos =>
                                  demos.filter(demonstra => demonstra.prestation.client.nom_client==this.fullname)));

           }
         */
      }
     onOptionsSelectedType(value:String){
            console.log("the selected value is " + this.prixsaisie);
            this.nomtype=value;
                        console.log("the selected value is " + this.nomtype);

              /*
            if(this.nomtype!=null)
            {

              if(this.fullname==null)
                   this.demos = this.prestataireService.getDemonstrationList();
              else
               this.demos=this.demos.pipe (
                      map(demos =>
                      demos.filter(demonstra => demonstra.prestation.client.nom_client==this.fullname)));

              this.demos=this.demos.pipe (
              map(demos =>
              demos.filter(demonstra => demonstra.prestation.typeService.nom==this.nomtype)));
           }
           */
      }

      Search()
      {
         if(this.nomtype==null && this.fullname==null)
                   this.demos = this.prestataireService.getDemonstrationList();
          else
          this.demos = this.prestataireService.getrequest(this.nomtype,this.fullname,this.prixsaisie);
      }
}
