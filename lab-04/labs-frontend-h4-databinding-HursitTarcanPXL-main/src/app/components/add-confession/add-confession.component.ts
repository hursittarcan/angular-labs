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

  resetForm(): void{
    this.confession.author = '';
    this.confession.post = '';
    this.confession.department = '';
  }

  addNew(): void{
    let newConfession: Confession = new Confession(this.confession.post, this.confession.department, this.confession.author);
    console.log(newConfession);
    alert("Added confession!");
    this.resetForm();
  }
}
