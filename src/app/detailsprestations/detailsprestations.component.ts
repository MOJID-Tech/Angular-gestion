;import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { Prestation } from '../models/prestation';
import { Demonstration } from '../models/demonstration';
import { PrestataireService } from '../prestataire.service';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-detailsprestations',
  templateUrl: './detailsprestations.component.html',
  styleUrls: ['./detailsprestations.component.css']
})
export class DetailsprestationsComponent implements OnInit {

   prestation: any;
     id : number ;
     startIndex : number =0;
    demos : Observable<Demonstration[]>;
   ngOnInit() { this.reloadData();     this.Repeat();
}
   constructor(private prestataireService: PrestataireService,private route:ActivatedRoute,private router: Router) { }
      Repeat() {
        setTimeout(() => {
          this.__FunctionSlide();
          this.Repeat();
        }, 2000);
      }

      __FunctionSlide() {
        const slides = Array.from(document.getElementsByClassName('mall-show-slide'));
        if (slides === []) {
          this.Repeat();
        }
        for (const x of slides) {
          const y = x as HTMLElement;
          y.style.display = 'none';
        }
        if (this.startIndex > slides.length - 1) {
          this.startIndex = 0;
          const slide = slides[this.startIndex] as HTMLElement;
          slide.style.display = 'block';
          this.startIndex++;
        } else {

          const slide = slides[this.startIndex] as HTMLElement;
          slide.style.display = 'block';
          this.startIndex++;
        }
      }
    reloadData() {
       this.id = this.route.snapshot.params['id'];
       this.prestataireService.getPrestation(this.id).subscribe(data =>  this.prestation  = data);
       this.demos=this.prestataireService.getDemonstrationByID(this.id);

    }


}
