import { Component } from '@angular/core';
import {Confession} from "./models/confession.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  confessionList: Confession[] = [
    new Confession('Mondays are the worst','PXL-Digital','anonymous', true),
    new Confession('Angular beats VueJS any day','PXL-Digital','anonymous', true),
    new Confession('Taxes taxes taxes','PXL-Business','anonymous', false),
    new Confession('Am i an artist yet','PXL-MAD','banksy', false)
  ];

  processAdd(event: Confession): void{
    this.confessionList.push(event);
    console.log(this.confessionList);
  }

  title = 'template-frontend-h4-databinding-lab';
}
