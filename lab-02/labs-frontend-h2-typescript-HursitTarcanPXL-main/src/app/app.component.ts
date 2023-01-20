import { Component, OnInit } from '@angular/core';
import {Contact} from "./contact.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'lab';

  ngOnInit(): void {
    const c1: Contact = new Contact("Dries Swinnen", "dries.swinnen@pxl.be", "12345");
    const c2: Contact = new Contact("Tom Schuyten", "tom.schuyten@pxl.be", "678901234", true);
    console.log(c1);
    console.log(c2);
  }
}
