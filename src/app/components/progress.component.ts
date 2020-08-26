import { Component, Input, OnInit } from '@angular/core';
import { ITableData } from '../constants';

@Component({
  selector: 'app-progress',
  template: `<div class="progress-block">
    <div class="bar">
      <div class="content" [style.background]="progressData?.background" [style.width]="progressData?.percents"></div>
    </div>
    <div class="percent">{{ progressData?.percents }}</div>
  </div>`,
  styles: [
    `
      .progress-block {
        width: 100%;
        height: 100%;
      }
      .progress-block .bar {
        height: 15px;
        border-radius: 30px;
        border: 1px solid gray;
        overflow: hidden;
      }
      .progress-block .bar .content {
        height: 100%;
        border-radius: 30px;
      }

      .progress-block .percent {
        text-align: center;
      }
    `,
  ],
})
export class ProgressComponent implements OnInit {
  @Input()
  targetValue: number;
  @Input()
  baseValue: number;

  progressData;

  ngOnInit(): void {
    if (this.targetValue != null && this.baseValue != null) {
      const percents = this.baseValue ? Math.round((this.baseValue / this.targetValue) * 100) : 0;
      this.progressData = {
        percents: percents + '%',
        background:
          percents > 25
            ? percents > 75
              ? 'linear-gradient(270deg, rgba(0,100,42,1) 0%, rgba(124,197,54,1) 51%)'
              : 'linear-gradient(270deg, rgba(246,139,52,1) 0%, rgba(255,204,167,1) 100%)'
            : 'linear-gradient(270deg, rgba(241,39,17,1) 0%, rgba(246,139,52,1) 100%)',
      };
    }
  }
}
