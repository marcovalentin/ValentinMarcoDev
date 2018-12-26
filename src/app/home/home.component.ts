import { Project } from './../models/project';
import { ProjectModalComponent } from './../project-modal/project-modal.component';
import { Pages } from './../models/pages';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  page: Pages = Pages.ABOUT;

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
  }

  openProjectDescription(project: Project) {
    const modalRef = this.modalService.open(ProjectModalComponent, {centered: true, size: 'lg'});
    modalRef.componentInstance.project = project;
  }

  onChangePage(page: Pages) {
    this.page = page;
  }

}
