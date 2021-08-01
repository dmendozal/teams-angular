import {Component, OnInit} from '@angular/core';
import {TeamsService} from '../../services/teams.service';
import {Team} from '../../interfaces/teams.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {

  teams: Team[] = [];

  constructor(private teamsService: TeamsService) {
  }

  ngOnInit(): void {
    this.teamsService.getTeams()
    .subscribe(teams => this.teams = teams);
  }

}
