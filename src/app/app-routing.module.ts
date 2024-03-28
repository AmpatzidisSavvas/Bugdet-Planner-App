import { NgModule } from '@angular/core';
import { RouterModule, Routes, NoPreloading  } from '@angular/router';
import { LoginComponent } from './budget-planner/login/login.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'budget-planner', loadChildren: () => import('./budget-planner/budget-planner.module').then(m => m.BudgetPlannerModule),
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: NoPreloading })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
