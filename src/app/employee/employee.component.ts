import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

import {Employee} from '../employee';
import { EmployeeService } from '../employee.service';
import { Observable, from} from 'rxjs';
import { flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{
  @Input() employee: Employee;
  @Output() updateCompensation = new EventEmitter<number>();
  @Output() deleterReport = new EventEmitter<number>();
  compensation: number;
  totalEmployeeReports: number;
  reportName: Employee[];
  
  constructor(private employeeService: EmployeeService) {
	  this.totalEmployeeReports = 0; //initialize direct reports
    this.reportName = []
    //console.log(this.reportName)
  }
  ngOnInit(){
	this.setTotalReports(this.employee); //always run on start to display directReports on cards
  this.getReports(this.employee);
  }

  update(){
    this.updateCompensation.emit(100)
  }

  delete(){
    this.deleterReport.emit(100)
  }

  setTotalReports(employee: Employee){
	if(employee.directReports){
		this.totalEmployeeReports += employee.directReports.length;
		from(employee.directReports).pipe(
			flatMap(id => <Observable<Employee>> 
			this.employeeService.get(id))
		).subscribe(
			nextEmployee => this.setTotalReports(nextEmployee)
		);
	}
  }

  getReports(employee: Employee){
    if(employee.directReports){
      employee.directReports.forEach((id: number)=>
      this.employeeService.get(id)
      .subscribe(emp => this.reportName.push(emp),
      nextEmployee => this.setTotalReports(nextEmployee)
      )
      )
  }
  }

}