import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-modelos',
  templateUrl: './modelos.component.html',
  styleUrls: ['./modelos.component.css']
})
export class ModelosComponent implements OnInit {


  constructor() { }
  showModel(from, align) {
    const type = ['', 'info', 'success', 'warning', 'danger'];

    const color = Math.floor((Math.random() * 4) + 1);


  }
  ngOnInit() {
  }

}
