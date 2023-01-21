import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nieuwsbrief-component',
  templateUrl: './nieuwsbrief-component.component.html',
  styleUrls: ['./nieuwsbrief-component.component.css']
})
export class NieuwsbriefComponentComponent implements OnInit {
  name: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  buttonClick(): void {
    alert("hello world!" + this.name);
  }

}
