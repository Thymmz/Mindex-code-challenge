import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import {Employee} from '../employee';
import { EmployeeService } from '../employee.service';
import { Observable, from} from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{
  @Input() employee: Employee;
  @Output() updateCompensation = new EventEmitter<Employee>();
  @Output() deleteReport = new EventEmitter<number>();
  totalEmployeeReports: number;
  reportName: Employee[];
  reportEmp: Employee;
  
  constructor(
    private employeeService: EmployeeService,
    public dialog: MatDialog,
    ) {
	  this.totalEmployeeReports = 0; //initialize direct reports
    this.reportName = []
    //console.log(this.reportName)
  }
  ngOnInit(){
	this.setTotalReports(this.employee); //always run on start to display directReports on cards
  this.getReports(this.employee); //always keep direct reporting employees to supervisor
  }

  // update(){
  //   this.updateCompensation.emit(100)
  // }

  // delete(){
  //   this.deleterReport.emit(100)
  // }

  //set total number of reports for each employee
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

  //get employee data for the reports directly reporting to each employee
  getReports(employee: Employee){
    if(employee.directReports){
      employee.directReports.forEach((id: number)=>
      this.employeeService.get(id)
      .subscribe(emp => this.reportName.push(emp) //push the employee to array of employees reporting to the supervising employee
      )
      )
  }
  }

  //open dialog on click and send the required
  openDialog(reporter : Employee, btnType: string){
    this.reportEmp = reporter
    let dialogRef = this.dialog.open(DialogComponent, 
      {
        data : {reporter, updateDelete: btnType
    }});

    dialogRef.afterClosed().subscribe(
      result => {
      if (result.functionalty == 0){
        console.log(`delete functionality initialed`)
      }
      else if (result.functionalty == 1){
        this.reportEmp.compensation = result.compensation
        this.updateCompensation.emit(this.reportEmp)
      }
      }
    )
  }

}