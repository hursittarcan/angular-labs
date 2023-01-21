import { Component, OnInit } from '@angular/core';
import {Confession} from "../../models/confession.model";

@Component({
  selector: 'app-add-confession',
  templateUrl: './add-confession.component.html',
  styleUrls: ['./add-confession.component.css']
})
export class AddConfessionComponent implements OnInit {
  confession!: Confession;

  constructor() { }

  ngOnInit(): void {
    this.confession = new Confession('', '', '');
  }

}
