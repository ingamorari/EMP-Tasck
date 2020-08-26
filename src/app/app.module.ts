import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { ProgressComponent } from './components/progress.component';
import { ToggleButtonComponent } from './components/toggle.component';
import { DebounceDirective } from './utils/debounce.directive';

const HelperComponents = [ProgressComponent, ToggleButtonComponent];

@NgModule({
  declarations: [AppComponent, ...HelperComponents, DebounceDirective],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgSelectModule, FormsModule],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}
