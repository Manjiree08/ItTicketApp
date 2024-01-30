import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { CommonService} from '../common.service'
@Component({
  selector: 'view-ticket',
  templateUrl: './view-ticket.component.html',
  styleUrls: ['./view-ticket.component.css']
})
export class ViewTicketComponent implements OnInit {
  status:string;
  isClose:boolean;
  isResolve:boolean;
  isSolved:boolean;
  data:any=[];
  constructor(private route:ActivatedRoute,private router:Router,private CommonService:CommonService) { }

  ngOnInit() {debugger
    this.status = this.route.snapshot.queryParamMap.get('status');
    if(this.status== "closed"){
      this.isClose=true;
    }
    else if(this.status == "solved"){
      this.isSolved=true
    }
    else if(this.status == "Resolve"){
      this.isResolve=true
    }
    this.CommonService.GetUser().subscribe((data :any) => {debugger
      console.log("get data => ",data);
      if(this.status=='open'){debugger
        this.data=data;
      }
      else if(this.status=='Resolve'){
        for(let i=0;i<data.length;i++){
          if(data[i].status=='open'){
               this.data.push(data[i]);
             }
          }
       }
      else{
        for(let i=0;i<data.length;i++){
          if(data[i].status==this.status){
               this.data.push(data[i]);
             }
          }
       }
      })
  }



  ResolveTicket(id){
    this.router.navigate(['ticket'], { queryParams: {status:'Resolve',id:id}});
  }

  CloseTicket(data){debugger
    let user=data;
    user.status="closed";
    this.CommonService.saveUser(user).subscribe(data =>  
      {debugger
        alert("Ticket closed sucessfully");
      window.location.reload();
      }, 
      error => {
        console.log(error);
      })
  }
}
