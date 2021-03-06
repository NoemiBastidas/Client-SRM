import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [


  { path: '/modelos', title: 'Nuevo Modelo', icon: 'add_box', class: '' },
  { path: '/table-list', title: 'Controladores', icon: 'library_books', class: '' },
  { path: '/actuator', title: 'Actuadores', icon: 'add_box', class: '' },
  { path: '/sensor', title: 'Sensor', icon: 'add_box', class: '' },
  { path: '/user-profile', title: 'Cliente', icon: 'account_box', class: '' },


];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };
}
