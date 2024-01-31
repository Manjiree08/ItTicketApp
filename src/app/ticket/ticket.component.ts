import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { CommonService} from '../common.service'
@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css'],
  providers:[CommonService ]
})
export class TicketComponent implements OnInit {
  myForm:FormGroup
  status:string;
  isResolve:boolean;
  errorMessage;
    open:number;
    solved:number;
    closed:number;
 ticketId;
 formData:any;
  constructor(private router:Router,private route:ActivatedRoute,private CommonService:CommonService) { }

  ngOnInit() {
    this.open=0;
    this.solved=0;
    this.closed=0;
    this.myForm = new FormGroup({
      subject: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      resolution: new FormControl('')
    })
    this.status = this.route.snapshot.queryParamMap.get('status');
    if(this.status == "Resolve"){
      this.isResolve=true
    }
    this.ticketId = this.route.snapshot.queryParamMap.get('id');
    if(!this.isResolve){
      this.CommonService.GetUser().subscribe((data :any) => {debugger
        console.log("get data => ",data);
        for(let i=0;i<data.length;i++){
            if(data[i].status=="closed"){
              this.closed += 1;
            }
            else if(data[i].status=="solved"){
              this.solved += 1;
            }
            else{
              this.open += 1;
            }
         }
        })
    }
    else{
      this.CommonService.GetUserById(this.ticketId).subscribe((data :any) => {debugger
        console.log("get data => ",data);
          this.myForm.patchValue({
            subject: data.subject,
            description: data.description
          });
          this.myForm.controls['subject'].disable();
          this.myForm.controls['description'].disable();
          this.formData=data;
        })
    }
   
  }

  submitForm() {debugger
    if(!this.isResolve){
      let user = this.myForm.value;
      user.mode= 'Save';
      user.status= 'open';
      this.CommonService.saveUser(user).subscribe(data =>  
        {debugger
          alert("Ticket Created");
          this.myForm.reset();
          this.open +=1 ;
        }, 
        error => {
          this.errorMessage = error
          console.log(error);
        })
    }
    else {debugger
      let user = this.myForm.value;
      user.mode= 'Update';
      user.status= 'solved';
      user.subject=this.formData.subject;
      user.description=this.formData.description;
      user._id=this.formData._id;
      this.CommonService.saveUser(user).subscribe(data =>  
        {debugger
          alert("Resolution added!!!");
          this.viewTickets('Resolve');
        }, 
        error => {
          this.errorMessage = error
          console.log(error);
        })
    }

    }

  viewTickets(status){
    this.router.navigate(['view-ticket'], { queryParams: {status:status}});
  }
}
