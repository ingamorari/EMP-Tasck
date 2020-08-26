import { Directive, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[ngModel][debounce]',
})
export class DebounceDirective implements OnInit {
  @Output()
  public onDebounce = new EventEmitter<any>();

  @Input()
  public debounce = 500;

  private isFirstChange = true;

  constructor(public model: NgControl) {}

  public ngOnInit(): void {
    this.model.valueChanges
      .debounceTime(this.debounce)
      .distinctUntilChanged()
      .subscribe((modelValue) => {
        if (this.isFirstChange) {
          this.isFirstChange = false;
        } else {
          this.onDebounce.emit(modelValue);
        }
      });
  }
}
