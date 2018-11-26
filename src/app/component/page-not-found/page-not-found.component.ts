import { Component, OnInit } from '@angular/core';
import { appConfig } from '../../app.config';
import { GetauthService } from '../../service/getauth.service';
declare var $: any;
@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor(
    public authservice: GetauthService
  ) { }

  ngOnInit() {

  }
  goHome() {
    this.authservice.getStatus().subscribe(res => {
      console.log(res);
  });
  }
}
