import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../models/service';
import { Typeservice } from '../models/typeservice';
import { Demonstration } from '../models/demonstration';
import { PrestataireService } from '../prestataire.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-addservice',
  templateUrl: './addservice.component.html',
  styleUrls: ['./addservice.component.css']
})
export class AddserviceComponent implements OnInit {
  service: Service;
  type : Typeservice;
  demo: Demonstration [];
  demon : Demonstration;
  constructor(private router: Router) { }
  urls=[];
  exform: FormGroup;
  ngOnInit(): void {
   this.service = new Service();
   this.type = new Typeservice();   
   this.demo = []; 
   this.demon = new Demonstration();
   this.service.type=this.type;
   this.service.demo=this.demo;
    this.exform = new FormGroup({
    'designation' : new FormControl(null, Validators.required),
    'prix' : new FormControl(null, Validators.required),
    'types' : new FormControl(null, Validators.required),
    'choix' : new FormControl(null, [Validators.required]),
  });
   

    
  }

   get choix(){ return this.exform.get('choix');  }
   get prix(){ return this.exform.get('prix');  }
   get types(){ return this.exform.get('types');  }
   get designation(){ return this.exform.get('designation');  }
   onselect(e){
    console.log(this.service);  
    
   if(e.target.files) 
   {   
    for(let i=0;i<File.length;i++)
       {
            var reader= new FileReader();
            reader.readAsDataURL(e.target.files[i]);
            reader.onload=(events:any)=> {
            this.urls.push(events.target.result); 
            this.demon.name=events.target.result;
            this.demo.push(this.demon); 
            console.log(this.demon); 
            console.log(this.urls);

            } 
       } 
    }
   }
}
