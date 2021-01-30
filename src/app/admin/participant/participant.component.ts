import { Component, OnInit } from '@angular/core';
import { FakeParticipantServiceService } from '../fake-participant-service.service';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit {

 participantItems ;
  constructor(private participantItemService: FakeParticipantServiceService) { }
  ngOnInit(): void {
    this.participantItems= this.participantItemService.get();
  }
  refreshPage() {
    window.location.reload();
   }

}
