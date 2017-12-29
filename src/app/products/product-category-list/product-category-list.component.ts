import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-category-list',
  templateUrl: './product-category-list.component.html',
  styles: [`
    .ui.segment { margin-top: 15px; }
    .description { padding-left: 10px; padding-right: 10px; }
    .card .image { background-color: white; }
  `]
})
export class ProductCategoryListComponent implements OnInit {
  categories: any[];

  constructor() { }

  ngOnInit() {
    this.categories = CATEGORIES;
  }

}

const CATEGORIES = [
  {id: 1, name: 'Helio deployable antenna', brand: 'HCT', price: 11000, img: '21.png'},
  {id: 1, name: 'Deployable turnstile antenna system', brand: 'ISIS', price: 5500, img: '22.png'},
  {id: 1, name: 'Deployable dipole antenna system', brand: 'ISIS', price: 4500, img: '23.png'},
  {id: 1, name: 'Deployable monopole antenna system', brand: 'ISIS', price: 11000, img: '24.png'},
  {id: 1, name: 'Deployable combined antenna system', brand: 'ISIS', price: 11000, img: '25.png'},
  {id: 1, name: 'S-Band Patch Antenna RHCP for HISPICO', brand: 'IQ Wireless', price: 11000, img: '26.png'}
];
