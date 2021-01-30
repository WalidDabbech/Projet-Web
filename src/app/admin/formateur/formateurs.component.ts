import { Component, OnInit } from '@angular/core';
import { FakeFormateurServiceService } from '../fake-formateur-service.service';

@Component({
  selector: 'app-formateurs',
  templateUrl: './formateurs.component.html',
  styleUrls: ['./formateurs.component.css']
})
export class FormateursComponent implements OnInit {
 formateurItems ;
  constructor(private formateurItemService: FakeFormateurServiceService) { }
  ngOnInit(): void {
    this.formateurItems= this.formateurItemService.get();
  }
  refreshPage() {
    window.location.reload();
   }

}
