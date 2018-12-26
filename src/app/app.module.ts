import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbPaginationModule, NgbModalModule, NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NavbarModule, WavesModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { StudiesComponent } from './studies/studies.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { ProjectModalComponent } from './project-modal/project-modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    SkillsComponent,
    StudiesComponent,
    NavComponent,
    AboutComponent,
    ProjectModalComponent
  ],
  imports: [
    BrowserModule,
    NgbPaginationModule,
    NgbModalModule,
    FormsModule,
    NgbCarouselModule,
    AngularFontAwesomeModule,
    WavesModule,
    NavbarModule,
    AppRoutingModule
  ],
  entryComponents: [
    ProjectModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
