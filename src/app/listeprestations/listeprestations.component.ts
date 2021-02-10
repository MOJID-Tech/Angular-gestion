import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prestation } from '../models/prestation';
import { PrestataireService } from '../prestataire.service';
import { Typeservice } from '../models/typeservice';
import { Client } from '../models/client';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-listeprestations',
  templateUrl: './listeprestations.component.html',
  styleUrls: ['./listeprestations.component.css']
})
export class ListeprestationsComponent implements OnInit {

   prestations: Observable<Prestation[]>;
   types: Observable<Typeservice[]>;
   clients : Observable<Client[]>;
   nomtype : String = null;
   fullname : String = null;
   prixsaisie : number =0;
   ngOnInit() { this.reloadData(); }
   constructor(private prestataireService: PrestataireService,
   private router: Router) { }

    reloadData() {
       this.prestations = this.prestataireService.getServiceList();
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

      onOptionsSelectedPrix(value:String)
      {


       //    prix : number = parseInt(value, 10);
           let strToNum = new Number(value); // Number {2}
            if(strToNum!=0)
            {
                 this.prestations=  this.prestations.pipe (
                  map(prestations =>
                  prestations.filter(prestation => prestation.prix <= strToNum)));

             }

             //this.prestations = this.prestataireService.getServiceList();

            if(this.fullname!=null && this.nomtype!=null)
                       this.prestations = this.prestataireService.getServiceList();

      }

      onOptionsSelected(value:String){
           console.log("the selected value is " + value);
           this.fullname=value;

           if(this.fullname!=null)
          {

             if(this.fullname!=null)
               this.prestations = this.prestataireService.getServiceList();
                this.prestations=  this.prestations.pipe (
                   map(prestations =>
                      prestations.filter(prestation => prestation.client.nom_client==this.fullname)));

               }

      }
     onOptionsSelectedType(value:String){
            console.log("the selected value is " + this.prixsaisie);
            this.nomtype=value;

            if(this.nomtype!=null)
            {

              if(this.fullname!=null)
                          this.prestations = this.prestataireService.getServiceList();
              this.prestations= this.prestations.pipe (
              map(prestations =>
              prestations.filter(prestation => prestation.typeService.nom==this.nomtype)));
           }
      }

      Search()
      {
/*
         if(this.nomtype!=" ")
          {
             this.prestations=this.prestations.filter(res=>
             {
               return res.typeservice.nom.toLocaleLowerCase().match(this.nomtype.toLocaleLowerCase());

             });
          }
*/
/*

          if(this.nomtype==null && this.fullname==null && this.prixsaisie==0)
                this.prestations = this.prestataireService.getServiceList();
          else if(this.nomtype!=null || this.fullname!=null || this.prixsaisie!=0)
           {
             /*
            if(this.nomtype!=null)
            {
             this.prestations= this.prestations.pipe (
                        map(prestations =>
                         prestations.filter(prestation => prestation.typeService.nom==this.nomtype)));
             }
           */

  /*
             if(this.fullname!=null)
             {
             this.prestations=  this.prestations.pipe (
                                   map(prestations =>
                                      prestations.filter(prestation => prestation.client.nom_client==this.fullname)));

             }
             //ngOnInit

              if(this.prixsaisie!=0)
              {
                   this.prestations=  this.prestations.pipe (
                             map(prestations =>
                             prestations.filter(prestation => prestation.prix <= 500)));

              }

            }


*/
  this.prixsaisie=0;
  this.nomtype=null;
  this.fullname=null;
/*
          if(this.fullname!=" ")
           {
             this.prestations=  this.prestations.pipe (
                      map(prestations =>
                         prestations.filter(prestation => prestation.client.nom_client==this.fullname)));
            }
*/

          //   else this.prestations = this.prestataireService.getServiceList();
/*
            if(this.nomtype!=" ")
            {
                         this.prestations=  this.prestations.pipe (
                                    map(prestations =>
                                     prestations.filter(prestation => prestation.prix < = this.prixsaisie)));


            }

  */
          /*return  this.prestations.map(prestations => prestations.filter(res => res.client.nom_client.toLocaleLowerCase()).match(this.fullname));
;
*/



      }
}
