import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'view-ticket',
  templateUrl: './view-ticket.component.html',
  styleUrls: ['./view-ticket.component.css']
})
export class ViewTicketComponent implements OnInit {
  myForm:FormGroup
  status:string;
  isClose:boolean;
  isResolve:boolean
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {debugger
    this.myForm = new FormGroup({
      subject: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    })
    this.status = this.route.snapshot.queryParamMap.get('status');
    if(this.status== "Closed"){
      this.isClose=true;
    }
    else if(this.status == "Resolve"){
      this.isResolve=true
    }
  }

  submitForm() {
    console.log(this.myForm.value);
  }

  ResolveTicket(){
    this.router.navigate(['ticket'], { queryParams: {status:'Resolve'}});
  }
}
