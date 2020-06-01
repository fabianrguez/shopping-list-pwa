import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  items: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items.push({id: 1, name: 'Queso'});
    this.items.push({id: 2, name: 'Jamón'});
    this.items.push({id: 3, name: 'Mantequilla'});
  }

}
