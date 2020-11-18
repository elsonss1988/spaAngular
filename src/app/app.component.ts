import { Component,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'spa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Projeto Avanade';
  constructor(public dialog: MatDialog){

  }
    openDialog() {
      const dialogRef =this.dialog.open(AppComponent,{
        height:'350px'
      });
      dialogRef.afterClosed().subscribe(result=>{
        console.log(`Dialog result: ${result}`);
    })
  }
}
