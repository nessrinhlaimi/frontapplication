import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { LocationStrategy, HashLocationStrategy, DatePipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { IconModule, IconSetModule, IconSetService } from '@coreui/icons-angular';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';



const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import { BoardUserComponent } from './board-user/board-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AdminGuard } from './services/AdminGuard';
import { UpdateComponent } from './update/update.component';

import { MatCardModule } from '@angular/material/card';
import { MatCommonModule, MatPseudoCheckboxModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProfileComponent } from './profile/profile.component';
import { InterventionService } from './intervention.service';
import { UserComponent } from './user/user.component';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';


import { MDBBootstrapModule } from 'angular-bootstrap-md';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatPseudoCheckboxModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatCommonModule,
     MatFormFieldModule,
     MatIconModule,
  
    BrowserAnimationsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    IconModule,
    IconSetModule.forRoot(),
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    BoardUserComponent,
    UpdateComponent,
    ProfileComponent,
    UserComponent,
    ProfileEditComponent,
   
  ],
  providers: [DatePipe,BsModalService,AdminGuard, InterventionService,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    IconSetService,
  ],
  
  bootstrap: [ AppComponent ]
})
export class AppModule { }
