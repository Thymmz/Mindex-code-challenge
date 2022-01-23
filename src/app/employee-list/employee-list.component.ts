import {Component, OnInit} from '@angular/core';
import {catchError, map, reduce} from 'rxjs/operators';

import {Employee} from '../employee';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  errorMessage: string;

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.employeeService.getAll()
      .pipe(
        reduce((emps, e: Employee) => emps.concat(e), []),
        map(emps => this.employees = emps),
        catchError(this.handleError.bind(this))
      ).subscribe();
  }

  // private updateReport(employee: Employee){
  //   this.employeeService.save(employee)
  //   .subscribe(()=> {},
  //   catchError(this.handleError.bind(this))
  //   )
  // }

  // private removeReport(employee: Employee){
  //   this.employeeService.remove(employee)
  //   .subscribe(
  //     () => this.removeReportFromList(employee),
  //     catchError(this.handleError.bind(this))
  //   )
  // }

  // private removeReportFromList(employee: Employee){
  //   let index = this.employees.indexOf(employee, 0);

  //   if(index > -1){
  //     this.employees.splice(index, 1)
  //   }
  // }

  private updateReportCompensation(val: number){
      console.log("Event Fired - Update");
    }

    private deleteReport(val: number){
      console.log("Event Fired - Delete");
    }

  private handleError(e: Error | any): string {
    console.error(e);
    return this.errorMessage = e.message || 'Unable to retrieve employees';
  }

}
