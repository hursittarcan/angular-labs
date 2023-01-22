import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {AuthService} from "../../services/auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() triggerRegister = new EventEmitter();
  email: string = '';
  password: string ='';
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  showRegister(): void{
    this.triggerRegister.emit();
  }

  onSubmit(form: any): void{
    if(this.authService.login(form.value.email, form.value.password)){
      alert("login succes!");
    }else{
      alert("email not found, register first!");
    }
  }
}
