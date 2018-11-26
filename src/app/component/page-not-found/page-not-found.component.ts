import { Component, OnInit } from '@angular/core';
import { appConfig } from '../../app.config';
declare var $: any;
@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  goHome() {
    window.location.href =  '/';
  }
}
