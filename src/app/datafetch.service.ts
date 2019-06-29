import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IReceipe } from './foodreceipe_details';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DatafetchService {
  private url: string = "/asset/data/foodreceipes.json"
  constructor(private http: HttpClient) { }
  getReceipes_details(): Observable<IReceipe[]>{
    return this.http.get<IReceipe[]>(this.url);
}
}