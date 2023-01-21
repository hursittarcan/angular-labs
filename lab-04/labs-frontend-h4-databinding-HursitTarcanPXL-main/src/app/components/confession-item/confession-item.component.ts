import { Component, OnInit } from '@angular/core';
import {Confession} from "../../models/confession.model";

@Component({
  selector: 'app-confession-item',
  templateUrl: './confession-item.component.html',
  styleUrls: ['./confession-item.component.css']
})
export class ConfessionItemComponent implements OnInit {
  confession!: Confession;

  constructor() { }

  ngOnInit(): void {
    this.confession = new Confession("Hello World!", "PXL-DIGITAL", "Hursit Tarcan");
  }

}
