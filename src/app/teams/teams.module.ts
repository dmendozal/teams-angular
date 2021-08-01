import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';

import {TeamsRoutingModule} from './teams-routing.module';
import {MaterialModule} from '../material/material.module';

import {AddComponent} from './pages/add/add.component';
import {SearchComponent} from './pages/search/search.component';
import {TeamComponent} from './pages/team/team.component';
import {HomeComponent} from './pages/home/home.component';
import {ListComponent} from './pages/list/list.component';
import {TeamCardComponent} from './components/team-card/team-card.component';
import { ConfirmComponent } from './components/confirm/confirm.component';

@NgModule({
  declarations: [
    AddComponent,
    SearchComponent,
    TeamComponent,
    HomeComponent,
    ListComponent,
    TeamCardComponent,
    ConfirmComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    TeamsRoutingModule,
    MaterialModule
  ]
})
export class TeamsModule {
}
