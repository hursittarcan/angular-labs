import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Confession} from "../../models/confession.model";

@Component({
  selector: 'app-add-confession',
  templateUrl: './add-confession.component.html',
  styleUrls: ['./add-confession.component.css']
})
export class AddConfessionComponent implements OnInit {
  confession!: Confession;

  @Output() newItemEvent = new EventEmitter<Confession>();

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
    let newConfession = new Confession(this.confession.post, this.confession.department, this.confession.author);
    this.newItemEvent.emit(newConfession);
    this.resetForm();
  }
}
