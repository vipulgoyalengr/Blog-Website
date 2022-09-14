import { Component, OnInit } from '@angular/core';
import { LawsiteService } from '../lawsite.service';

@Component({
  selector: 'app-add-remove',
  templateUrl: './add-remove.component.html',
  styleUrls: ['./add-remove.component.css']
})
export class AddRemoveComponent implements OnInit {
x;
  constructor(private t1:LawsiteService) { 
    this.t1.get_events().subscribe((res)=>{
      this.x=res;
      
          });
  }

  ngOnInit(): void {
  }

}
