import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  
  { path: '/model-controller', title: 'Modelo Controlador', icon: 'add_box', class: '' },
  { path: '/actuator', title: 'Actuadores', icon: 'add_box', class: '' },
  { path: '/sensor', title: 'Sensor', icon: 'add_box', class: '' },
  { path: '/table-list', title: 'Controladores', icon: 'library_books', class: '' },
  // { path: '/notifications', title: 'Notifications', icon: 'notifications', class: '' },
  // { path: '/upgrade', title: 'Upgrade to PRO', icon: 'unarchive', class: 'active-pro' },
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
