import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
status;
  constructor(private authService: AuthService) { }

  ngOnInit() {debugger
    this.isLoggedIn$ = this.authService.isLoggedIn;
/*     if (localStorage.getItem('isLoggedIn') == "true") {      
      this.status = true;      
   }
     else {      
      this.status = false;      
      }  */
  }

  Logout(){
    this.authService.logOut();
  }
}
