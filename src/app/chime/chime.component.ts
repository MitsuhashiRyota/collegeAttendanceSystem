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
  
  /** 
   * 初期化処理 
   */
  ngOnInit() {
    $(".on-click-button").on("touchend", function() {
        $(".on-click-button").removeClass("on-click-button").addClass("ng-click-button");
        $(".message").html("只今呼び出し中です。<br>その場で少々お待ちください。");
    });
  }

  /**
   * チャイム開始
   * @param id 
   * @param startChimeFlg 
   */
  public startChime(id: string, startChimeFlg: boolean) {

    startChime(id, startChimeFlg);
    resetStyle();

    /**
     * チャイム開始メソッド
     * @param id 
     * @param startChimeFlg 
     */
    function startChime (id, startChimeFlg) {
      $.ajax({
        url: 'http://192.168.1.99:8080/chime/start',
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

    /**
     * 呼び出しボタン非活性化
     */
    function resetStyle() {
      setTimeout(function() {
        $(".ng-click-button").removeClass("ng-click-button").addClass("on-click-button");
        $(".message").html("<p class='message'><p>");
    },5000);
    }
  }
}