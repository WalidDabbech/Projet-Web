import { Component, OnInit } from '@angular/core';
import {FakeParticipantServiceService} from '../fake-participant-service.service';

@Component({
  selector: 'app-participant-add-form',
  templateUrl: './participant-add-form.component.html',
  styleUrls: ['./participant-add-form.component.css']
})
export class ParticipantAddFormComponent implements OnInit {
  constructor(private participantItemService: FakeParticipantServiceService) { }

  ngOnInit(): void {
  }
addparticipant(participantItem) {
console.log(participantItem);
this.participantItemService.add(participantItem);
}

}
