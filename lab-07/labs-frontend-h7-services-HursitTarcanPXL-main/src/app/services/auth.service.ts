import { Injectable } from '@angular/core';
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private userService: UserService) { }

  login(email: string, password: string){
    if(this.userService.users.some(e => e.email === email)){
      return true;
    }
    return false;
  }
}
