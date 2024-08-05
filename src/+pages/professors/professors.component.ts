import { Component } from '@angular/core';
import { Professor } from '../../+models/Professor';
import { GridComponent } from '../../+components/grid/grid.component';

@Component({
  selector: 'app-professors',
  standalone: true,
  imports: [GridComponent],
  templateUrl: './professors.component.html',
  styleUrl: './professors.component.css'
})
export class ProfessorsComponent {

  //The following array is used as our database
professors:Professor[]=[
  {Name:"Ahmad", ID:10, Field:"Teaching"},
  {Name:"Mahmood", ID:11, Field:"Translation"},
  {Name:"Reza", ID:12, Field:"Literature"}
]
}
