import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Api1Service {

  constructor(private http: HttpClient) { }
  getData(): Observable<any> {
    const url = 'https://api.edamam.com/api/food-database/v2/parser?ingr=red%20apple&app_id=9cbc9688&app_key=4154b938cf6a6512807febb1e9b7c715';
    return this.http.get<any>(url);
  }
}
