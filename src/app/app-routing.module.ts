import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'companies',
        loadChildren: () => import('./company/company.module').then((m) => m.CompanyModule),
      },
      { path: '', redirectTo: 'companies', pathMatch: 'full' },
      { path: '**', redirectTo: 'companies' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
