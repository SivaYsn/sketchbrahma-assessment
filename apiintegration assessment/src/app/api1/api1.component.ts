import { Component, OnInit } from '@angular/core';
import { Api1Service } from '../services/api1.service';

@Component({
  selector: 'app-api1',
  templateUrl: './api1.component.html',
  styleUrls: ['./api1.component.css']
})
export class Api1Component implements OnInit {
  data: any[][];

  constructor(private apiservice: Api1Service) {
    this.data = new Array<any[]>();
   }
    getDataFromApi1(): any {
      this.apiservice.getData().subscribe((data) => {
        this.data = data;
        console.log(data);
        console.log('Data From Food Data Base');
      });
    }
    ngOnInit(): void {
    }
  }

