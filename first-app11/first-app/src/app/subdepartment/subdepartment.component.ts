import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {MainService} from '../share/main.service';


@Component({
    selector: 'app-subdepartments',
    templateUrl: './subdepartment.component.html'
})
export class SubdepartmentComponent implements OnInit, AfterViewInit {
    @Input() subdepartments: {
        id: number,
        name: string,
        description: string,
        professors: { id: number, name: string, description }[]
    }[];
    professors: { id: number, name: string, description }[];
    isMastersVisible: boolean;

    subDepartmentClick(i) {
        this.isMastersVisible = true;
        this.professors = this.subdepartments[i].professors;
    }

    constructor(private mainservice: MainService) {
    }

    ngOnInit() {
        this.mainservice.open.subscribe(val => {
            this.isMastersVisible = false;
        });
    }

    ngAfterViewInit(): void {

    }

}