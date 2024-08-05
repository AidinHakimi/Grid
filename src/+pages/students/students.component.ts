import { Component } from '@angular/core';
import { Student } from '../../+models/Student';
import { GridComponent } from '../../+components/grid/grid.component';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [GridComponent],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {

  //The following array serves as our database
  students: Student[] = [
    { Name: "Ali", ID: 2 },
    { Name: "Mohammad", ID: 1 }
  ]
}
