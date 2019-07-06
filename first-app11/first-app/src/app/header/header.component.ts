import { Component, OnInit } from '@angular/core';
import { MainService } from '../share/main.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogin:boolean;
  userType:boolean;
  constructor(public mainService: MainService) { 
  }

  ngOnInit() {
    this.isLogin = this.mainService.isLogin();
    if(this.isLogin)
      this.userType = this.mainService.getUserType();
      else
      this.userType = false;
  }

}
