import { Component, OnInit } from '@angular/core';
import {Team} from '../../interfaces/teams.interface';
import {TeamsService} from '../../services/teams.service';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  valueToSearch = '';
  teams: Team[] = [];
  teamSelected: Team | undefined;

  constructor(private teamsService: TeamsService) { }

  ngOnInit(): void {
  }

  searching() {
    this.teamsService.getSuggestions(this.valueToSearch.trim())
      .subscribe(teams => this.teams = teams);
  }

  optionSelected(event: MatAutocompleteSelectedEvent) {
    if (!event.option.value){
      this.teamSelected = undefined;
      return;
    }
    const team: Team = event.option.value;
    this.valueToSearch = team.name;

    this.teamsService.getTeamById(Number(team.id))
      .subscribe((team) => this.teamSelected = team);
  }
}
