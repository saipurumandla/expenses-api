import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GetauthService } from './service/getauth.service';
import { customHttpProvider } from './helper/custom-http.service';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { LoginComponent } from './component/login/login.component';
const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '404', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/404'}
  // {path:'**',component: PageNotFoundComponent};
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    customHttpProvider,
    GetauthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
