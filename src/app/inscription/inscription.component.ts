import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterService } from './register.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  exform: FormGroup;
  constructor(private route: ActivatedRoute,
    private router: Router,private registerService: RegisterService) { }

  ngOnInit() {

    this.exform = new FormGroup({
    'nom' : new FormControl(null, Validators.required),
    'prenom' : new FormControl(null, Validators.required),
    'daten' : new FormControl(null, Validators.required),
    'addr' : new FormControl(null, [Validators.required, Validators.minLength(10)]),
    'tel' : new FormControl(
      null,
      [
        Validators.required,
        Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')
      ]),
    'email' : new FormControl(null, [Validators.required, Validators.email]),
    'password' : new FormControl(null, Validators.required)
  });



  }

  get nom() {
    return this.exform.get('nom');
  }

  get prenom() {
    return this.exform.get('prenom');
  }
  get email() {
    return this.exform.get('email');
  }

  get daten() {
    return this.exform.get('daten');
  }

 get tel() {
    return this.exform.get('tel');
  }
 get password() {
    return this.exform.get('password');
  }
 get addr() {
    return this.exform.get('addr');
  }

  clicksub() {
    //console.log(this.exform.value);
    //this.exform.reset();
    this.registerService.registerService(this.exform.value.nom,this.exform.value.prenom,this.exform.value.daten,this.exform.value.tel,this.exform.value.addr,this.exform.value.email,this.exform.value.password).subscribe((result)=>
    {
      
       console.log("reussi");
       this.router.navigate(['/login']);
    },
     () => {
          console.log(this.exform.value);
           this.exform.reset();
     });
  }

/*
 save(nom: string,prenom: string,tel: string,addr: string,daten: date,email: string,password: string)
   {

    this.deletService.UpdateUser( id , login, mdp ). subscribe(data =>{
      console.log(data);
      location.reload();
    } , error => console.log(error));
    // @ts-ignore
  }
*/
}
