export class SignUpInfo {
  
  username: string;
  email: string;
  role: string[];
  password: string;

  constructor( username: string, email: string, password: string, role: string) {

    
    this.username = username;
    this.email = email;
    this.role = [role];
    this.password = password;

  }

}
