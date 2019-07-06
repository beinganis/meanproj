import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {MainService} from '../../share/main.service';

@Component({
    selector: 'app-subdepartmentmaster',
    templateUrl: './subdepartmentmaster.component.html',
    styleUrls: ['./subdepartmentmaster.component.css']
})
export class SubdepmasetrComponent implements OnInit, AfterViewInit {

    @Input() professors: { id: number, name: string, description }[];

    constructor(private mainService: MainService) {
    }

    ngOnInit() {
    }

    ngAfterViewInit(): void {
    }


}