import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef  } from '@angular/material/dialog';
import { Employee } from '../employee';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<DialogComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  deleteEmp(delEmp: Employee, functionalty: boolean){
    this.dialogRef.close({delEmp, functionalty})
  }

  updateEmp(updEmp: Employee, compensation: number, functionalty: boolean){
    this.dialogRef.close({updEmp, compensation, functionalty})
  }
}
