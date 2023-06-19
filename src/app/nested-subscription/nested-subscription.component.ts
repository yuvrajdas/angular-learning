import { Component, OnInit } from '@angular/core';
import { DataServicesService } from '../service/data-services.service';

@Component({
  selector: 'app-nested-subscription',
  templateUrl: './nested-subscription.component.html',
  styleUrls: ['./nested-subscription.component.scss']
})
export class NestedSubscriptionComponent implements OnInit {

  datas:any= [];
  constructor(private dataService:DataServicesService) { }

  ngOnInit(): void {
     this.dataService.getData().subscribe((res:any)=>{
        if(res.status == 200){
          this.datas = res.body;
        }
        
        this.dataService.getData2().subscribe((res:any)=>{
          console.log(res.body);
        })  
        
     })

     
  }


}
