import { Injectable } from '@angular/core';

// HTTP
import { Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/operator/toPromise';

import { Router } from '@angular/router';

// Parameter Component
// Insertだから不要では？

@Injectable()
export class StudentSelectService {

  constructor(
    private _http: Http,
    private router: Router
  ) { }

  /**
   * 出席対象の受講生情報を登録
   * @param url 
   * @returns number
   */
  public saveStudentAttendance(url: string, insertParameter: URLSearchParams): Promise<number> {
    return this._http.post(url, insertParameter).toPromise()
    .then(
      response => {
        return response.status;
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
