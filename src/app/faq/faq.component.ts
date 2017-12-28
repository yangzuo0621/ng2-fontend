import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './faq.component.html',
  styles: [`
    .ui.segment { margin-top: 15px; }
    .description { padding-left: 10px; padding-right: 10px; }
  `]
})
export class FaqComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  show(event) {
    console.log(event.srcElement.attributes);
  }

}
