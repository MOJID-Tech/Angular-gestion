import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prestation } from '../models/prestation';
import { PrestataireService } from '../prestataire.service';
import { Observable } from "rxjs";
@Component({
  selector: 'app-servicesprestataire',
  templateUrl: './servicesprestataire.component.html',
  styleUrls: ['./servicesprestataire.component.css']
})
export class ServicesprestataireComponent implements OnInit {
  prestations: Observable<Prestation[]>;

  
  
   ngOnInit() { this.reloadData(); }
   constructor(private prestataireService: PrestataireService,
   private router: Router) { }

    reloadData() {
       this.prestations = this.prestataireService.getServiceList();
     } 

}
