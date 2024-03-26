import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  //Income
  lastMonthsIncome = ['January: $1000', 'February: $1500', 'March: $1200'];
  currentMonthIncome = 2000;

  //Expense
  lastMonthsExpense = ['January: $800', 'February: $1000', 'March: $1200'];
  currentMonthExpense = 1500;

  // To Do Transactions
  todoTransactions = [
    {description: "Pay electricity bill"},
    {description: "Submit monthly report"},
    {description: "Buy groceries"},
    {description: "Call insurance company"}
  ]

  constructor(private router: Router) {}

  onIncome() {
    this.router.navigate(['/bugdet-planner/income']);
  }

  onExpense() {
    this.router.navigate(['/bugdet-planner/expense']);
  }

  onTodo() {
    this.router.navigate(['/bugdet-planner/todo']);
  }

  get currentMonthSavings(): number {
    return this.currentMonthIncome -this.currentMonthExpense;
  }

}
