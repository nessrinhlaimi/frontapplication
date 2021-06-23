import { User } from "./user";

 
 export class Intervention {
    id: number;
    date: Date;
    structure:String;
    lieu :String;
    interv: String;  
    observation:String ; 
    user: User;
  }
  