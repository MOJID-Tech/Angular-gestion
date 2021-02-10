import { Client } from './client';
import { UserRole } from './user-role';

export class User {

    id : number;
    login : string ;
    password : string ;
    client : Client;
    User_Role : UserRole [];

}
