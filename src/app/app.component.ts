import { Component } from '@angular/core';
import { Session } from './admin/session';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'training-app-D';
  name = "Walid SAAD";
  //session_name = "Formation Mobile";
  nbpart: number=0;
  firstSession= {
    id: 1,
    name: 'Formation Angular',
    track: 'MEAN Stack',
    date: new Date('2020-11-19'),
    duree: 3,
    local: 'Tunis',
    participants: 0
  }
  nbrParticipantsChange (event)
  {
   this.nbpart = event.value;
  }
  SESSIONITEMS: Session[] = [
    {
        id: 1,
    name: 'Web',
    track: 'MEAN',
    date: new Date('2018-06-13'),
    duree: 3,
    adress: 'Lyon',
    participants: 0,
    isCompleted : false
    },
    {
    id: 2,
    name: 'Mobile',
    track: 'Ionic',
    date: new Date('2018-08-10'),
    duree: 5,
    adress: 'Paris',
    participants: 0,
    isCompleted : false
    },
    {
    id: 3,
    name: 'Web',
    track: 'NodeJS',
    date: new Date('2018-07/20'),
    duree: 5,
    adress: 'Lyon',
    participants: 0,
    isCompleted : false
    },
    {
        id: 4,
        name: 'Web',
        track: 'Angular',
        date: new Date('2020-12/12'),
        duree: 5,
        adress: 'Tunis',
        participants: 0,
        isCompleted : false
        }
    ];
  
}