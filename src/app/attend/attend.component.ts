import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-attend',
  templateUrl: './attend.component.html',
  styleUrls: ['./attend.component.css']
})
export class AttendComponent implements OnInit {

  public attendanceDate: Date;

  constructor(
    private router: Router
  ) { }
  
  /** 
  * 初期化処理 
  */
  ngOnInit() {
    this.attendanceDate = new Date();
    setTimeout(() => {
    this.router.navigate(['mothselect']);
    }, 3000);
  }
}
