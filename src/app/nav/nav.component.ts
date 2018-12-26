import { Pages } from './../models/pages';
import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Output() changePage = new EventEmitter<Pages>();
  currentPage: Pages = Pages.ABOUT;
  @ViewChild('navbar') navbar: any;

  constructor() { }

  ngOnInit() {
    this.navbar.show();
  }

  onChangePage(page: Pages) {
    this.currentPage = page;
    this.changePage.emit(page);
  }

}
