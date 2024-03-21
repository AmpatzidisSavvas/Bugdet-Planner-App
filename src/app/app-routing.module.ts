import { NgModule } from '@angular/core';
import { RouterModule, Routes, NoPreloading  } from '@angular/router';

const routes: Routes = [
  {path:'budget-planner', loadChildren: () => import('./budget-planner/budget-planner.module').then(m => m.BudgetPlannerModule),
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: NoPreloading })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
