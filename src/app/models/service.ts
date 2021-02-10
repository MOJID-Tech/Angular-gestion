import { Typeservice } from './typeservice';
import { Demonstration } from './demonstration';
import { Client } from './client';

export class Service {
  designation : string;
  description : string ;
  prix : number;
  livrable : boolean;
  type : Typeservice ;
  adresse : string;
  capacite : number;
  demo : Demonstration [];
  client : Client;
   
}
