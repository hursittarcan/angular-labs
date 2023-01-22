import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registerActive: boolean = false;

  showRegister(): void{
    this.registerActive = true;
  }

  hideRegister(): void{
    this.registerActive = false;
  }
}
