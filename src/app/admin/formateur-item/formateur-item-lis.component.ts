import { Component, Input, OnInit } from '@angular/core';
import { FakeFormateurServiceService } from '../fake-formateur-service.service';

@Component({
  selector: 'app-formateur-item-lis',
  templateUrl: './formateur-item-lis.component.html',
  styleUrls: ['./formateur-item-lis.component.css']
})
export class FormateurItemLisComponent implements OnInit {
@Input() formateur: any;
  constructor(private foarmateurItemService: FakeFormateurServiceService) { }

  ngOnInit(): void {
  }
  onDelete()
  {
this.foarmateurItemService.delete(this.formateur);
  }

}
