import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiintegrationService {

  constructor(private http: HttpClient) { }
  getData(): Observable<any[]> {
    // tslint:disable-next-line:max-line-length
    const url =  'https://api.edamam.com/api/nutrition-data?app_id=333f2a7c&app_key=df4c9c16c598f30c04926e178ad10576&ingr=1%20large%20apple';
    return this.http.get<any>(url);
  }
}

