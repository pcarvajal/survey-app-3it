import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/models/MenuItem';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItems: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.menuItems = [
      {
        option: 'Acerca de',
        path: 'about'
      },
      {
        option: 'Estadística',
        path: 'resume'
      },
      {
        option: 'Encuesta',
        path: 'form'
      }
    ]
  }

}
