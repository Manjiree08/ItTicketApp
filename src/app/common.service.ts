import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable()
export class CommonService {
constructor(private http: HttpClient) { }
saveUser(user) {debugger
return this.http.post('http://localhost:8080/api/SaveUser/', user).pipe(map((data: any) => 
{
    return data;
}), 
catchError( error => {return throwError( 'Something went wrong!' );}))}

GetUser() {
return this.http.get('http://localhost:8080/api/getUser/').pipe(map((data: any) => 
{ return data;}),
 catchError(error => {return throwError('Something went wrong!');}))}

 GetUserById(id) {
    return this.http.get('http://localhost:8080/api/getUserById/'+id).pipe(map((data: any) => 
    { return data;}),
     catchError(error => {return throwError('Something went wrong!');}))}

 deleteUser(id){return this.http.post('http://localhost:8080/api/deleteUser/',{'id': id}).pipe(map((data: any) => {return data;}), catchError( error => {return throwError( 'Something went wrong!' );}))}}