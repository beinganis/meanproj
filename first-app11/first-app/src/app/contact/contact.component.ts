import {Component, OnInit} from '@angular/core';
import * as $ from "jquery";
import {MainService} from '../share/main.service';
import {User} from "../model/user";

declare var ts2js_fileinput: any;

//import * as f from "../../assets/js/fileinput"
@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

    user: User;
    confirmpass: string;
    matchpassword: boolean;
    userStatus:boolean;
    showERROR:boolean;
    errorStr:string;
    showSucces:boolean;
    succesStr:string;
    constructor(private mainService: MainService) {
    }

    senduser() {
        if (this.confirmpass === this.user.password) {
            console.log(this.user);
            console.log('send');
            this.mainService.register(this.user).subscribe(res => {
               console.log(res);
               this.showERROR=false;
               this.showSucces=true;
               this.succesStr='Success Register.';
            },err =>{
                this.showERROR=true;
                this.showSucces=false;
                this.errorStr= err.error;
                console.log(err.error);
            })
            this.matchpassword = false;
        } else {
            console.log('not sent');
            this.matchpassword = true;
        }

    }

    logChange() {
        //console.log(this.user.userStatus);
    }

    ngOnInit() {
        this.showERROR=false;
        this.showSucces=false;
        this.user = {name: '', lastname: '', email: '', password: '' ,userStatus:true };
        //$("#fileinput").fileinput('disable');
        //alert(ts2js);
        new ts2js_fileinput("fileinput", {'required': true, 'showCancel': false});
        this.matchpassword = false;
    }
}
