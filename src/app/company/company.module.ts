import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { companyComponents, CompanyRoutingModule } from './company-routing.module';

@NgModule({
  declarations: [...companyComponents],
  imports: [CompanyRoutingModule, SharedModule],
})
export class CompanyModule {}
