import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { DetailComponent } from '../detail/detail.component';


const BASE_URLB = 'http://localhost:8081';

@Injectable({
  providedIn: 'root'
})

export class DetailService {
  private http = inject(HttpClient)
  constructor() { }
  getDetails(textValue: number) {
    return this.http.get(`${BASE_URLB}/employee/${textValue}`);
  }
}
