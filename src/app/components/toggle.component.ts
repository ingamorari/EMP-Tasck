import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'toggle-button',
  template: `
    <input type="checkbox" [ngModel]="value" [id]="'toggle-button-checkbox-' + index" (change)="changeState($event)" />
    <label class="toggle-button-switch" [for]="'toggle-button-checkbox-' + index"></label>
    <div class="toggle-button-text">
      <div class="toggle-button-text-on"></div>
      <div class="toggle-button-text-off"></div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        position: relative;
      }

      input[type='checkbox'] {
        display: none;
      }

      .toggle-button-switch {
        position: absolute;
        width: 20px;
        top: 3px;
        left: 3px;
        height: 20px;
        background-color: #606770;
        border-radius: 100%;
        cursor: pointer;
        z-index: 100;
        transition: left 0.3s;
      }

      .toggle-button-text {
        overflow: hidden;
        background-color: #ebedf0;
        width: 50px;
        height: 25px;
        border-radius: 25px;
        border: 1px solid #606770;
        /*box-shadow: 2px 2px 5px 0 rgba(50, 50, 50, 0.75);*/
        transition: background-color 0.3s;
      }

      .toggle-button-text-on,
      .toggle-button-text-off {
        float: left;
        width: 50%;
        height: 100%;
        line-height: 50px;
        font-family: Lato, sans-serif;
        font-weight: bold;
        color: #fff;
        text-align: center;
      }

      input[type='checkbox']:checked ~ .toggle-button-switch {
        left: 27px;
        background-color: white;
      }

      input[type='checkbox']:checked ~ .toggle-button-text {
        background-color: #33de00;
        border: none;
      }
    `,
  ],
})
export class ToggleButtonComponent {
  @Input() value: boolean = false;
  @Input() index: number;

  @Output() changed = new EventEmitter<boolean>();

  changeState(event) {
    this.value = !this.value;
    this.changed.emit(event.target['checked']);
  }
}
