import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrl: './expense.component.scss'
})
export class ExpenseComponent {

  expenseForm: any;
  selectedMonth: any;
  monthSelected: boolean = false;
  expenses: { month: string, expenseAmount: number }[]= [
    {month: 'January', expenseAmount: 1500},
    {month: 'February', expenseAmount: 2000},
    {month: 'March', expenseAmount: 1800}
  ];

  januaryExpenses: any[] = [
    { expenseType: 'Rent', expenseAmount: 1000 },
    { expenseType: 'Groceries', expenseAmount: 500 }
  ];
  februaryExpenses: any[] = [
    { expenseType: 'Utilities', expenseAmount: 200 },
    { expenseType: 'Groceries', expenseAmount: 400 }
  ];
  marchExpenses: any[] = [
    { expenseType: 'Rent', expenseAmount: 1100 },
    { expenseType: 'Utilities', expenseAmount: 250 }
  ];
  

  constructor(private fb: FormBuilder, private router: Router) {
    
  }

  ngOnInit(): void {

    this.expenseForm = this.fb.group({
      month: ['', Validators.required],
      expenseType: ['', Validators.required],
      expenseAmount: ['', Validators.required]
    })
  }

  onChangeExpense(event:any) {
    this.selectedMonth = event?.target.value;
    this.monthSelected = true;
    this.getFilteredExpenses();
  }

  getFilteredExpenses() {
    let filteredExpenses: any[] = [];
    switch(this.selectedMonth) {
      case 'January':
        filteredExpenses = [...this.januaryExpenses];
        break;
      case 'February':
        filteredExpenses = [...this.februaryExpenses];
        break;
      case 'March':
        filteredExpenses = [...this.marchExpenses];
        break;
      default:
        break;
    }
    return filteredExpenses;
  }

  calculateTotalExpense(month: string): number {
    let totalExpense = 0;
    for(const expense of this.getExpensesForMonth(month)) {
      totalExpense += expense.expenseAmount;
    }
    return totalExpense;
  }

  getExpensesForMonth(month: string): any[] {
    switch(month) {
      case 'January':
        return this.januaryExpenses;
      case 'February':
        return this.februaryExpenses;
      case 'March':
        return this.marchExpenses;
      default:
        return [];
    }
  }

  onSubmitExpense() {
    if (this.expenseForm.valid) {
      const newExpense = this.expenseForm.value;
      switch(this.selectedMonth) {
        case 'January':
          this.januaryExpenses.push(newExpense);
          break;
        case 'February':
          this.februaryExpenses.push(newExpense);
          break;
        case 'March':
          this.marchExpenses.push(newExpense);
          break;
        default:
          break;
      }
      this.expenseForm.reset();
      this.expenseForm.patchValue({month:'', expenseType:'', expenseAmount:''})
    }
  }

  saveForm() {
    console.log('Form saved');
  }

  onBack() {
    this.router.navigate(['/budget-planner/dashboard'])
  }


}
