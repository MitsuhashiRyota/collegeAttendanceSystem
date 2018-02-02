import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // 要素を点滅
    $(function() {
      setInterval(function(){
        $('.tab-area').fadeOut(700,function(){
          $(this).fadeIn(500)}
        );
    },500);
    });
  }

  public test() {
    $(function() {
      alert("");
    });
  }

}
