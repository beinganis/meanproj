import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { MainService } from '../share/main.service';
import { User } from '../model/user';
import { Router } from '@angular/router';

declare var ts2js_fileinput: any;
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  constructor(private mainService: MainService, public router: Router) {
  }
  senduser() {
  }
  ngOnInit() {
    this.mainService.logout();
          this.router.navigate(['home']);
    new ts2js_fileinput("fileinput", { 'required': true, 'showCancel': false });
  }
}


