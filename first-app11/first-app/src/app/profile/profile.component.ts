import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {MainService} from '../share/main.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

    professors: { id: number, name: string, description: string, image: string };
    id: number;
    showCourseDesc: boolean;

    constructor(private activeRoute: ActivatedRoute, private mainService: MainService) {
    }

    ngOnInit() {
        this.showCourseDesc = false;
        this.activeRoute.params.subscribe((params: Params) => {
            this.id = +params['id'];
            this.professors = this.mainService.getProfessor(this.id);
            console.log(this.professors);
        });
    }

    courseDescription() {
        this.showCourseDesc = !this.showCourseDesc;
    }

}
 