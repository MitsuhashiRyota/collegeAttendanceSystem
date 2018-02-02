import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-student-select',
  templateUrl: './student-select.component.html',
  styleUrls: ['./student-select.component.css']
})
export class StudentSelectComponent implements OnInit {

  public month:number;
  public nightFlg:number;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    // 受講生ID
    this.route.params.subscribe(
      params => this.month = params['month']
    );

    // 夜間カレッジフラグ※昼間の場合はNull
    this.route.params.subscribe(      
      params => this.nightFlg = params['nightFlg']
    );
    console.log(this.month);
    console.log(this.nightFlg);
    if(this.nightFlg == null) {
      this.nightFlg = 0;
    }
  }

  public insertAttendData(): void {
    // Springとの処理をが走る
    this.router.navigate(['attend']);
  }

  public getMonthStudentInformation() {

  }

}
