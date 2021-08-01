import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Team} from '../../interfaces/teams.interface';
import {TeamsService} from '../../services/teams.service';
import {switchMap} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmComponent} from '../../components/confirm/confirm.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 5px;
    }`]
})
export class AddComponent implements OnInit {

  leagues = [
    {
      id: 2072,
      name: 'England'
    },
    {
      id: 2071,
      name: 'Spain'
    },
    {
      id: 2070,
      name: 'Germany'
    }];

  team: Team = {
    name: '',
    phone: '',
    lastUpdated: new Date(),
    alt_img: undefined,
    address: '',
    website: '',
    email: null,
    tla: null,
    clubColors: '',
    founded: null,
    venue: '',
    shortName: '',
    area: {
      id: null,
      name: ''
    },
    crestUrl: ''
  };

  constructor(private teamsService: TeamsService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private snackBar: MatSnackBar,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) {
      return;
    }
    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.teamsService.getTeamById(id))
    )
    .subscribe(team => this.team = team);
  }

  saveTeam() {
    if (this.team.name.trim().length === 0) {
      console.log('escriba el nombre del equipo');
      console.log(this.team);
      return;
    }
    this.team.area.name = this.leagues.find(league => league.id === this.team.area.id)?.name;

    if (this.team.id) {
      // Update
      this.teamsService.updateTeam(this.team)
      .subscribe(team => {
        this.router.navigate(['/teams/list', team.id]);
        this.showSnackBar('registro actualizado');
      });
    } else {
      // Create
      this.teamsService.addTeam(this.team)
      .subscribe(team => {
        this.router.navigate(['/teams/edit', team.id]);
        this.showSnackBar('registro creado');
      });
    }
  }

  deleteTeam() {
     const dialog = this.dialog.open(ConfirmComponent, {
       width: '250px',
       data: this.team
     });

     dialog.afterClosed().subscribe(
       (result) => {
         if (result){
           this.teamsService.deleteTeam(this.team.id)
             .subscribe(resp => {
               this.router.navigate(['/teams']);
               this.showSnackBar('Registro eliminado');
             });
         }
       }
     );

  }

  showSnackBar(message: string): void {
    this.snackBar.open(message, 'ok!', {
      duration: 2000
    });
  }
}
