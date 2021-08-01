import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Team} from '../interfaces/teams.interface';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(`${ this.baseUrl }/teams`);
  }

  getTeamById(id: number): Observable<Team> {
    return this.http.get<Team>(`${ this.baseUrl }/teams/${ id }`);
  }

  getSuggestions(value: string): Observable<Team[]> {
    return this.http.get<Team[]>(`${ this.baseUrl }/teams?q=${ value }&_limit=6`);
  }

  addTeam(team: Team): Observable<Team> {
    return this.http.post<Team>(`${this.baseUrl}/teams`, team);
  }

  updateTeam(team: Team): Observable<Team> {
    return this.http.put<Team>(`${this.baseUrl}/teams/${team.id}`, team);
  }

  deleteTeam(id?: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/teams/${id}`);
  }
}
