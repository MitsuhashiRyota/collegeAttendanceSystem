import { Component, OnInit } from '@angular/core';
import { Http, Jsonp, URLSearchParams } from '@angular/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-chime',
  templateUrl: './chime.component.html',
  styleUrls: ['./chime.component.css']
})
export class ChimeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /**
   * チャイム開始
   * @param id 
   * @param startChimeFlg 
   */
  public startChime(id: string, startChimeFlg: boolean) {

    startChime(id, startChimeFlg);

    function startChime (id, startChimeFlg) {
      console.log(startChimeFlg);
      console.log(id);

      // 非同期通信
      $.ajax({
        url: 'http://192.168.1.127:8080/chime/start',
        type: 'POST',
        data: {
          "stopChimeFlg": startChimeFlg,
          "id": id
              },
        success: function(result) {
          console.log("OK");
        },
        error: function(error) {
          console.log("NG");
        }
      });
    }
  }
}