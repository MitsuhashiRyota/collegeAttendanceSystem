import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-attend',
  templateUrl: './attend.component.html',
  styleUrls: ['./attend.component.css']
})
export class AttendComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    setTimeout(() => {
    this.router.navigate(['mothselect']);
    }, 3000);
  }
}
