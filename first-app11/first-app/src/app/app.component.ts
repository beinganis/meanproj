import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'furughApp';
    professorSelected: boolean;
    studentSelected: boolean;


    ngOnInit(): void {
        this.professorSelected = false;
        this.studentSelected = false;
    }

    professorSelect() {
        this.professorSelected = true;
        this.studentSelected = false;
    }

    studentSelect() {
        this.professorSelected = false;
        this.studentSelected = true;
    }
}

