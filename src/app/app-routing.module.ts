import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'view-ticket', component: ViewTicketComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
