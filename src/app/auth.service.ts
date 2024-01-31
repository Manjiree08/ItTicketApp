import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router} from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  constructor(private router:Router) { }
  get isLoggedIn() {debugger
    return this.loggedIn.asObservable();
  }

  public log(){debugger
    this.loggedIn.next(true);
  }
  public logOut(){
    this.loggedIn.next(false);
    localStorage.setItem('isLoggedIn',"false");   
    this.router.navigate(['/login']);
  }
}
