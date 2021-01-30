import { Component, OnInit } from '@angular/core';
import {FakeFormateurServiceService} from '../fake-formateur-service.service';

@Component({
  selector: 'app-formateur-add-form',
  templateUrl: './formateur-add-form.component.html',
  styleUrls: ['./formateur-add-form.component.css']
})
export class FormateurAddFormComponent implements OnInit {
  constructor(private formateurItemService: FakeFormateurServiceService) { }

  ngOnInit(): void {
  }
addFormateur(formateurItem) {
console.log(formateurItem);
this.formateurItemService.add(formateurItem);
}
}
