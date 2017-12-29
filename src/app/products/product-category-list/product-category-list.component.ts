import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  category: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['type'];
    this.category = CATEGORIES.find(category => category.id === id);
  }

}

const CATEGORIES = [
  {
    id: 'antenna-systems',
    title: 'Antenna systems',
    data:
      [{ id: 1, name: 'Helio deployable antenna', brand: 'HCT', price: 11000, img: '21.png' },
      { id: 2, name: 'Deployable turnstile antenna system', brand: 'ISIS', price: 5500, img: '22.png' },
      { id: 3, name: 'Deployable dipole antenna system', brand: 'ISIS', price: 4500, img: '23.png' },
      { id: 4, name: 'Deployable monopole antenna system', brand: 'ISIS', price: 11000, img: '24.png' },
      { id: 5, name: 'Deployable combined antenna system', brand: 'ISIS', price: 11000, img: '25.png' },
      { id: 6, name: 'S-Band Patch Antenna RHCP for HISPICO', brand: 'IQ Wireless', price: 11000, img: '26.png' }]
  },
  {
    id: 'attitude-actuators',
    title: 'Attitude actuators',
    data: [
      { id: 1, name: 'CubeTorquer and Cube Coil', brand: 'CubeSpace', price: 1600, img: '31.png' },
      { id: 2, name: 'CubeWheel Large', brand: 'CubeSpace', price: 6500, img: '32.png' },
      { id: 3, name: 'CubeWheel Medium', brand: 'CubeSpace', price: 5400, img: '33.png' },
      { id: 4, name: 'CubeWheel Small', brand: 'CubeSpace', price: 4300, img: '34.png' },
      { id: 5, name: 'ISIS Magnetorquer board', brand: 'ISIS', price: 8000, img: '35.png' }
    ]
  }
];
