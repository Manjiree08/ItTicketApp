import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  myForm:FormGroup
  status:string;
  isResolve:boolean;
  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      subject: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    })
    this.status = this.route.snapshot.queryParamMap.get('status');
    if(this.status == "Resolve"){
      this.isResolve=true
    }
  }

  submitForm() {
    console.log(this.myForm.value);
  }

  viewTickets(status){
    this.router.navigate(['view-ticket'], { queryParams: {status:status}});
  }
}
