import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';
import { TicketComponent } from './ticket/ticket.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';  
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'view-ticket', component: ViewTicketComponent, canActivate : [AuthGuard]},
  { path: 'ticket', component: TicketComponent,canActivate : [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
