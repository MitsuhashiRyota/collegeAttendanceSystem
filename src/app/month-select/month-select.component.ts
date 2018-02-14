import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-month-select',
  templateUrl: './month-select.component.html',
  styleUrls: ['./month-select.component.css']
})
export class MonthSelectComponent implements OnInit {

  private radioModel: string = 'Middle';
  public noonStudent: boolean = false;
  public nightStudent: boolean = false;

  private month:number = 11;

  constructor() {}

  ngOnInit() {

    $(function() {
      setInterval(function() {
        $('.font-size-30').fadeOut(700, function() {
          $(this).fadeIn(500)
        });
      }, 500);
    });
  }

  /**
   * 昼間夜間切り替え
   * @param noonSelect 
   * @param nigthselect 
   */
  public changeSelectStudent(noonSelect: boolean, nigthselect: boolean): void {
    this.noonStudent = noonSelect;
    this.nightStudent = nigthselect;

    if(this.noonStudent == true) {
      console.log("ok");
      $(".left-button").prop("disabled", true);
      $(".right-button").prop("disabled", false);
    } else if(this.nightStudent == true) {
      console.log("ng");
      $(".left-button").prop("disabled", false);
      $(".right-button").prop("disabled", true);
    }
  }
}
