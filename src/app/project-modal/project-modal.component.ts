import { Project } from './../models/project';
import { Component, OnInit, Input } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.scss']
})
export class ProjectModalComponent implements OnInit {

  @Input() project: Project;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
  }

}
