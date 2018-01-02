import { Component, OnInit } from '@angular/core';

// import * as $ from 'jquery';
declare var jQuery: any;

@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    jQuery('.menu .item').tab();
  }

}
