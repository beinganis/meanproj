import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  professors: { id: number, name: string, description: string, image: string };
  constructor() { }

  ngOnInit() {
  }

}
