import {Component, Input} from '@angular/core';
import {Team} from '../../interfaces/teams.interface';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styles: [
    `mat-card {
      margin-top: 20px;
    }`
  ]
})
export class TeamCardComponent{

  @Input() team!: Team;

}
