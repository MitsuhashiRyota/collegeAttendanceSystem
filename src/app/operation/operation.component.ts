import { Component, OnInit } from '@angular/core';
import { Http, Jsonp, URLSearchParams } from '@angular/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})

/**
 * ベルチャイム開始・終了
 */
export class OperationComponent implements OnInit {

  // 総合受付
  private generalRreceptionSound: HTMLAudioElement;

  // 研修事業部
  private trainingDivisionSound: HTMLAudioElement;

  // システム開発部
  private systemDevelopmentDepartmentSound: HTMLAudioElement;

  // 人事部
  private humanResourcesDepartmentSound: HTMLAudioElement;

  // サウンドID
  private id: number;
  
  /**
   * コンストラクタ
   */
  constructor() {
    this.generalRreceptionSound = new Audio('assets/generalReception.mp3');
    this.trainingDivisionSound = new Audio('assets/trainingDivision.mp3');
    this.systemDevelopmentDepartmentSound = new Audio('assets/systemDevelopmentDepartment.mp3');
    this.humanResourcesDepartmentSound = new Audio('assets/humanResourcesDepartment.mp3');
   }

   /** 
    * 初期化処理 
    */
  ngOnInit() {
    
    this.generalRreceptionSound.load();
    this.trainingDivisionSound.load();
    this.systemDevelopmentDepartmentSound.load();
    this.humanResourcesDepartmentSound.load();

    polling(
      this.generalRreceptionSound,
      this.trainingDivisionSound,
      this.systemDevelopmentDepartmentSound,
      this.humanResourcesDepartmentSound,
    );
    
    /**
     * Polling
     * @param generalRreceptionSound 
     * @param trainingDivisionSound 
     * @param systemDevelopmentDepartmentSound 
     * @param humanResourcesDepartmentSound 
     */
    function polling(
      generalRreceptionSound,
      trainingDivisionSound,
      systemDevelopmentDepartmentSound,
      humanResourcesDepartmentSound
    ) 
    {
      var POLLLING_INVERVAL_TIME_IN_MILLIS = 1000;//10s
      (function polling() {
        checkChimeFlg(
          generalRreceptionSound,
          trainingDivisionSound,
          systemDevelopmentDepartmentSound,
          humanResourcesDepartmentSound
        );
        window.setTimeout(polling, POLLLING_INVERVAL_TIME_IN_MILLIS);
      }());
    };

    function checkChimeFlg(
      generalRreceptionSound,
      trainingDivisionSound,
      systemDevelopmentDepartmentSound,
      humanResourcesDepartmentSound
    ) 
    {
      $.ajax({
        url: 'http://192.168.1.99:8080/CollegeAbsenteeSystem/chime',
        type: 'get',
        success: function(result) {
           if(result[0].chimeFlg == 0) {
            $('.startSound').val(result[0].id);
            $('.startSound')[0].click();
          } else if(result[1].chimeFlg == 0) {
            $('.startSound').val(result[1].id);
            $('.startSound')[0].click();
          } else if(result[2].chimeFlg == 0) {
            $('.startSound').val(result[2].id);
            $('.startSound')[0].click();
          } else if(result[3].chimeFlg == 0) {
            $('.startSound').val(result[3].id);
            $('.startSound')[0].click();
          }
        },
        error: function(error) {
          console.log('NG');
        }
    });
    }
  }

  /**
   * 音楽再生
   * @param id 
   */
  public soundPlay(id: number): void {
    this.id = id['target']['value'];

    if(this.id == 1) {
      this.generalRreceptionSound.play();
    } else if(this.id == 2) {
      this.trainingDivisionSound.play();
    } else if(this.id == 3) {
      this.systemDevelopmentDepartmentSound.play();
    } else if(this.id == 4) {
      this.humanResourcesDepartmentSound.play();
    }
  }

  /** 
   * 音楽停止 
   */
  public stopChime() {
    // 即時音楽を停止
    if(this.id == 1) {
      this.generalRreceptionSound.pause();
      this.generalRreceptionSound.currentTime = 0;
    } else if(this.id == 2) {
      this.trainingDivisionSound.pause();
      this.trainingDivisionSound.currentTime = 0;
    } else if(this.id == 3) {
      this.systemDevelopmentDepartmentSound.pause();
      this.systemDevelopmentDepartmentSound.currentTime = 0;
    } else if(this.id == 4) {
      this.humanResourcesDepartmentSound.pause();
      this.humanResourcesDepartmentSound.currentTime = 0;
    } 

    // Ajax
    $(function() {
      $.ajax({
        url: 'http://192.168.1.99:8080/CollegeAbsenteeSystem/chime/stop',
        type: 'POST',
        data: {
          'stopChimeFlg': $('.stopbutton').val()
              },
        success: function(result) {
        },
        error: function(error) {
          console.log('NG');
        }
      });
    });
  }
  
  /** 
   *  音楽ファイル読み込み処理
   */
  public soundTest() {
    this.generalRreceptionSound.play();
    this.trainingDivisionSound.play();
    this.systemDevelopmentDepartmentSound.play();
    this.humanResourcesDepartmentSound.play();
  }
}
