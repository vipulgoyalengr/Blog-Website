import { Component, OnInit } from '@angular/core';
import { LawsiteService } from '../lawsite.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor(public t1:LawsiteService) { }

  ngOnInit(): void {
  }

}
