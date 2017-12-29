import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styles: [`
    .ui.segment { margin-top: 15px; }
    .description { padding-left: 10px; padding-right: 10px; }
  `]
})
export class ProductsListComponent implements OnInit {
  products: any[][];
  count = 3;

  constructor() { }

  ngOnInit() {
    const len = PRODUCTS.length;
    this.products = new Array<Array<any>>();
    for (let i = 0; i < len / 3; i++) {
      const row: any[] = new Array<any>();
      for (let j = 0; j < this.count; ++j) {
        const index = i * this.count + j;
        if (index < len) {
          row.push(PRODUCTS[index]);
        }
      }
      this.products.push(row);
    }
  }

}

const PRODUCTS = [
  {id : 1, type: 'Antenna systems', num: 6, img: '11.png'},
  {id : 2, type: 'Attitude actuators', num: 9, img: '12.png'},
  {id : 3, type: 'Attitude sensors', num: 19, img: '13.png'},
  {id : 4, type: 'Cameras & payloads', num: 2, img: '14.png'},
  {id : 5, type: 'Command % data handling', num: 2, img: '15.png'},
  {id : 6, type: 'Communication systems', num: 4, img: '16.jpg'},
  {id : 7, type: 'CubeSat kits & buses', num: 2, img: '17.jpg'},
  {id : 8, type: 'CubeSat Structures', num: 7, img: '18.jpg'},
  {id : 9, type: 'Ground stations', num: 7, img: '19.jpg'},
  {id : 10, type: 'Ground support equipment', num: 6, img: '110.png'},
  {id : 11, type: 'Integrated ADCS', num: 6, img: '111.png'},
  {id : 12, type: 'Launch adapters', num: 7, img: '112.png'},
  {id : 13, type: 'Propulsion & pressurisation', num: 3, img: '114.jpg'},
  {id : 14, type: 'Software services', num: 4, img: '115.jpg'},
  {id : 15, type: 'Solar panels & power systems', num: 6, img: '117.png'},
  {id : 16, type: 'Training & simulators', num: 4, img: '123.png'}
];
