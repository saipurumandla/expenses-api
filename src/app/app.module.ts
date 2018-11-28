import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GetauthService } from './service/getauth.service';
import { customHttpProvider } from './helper/custom-http.service';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { OfflineComponent } from './component/offline/offline.component';
import { ServererrorComponent } from './component/servererror/servererror.component';


const appRoutes: Routes = [
  {path: 'auth', loadChildren: './auth/auth.module#AuthModule'},
  {path: '404', component: PageNotFoundComponent},
  {path: '500', component: ServererrorComponent},
  {path: 'offline', component: OfflineComponent},
  {path: '**', redirectTo: '/404'}
  // {path:'**',component: PageNotFoundComponent};
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    OfflineComponent,
    ServererrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes,{ preloadingStrategy: PreloadAllModules }),
    NgbModule,
    FormsModule,
    HttpModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    customHttpProvider,
    GetauthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
