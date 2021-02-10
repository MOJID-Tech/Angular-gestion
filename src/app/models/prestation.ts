import { Typeservice } from './typeservice';
import { Demonstration } from './demonstration';
import { Client } from './client';

export class Prestation {
  id : number ;
  titre : string;
  description : string ;
  prix : number;
  livrable : boolean;
  typeService : Typeservice ;
  adresse : string;
  capacite : number;
  demo : Demonstration [];
  client : Client;
}
