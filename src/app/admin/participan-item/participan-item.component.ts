import { Component, OnInit, Input } from '@angular/core';
import { FakeParticipantServiceService } from '../fake-participant-service.service';

@Component({
  selector: 'app-participan-item',
  templateUrl: './participan-item.component.html',
  styleUrls: ['./participan-item.component.css']
})
export class ParticipanItemComponent implements OnInit {
@Input() participant: any;

  constructor(private participantItemService: FakeParticipantServiceService) { }

  ngOnInit(): void {
  }
  onDelete()
  {
this.participantItemService.delete(this.participant);
  }

}
