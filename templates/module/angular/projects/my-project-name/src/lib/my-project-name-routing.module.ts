import { NgModule } from '@angular/core';
import { DynamicLayoutComponent } from '@abp/ng.core';
import { Routes, RouterModule } from '@angular/router';
import { MyProjectNameComponent } from './components/my-project-name.component';

const routes: Routes = [
  {
    path: '',
    component: DynamicLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', component: MyProjectNameComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyProjectNameRoutingModule {}
