import { User } from './Models/User';
import { Component, OnInit } from '@angular/core';
import {ApiService} from './service/api.service';
import 'hammerjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  users:User[];
  constructor(private apiService:ApiService){}
ngOnInit(): void{
this.GetUsers();
}
GetUsers(): void{
this.apiService.getUsers().subscribe(data=>this.users= data);
}
}
