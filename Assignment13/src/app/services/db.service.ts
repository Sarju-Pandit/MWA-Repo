import { Injectable } from '@angular/core';
import { LogService } from './log.service';
import { User } from '../models/user.model';
import { Router } from "@angular/router";

@Injectable()
export class DbService {
  private data: User[] = [
    new User(1, "Shyam KC", "123456", "sap@gmail.com"),
    new User(2, "Ram Thaapa", "987654", "ram@gmail.com"),
    new User(3, "Rita Giri", "231234", "rita@gmail.com"),
    new User(4, "Tina Karki", "45678", "tina@gmail.com"),
    new User(5, "Sindhu Malla", "56789", "sindhu@gmail.com"),
    new User(6, "Ramila KC", "543217", "ramila@gmail.com")
  ];

  constructor(private logService: LogService, private router: Router) {}
    
  getData() {
    return this.data;
  }

  getDataById(id) {
    let userInfo = this.data[id-1];
    if(userInfo != undefined) {
      return this.data[id-1];
    }else {
      this.router.navigate(['./error']);
    }
  }
}