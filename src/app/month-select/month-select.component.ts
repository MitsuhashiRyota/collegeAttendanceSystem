import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as $ from 'jquery';

import { MonthSelectService } from './service/month-select.service';
import { MonthSelectParameter } from './parameter/monthSelectParameter';
import { MonthStudentParameter } from './parameter/monthStudentParameter';

@Component({
  selector: 'app-month-select',
  templateUrl: './month-select.component.html',
  providers: [ MonthSelectService ],
  styleUrls: ['./month-select.component.css']
})

/**
 * カレッジ選択/月選択 Component
 */
export class MonthSelectComponent implements OnInit {

  // 発火させる名前
  @Output() selectStudentParameter = new EventEmitter<MonthStudentParameter>();

  // 夜間カレッジフラグ情報
  private nightStudent: number = 0;

  // 選択月情報
  private monthSelectParameter: MonthSelectParameter = new MonthSelectParameter();

  // 選択受講生情報
  private monthStudentParameter: MonthStudentParameter = new MonthStudentParameter();

  // 表示切替フラグ
  public displayFlg:number = 0;

  // 選択月
  public selectMonth: string = "0";

  constructor(
    private monthSelectService: MonthSelectService,
  ) {}
  
  // 初期化
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
   * 昼間夜間切り替え処理
   * @param nigthselect 
   */
  public changeSelectStudent(nigthSelect: number): void {
    this.nightStudent = nigthSelect;
    let urlParameter: string = 'http://192.168.1.99:8080/CollegeAbsenteeSystem/attendance/getMonth/';
    let apiParameter = urlParameter + nigthSelect;

    if(this.nightStudent == 0) {
      $(".left-button").prop("disabled", true);
      $(".right-button").prop("disabled", false);
    } else if(this.nightStudent == 1) {
      $(".left-button").prop("disabled", false);
      $(".right-button").prop("disabled", true);
    }

    // 値を取得 HttpModeule利用
    this.monthSelectService.getMonthParam(apiParameter)
    .then(
      response => {
        this.monthSelectParameter = response;
      }
    );
  }

  /**
   * 月選択処理
   * @param selectMonth
   */
  public studentSelect(selectStartMonth: number, month: string) {
    this.selectMonth = month;
    let urlParameter = 'http://192.168.1.99:8080/CollegeAbsenteeSystem/attendance/getStudents/';
    let apiParameter = urlParameter + selectStartMonth + '/' + this.nightStudent;

    this.monthSelectService.getStudentInformation(apiParameter)
    .then(
      response => {
        this.displayFlg = 1;
        this.monthStudentParameter = response;
        this.selectStudentParameter.emit(this.monthStudentParameter);
      }
    );
  }

  // @Output練習
  public test(param: string) {
    // 親へ戻す値
    // (param)="親メソッド($event)"
    this.selectStudentParameter.emit(this.monthStudentParameter);
    }
}
