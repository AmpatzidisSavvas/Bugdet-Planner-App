import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetPlannerRoutingModule } from './budget-planner-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SideNavComponent } from './side-nav/side-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IncomeComponent } from './income/income.component';
import { ExpenseComponent } from './expense/expense.component';
import { TodoComponent } from './todo/todo.component';


@NgModule({
  declarations: [
    LoginComponent,
    SideNavComponent,
    DashboardComponent,
    IncomeComponent,
    ExpenseComponent,
    TodoComponent
  ],
  imports: [
    CommonModule,
    BudgetPlannerRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class BudgetPlannerModule { }
