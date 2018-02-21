// Injection
import { Injectable } from '@angular/core';

// HTTP
import { Http } from "@angular/http";
import { Observable } from "rxjs/observable";
import "rxjs/add/operator/toPromise";

// Parameter Component
import { MonthSelectParameter } from "../parameter/monthSelectParameter";
import { MonthStudentParameter } from "../parameter/monthStudentParameter";

import { Router } from '@angular/router';

@Injectable()
export class MonthSelectService {

  constructor(
    // Http 初期化
    private _http: Http,
    private router: Router
  ) { }

  /**
   * 昼カレッジ、夜カレッジ値により対象の月値を取得
   * @param url SpringAPI
   */
  public getMonthParam(url: string): Promise<MonthSelectParameter> {
    // http Get通信
    return this._http.get(url).toPromise()
    .then(
      response => {
        return response.json() as MonthSelectParameter;
      }
    )
    .catch(
      error => {
        this.router.navigate(['error']);
        return error.status;
      }
    );
  }

  /**
   * 対象月のカレッジ受講生情報を取得
   * @param url 
   */
  public getStudentInformation(url: string): Promise<MonthStudentParameter> {
    // APIへリクエスト
    return this._http.get(url).toPromise()
    .then(
      response => {
        return response.json() as MonthStudentParameter;
      }
    )
    .catch(
      error => {
        this.router.navigate(['error']);
        return error.status;
      }
    );
  }
}