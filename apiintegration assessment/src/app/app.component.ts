import { Component } from '@angular/core';
import { ApiintegrationService} from './services/apiintegration.service';
import { Api1Service} from './services/api1.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data?: Array<any>;
  constructor(private api: ApiintegrationService) {
    this.data = new Array<any[]>();
  }
  // tslint:disable-next-line:typedef
  getDataFromApi() {
    this.api.getData().subscribe((data) => {
      console.log(data);
      this.data = data;
      console.log('Data from Nutrition Api');
    });
  }
}
