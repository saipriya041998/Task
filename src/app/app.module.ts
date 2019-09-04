import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { TaskdisplayComponent } from './taskdisplay/taskdisplay.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

import { ReactiveFormsModule } from '@angular/forms';
import { Taskdisplay1Component } from './taskdisplay1/taskdisplay1.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import {MatChipsModule} from '@angular/material/chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskdisplayComponent,
    Taskdisplay1Component,
    MenuComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,FormsModule,NgbModule,NgbPaginationModule,NgbAlertModule,ReactiveFormsModule,routing,MatChipsModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
