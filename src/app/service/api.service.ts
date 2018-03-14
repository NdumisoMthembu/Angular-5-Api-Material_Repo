import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {User} from './../Models/User';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  constructor(private _http: Http) { }

  getUsers(): Observable<User[]>{
return this._http.get("http://localhost:54505/api/User")
          .map((response:Response)=><User[]>response.json());
  }
}
