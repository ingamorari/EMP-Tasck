import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ProgressComponent } from './components/progress.component';
import { ToggleButtonComponent } from './components/toggle.component';
import { DebounceDirective } from './utils/debounce.directive';

const HelperComponents = [ProgressComponent, ToggleButtonComponent];

const Directives = [DebounceDirective];

const Modules = [CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule, NgSelectModule];

@NgModule({
  declarations: [...Directives, ...HelperComponents],
  imports: [...Modules],
  exports: [...Modules, ...Directives, ...HelperComponents],
})
export class SharedModule {}
