import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Team} from '../../interfaces/teams.interface';
import {TeamsService} from '../../services/teams.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styles: [`
  img{
    width: 100%;
    border-radius: 5px;
  }`]
})
export class TeamComponent implements OnInit {
  team!: Team;

  constructor(private route: ActivatedRoute,
              private teamsService: TeamsService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.route.params
    .pipe(
      switchMap( ({id}) => this.teamsService.getTeamById(Number(id)))
    )
    .subscribe(params => this.team = params);
  }

  back(){
    this.router.navigate(['/teams/list']);
  }

}
