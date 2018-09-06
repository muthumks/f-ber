import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FooterComponent } from './common/footer/footer.component';
import { HeaderComponent } from './common/header/header.component';
import { NavComponent } from './common/nav/nav.component';
import { LoginComponent } from './container/login/login.component';
import { RegisterComponent } from './container/register/register.component';
import { MapComponent } from './container/map/map.component';
import { AboutComponent } from './common/about/about.component';


const appRoute:Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'map',
    component:MapComponent
  },
  {
    path:'',
    component:MapComponent
  },
  {
    path:'**',
    redirectTo: '/map'
  }

]



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    LoginComponent,
    RegisterComponent,
    MapComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
