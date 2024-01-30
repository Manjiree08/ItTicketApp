import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';
import { TicketComponent } from './ticket/ticket.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ROUTES, RouterModule } from '@angular/router';
import { CommonService } from './common.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ViewTicketComponent,
    TicketComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
