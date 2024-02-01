import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable()
export class CommonService {
constructor(private http: HttpClient) { }
saveTicket(Ticket) {debugger
return this.http.post('http://localhost:8080/api/SaveTicket/', Ticket).pipe(map((data: any) => 
{
    return data;
}), 
catchError( error => {return throwError( 'Something went wrong!' );}))}

GetTickets() {
return this.http.get('http://localhost:8080/api/getTickets/').pipe(map((data: any) => 
{ return data;}),
 catchError(error => {return throwError('Something went wrong!');}))}

 GetTicketById(id) {
    return this.http.get('http://localhost:8080/api/getTicketById/'+id).pipe(map((data: any) => 
    { return data;}),
     catchError(error => {return throwError('Something went wrong!');}))}
 }
