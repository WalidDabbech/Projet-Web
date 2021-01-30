import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SessionItemComponent } from './session-item/session-item.component';
import { SessionItemListComponent } from './session-item-list/session-item-list.component';
import { InscriptionDisabledDirective } from './inscription-disabled.directive';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import {FormateursComponent} from './admin/formateur/formateurs.component';
import { FormateurAddFormComponent } from './admin/formateur-add-form/formateur-add-form.component';
import {ParticipantComponent} from './admin/participant/participant.component';
import {ParticipantAddFormComponent} from './admin/participant-add-form/participant-add-form.component';
import { from } from 'rxjs';
import {FormateurEditFormComponent} from './admin/formateur-edit-form/formateur-edit-form.component';
const appRoutes: Routes = [
  
  {
  path: 'list',
  component: SessionItemListComponent},
  {
  path: 'admin',
  loadChildren: './admin/admin.module#AdminModule'
  },
  {path: 'dashboard',component: DashboardComponent},
  {path: 'addformateur', component: FormateurAddFormComponent},
  {path: 'editformateur', component : FormateurEditFormComponent},
  {path: 'addparticipant', component: ParticipantAddFormComponent},
  {path: 'formateurs',component:FormateursComponent},
  {path: 'participants',component:ParticipantComponent},
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent }
  ];
@NgModule({
  declarations: [
    AppComponent,
    SessionItemComponent,
    SessionItemListComponent,
    InscriptionDisabledDirective,
    PagenotfoundComponent,
    DashboardComponent  ],
  imports: [RouterModule.forRoot(
    appRoutes,
    { enableTracing: true }
    ),
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatInputModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
