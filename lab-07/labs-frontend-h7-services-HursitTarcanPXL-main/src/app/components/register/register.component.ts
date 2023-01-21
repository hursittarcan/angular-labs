import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: UntypedFormGroup;
  constructor() { }

  ngOnInit(): void {
    this.registerForm = new UntypedFormGroup({
      username: new UntypedFormControl('',[Validators.required,Validators.minLength(3)]),
      firstName: new UntypedFormControl('',[Validators.required]),
      lastName: new UntypedFormControl('',[Validators.required]),
      email: new UntypedFormControl('',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      age: new UntypedFormControl(null,[Validators.required]),
      subscription: new UntypedFormControl('',[Validators.required])
    });
  }

  onSubmit(): void{
    let newUser: User = new User('','','','',0,'');
    Object.assign(newUser,this.registerForm.value);
  }

  get registerFormControls() {
    return this.registerForm.controls;
  }

}
