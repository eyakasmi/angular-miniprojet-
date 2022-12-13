import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WrapperFooterComponent } from './modules/wrapper-footer/wrapper-footer.component';
import { HeaderComponent } from './modules/header/header.component';
import { HomeComponent } from './modules/home/home.component';
import { ListDetailComponent } from './modules/detail-team/list-detail/list-detail.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {NgxSpinnerModule} from "ngx-spinner";
import {SidebarComponent} from "./modules/sidebar/sidebar.component";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    WrapperFooterComponent,
    HeaderComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    AppRoutingModule,HttpClientModule,NgxSpinnerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
