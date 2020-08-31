import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCompaniesComponent } from './list-companies/list-companies.component';
import { ViewCompanyComponent } from './view-company/view-company.component';

const routes: Routes = [
  { path: '', component: ListCompaniesComponent },
  { path: ':id', component: ViewCompanyComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyRoutingModule {}

export const companyComponents = [ListCompaniesComponent, ViewCompanyComponent];
