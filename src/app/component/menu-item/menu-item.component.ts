import { Component, OnInit, Input } from '@angular/core';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  faHamburger = faHamburger;

  @Input() title: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
