import { Component, OnInit } from '@angular/core';

class Confession {
  body: string;
  subject: string;
  author: string;

  constructor(body: string, subject: string, author: string) {
    this.body = body;
    this.subject = subject;
    this.author = author;
  }
}

@Component({
  selector: 'app-confession-item',
  templateUrl: './confession-item.component.html',
  styleUrls: ['./confession-item.component.css']
})
export class ConfessionItemComponent implements OnInit {
  confession: Confession | undefined;

  constructor() { }

  ngOnInit(): void {
    this.confession = new Confession("onze tweede confession", "PXL-Digital","Dries");
  }

}
