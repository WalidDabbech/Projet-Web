import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { SessionItemComponent } from './session-item/session-item.component';
import { SessionItemListComponent } from './session-item-list/session-item-list.component';
import { SessionAddFormComponent } from './session-add-form/session-add-form.component';
import { SessionEditFormComponent } from './session-edit-form/session-edit-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FormateurAddFormComponent } from './formateur-add-form/formateur-add-form.component';
import { FormateurEditFormComponent } from './formateur-edit-form/formateur-edit-form.component';
import { FormateurItemLisComponent } from './formateur-item/formateur-item-lis.component';
import {FormateursComponent} from './formateur/formateurs.component';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input'
import {MatIconModule} from '@angular/material/icon';
import { ParticipantAddFormComponent } from './participant-add-form/participant-add-form.component';
import { ParticipanEditFormComponent } from './participan-edit-form/participan-edit-form.component';
import { ParticipanItemComponent } from './participan-item/participan-item.component';
import { ParticipantComponent } from './participant/participant.component';
const adminRoutes: Routes = [
  {
  path: '',
  component: AdminComponent,
  children: [{ path: 'add', component: SessionAddFormComponent },
  { path: 'edit/:id', component:
  SessionEditFormComponent },
  { path: 'list', component: SessionItemListComponent
  },
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  ],
  }
  ];

@NgModule({
  declarations: [AdminComponent, SessionItemComponent, SessionItemListComponent, SessionAddFormComponent, SessionEditFormComponent, FormateurAddFormComponent, FormateurEditFormComponent, FormateurItemLisComponent,FormateursComponent, ParticipantAddFormComponent, ParticipanEditFormComponent, ParticipanItemComponent, ParticipantComponent],
  imports: [RouterModule.forChild(adminRoutes),
    CommonModule,
    FormsModule,
    MatListModule,
    MatInputModule,
    MatIconModule
  ],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
