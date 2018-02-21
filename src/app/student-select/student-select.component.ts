import { Component, OnInit, Input, EventEmitter, AfterViewInit, DoCheck } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Http, URLSearchParams } from '@angular/http';
import { MonthStudentParameter } from '../month-select/parameter/monthStudentParameter';

import { StudentSelectService } from './service/student-select.service';
import * as $ from 'jquery';
import { AnonymousSubject } from 'rxjs/Subject';

@Component({
  selector: 'app-student-select',
  templateUrl: './student-select.component.html',
  providers: [ StudentSelectService ],
  styleUrls: ['./student-select.component.css']
})
export class StudentSelectComponent implements OnInit {

  // 受講生一覧データ
 // @Input() monthStudentParameter = new EventEmitter<MonthStudentParameter>();
 @Input() monthStudentParameter:MonthStudentParameter; 
  // 選択月
  @Input() selectMonth = new EventEmitter<string>();

  // 選択月表示用
  public month: number;

  // 日時
  public shortDate: Date;

  // 欠席フラグ
  public absenceFlg: boolean = false;

  // 連絡なしフラグ
  public contactFlg: boolean = null;

  public studentList: MonthStudentParameter;

  /**
   * コンストラクタ
   * @param route 
   * @param router 
   * @param studentSelectService 
   * @param _http 
   */
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studentSelectService: StudentSelectService,
    private _http: Http
  ) { }

  /** 
   * 初期化 
   */
  ngOnInit() {
    this.month = Number(this.selectMonth);
    this.shortDate = new Date();
  }

  /**
   * 出欠登録処理
   * @param studentId 
   * @param absenceFlg 
   * @param contactFlg 
   */
  public saveAttendRequest(studentId: string, absenceFlg: boolean, contactFlg: boolean): void {
    // Spring RestFullAPI処理
    let apiParameter = 'http://192.168.1.99:8080/CollegeAbsenteeSystem/attendance/postAttendance/';

    this.studentSelectService.saveStudentAttendance(apiParameter, this.setSaveParameter(studentId, absenceFlg, contactFlg))
    .then(
      response => {
        this.router.navigate(['attend']);
      }
    );
  }

  /**
   * 登録用パラメータを設定
   * @param studentId 
   */
  public setSaveParameter(studentId: string, absenceFlg: boolean, contactFlg: boolean): URLSearchParams {
    let saveParam = new URLSearchParams();
    saveParam.set("collegeStudentId", studentId);
    saveParam.set("isAbsence", String(absenceFlg));
    saveParam.set("isContact", String(contactFlg));
    return saveParam;
  }

  /**
   * 欠席、連絡なし等のフラグ切り替え
   * @param checkNumber 
   */
  public changeFlg(checkNumber: number) {
    if(!(this.absenceFlg) && (checkNumber == 1)) {
      this.absenceFlg = true;
      this.contactFlg = true;
    } else if((this.absenceFlg) && (this.contactFlg) && (checkNumber == 2)) {
      this.contactFlg = false;
    } else if((this.absenceFlg) && (checkNumber == 1)) {
      this.absenceFlg = false;
      this.contactFlg = null;
    }
  }

}
