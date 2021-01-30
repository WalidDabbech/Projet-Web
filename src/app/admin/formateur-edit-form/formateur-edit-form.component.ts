import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FakeFormateurServiceService } from '../fake-formateur-service.service';
import { Formateur } from '../formateur';

@Component({
  selector: 'app-formateur-edit-form',
  templateUrl: './formateur-edit-form.component.html',
  styleUrls: ['./formateur-edit-form.component.css']
})
export class FormateurEditFormComponent implements OnInit {
  id;
  private sub: any;
  formateur:any;
  constructor(private route: ActivatedRoute, private formateurItemService: FakeFormateurServiceService) { }
  ngOnInit() {
  this.sub = this.route.params.subscribe(params => {
  this.id = params['id']; // (+) converts string 'id' to a number
  });
  console.log('Formateur ID ' + this.id.toString());
  this.formateur = this.formateurItemService.getFormateur(this.id);
  }
  editFormateur(formateurItem) {
  console.log(formateurItem);
  }

}
