import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Project } from '../models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [];
  page = 0;

  @Output() describeProject: any = new EventEmitter<any>();

  constructor() {
    this.projects = [
      {
        title: 'Ribouldingue',
        description: 'Jeu ludique et original pour soirées alcoolisées',
        technologies: 'Angular6 / Ionic3',
        principalPhoto: './assets/projects/ribouldingue.png',
        photos: [
          './assets/projects/ribouldingue/photo1.png',
          './assets/projects/ribouldingue/photo2.png',
          './assets/projects/ribouldingue/photo3.png',
          './assets/projects/ribouldingue/photo4.png'
        ],
        links: {
          ios: 'https://itunes.apple.com/us/app/ribouldingue/id1438870109?l=fr&ls=1&mt=8',
          android: 'https://play.google.com/store/apps/details?id=fr.ribouldingue'
        }
      },
      {
        title: 'Stagiaire en tant que développeur FullStack',
        description: 'En charge du développement de nouvelles fonctionnalités (module de gestion de projet, tableaux génériques,…)',
        technologies: 'Angular4, HTML5, CSS3, NodeJS, MongoDB',
        duration: '3 mois',
        principalPhoto: './assets/projects/umi.png',
        links: {
          web: 'https://www.umi.us'
        }
      },
      {
        title: 'Conception d’une application en C++',
        description: 'Conception d’une application de diagnostic d’erreurs en '
        + 'Qt/C++ à destination du service maintenance de la société A-Sis.',
        technologies: 'C++, Qt, ORACLE',
        duration: '3 mois',
        principalPhoto: './assets/projects/A-SIS.jpg',
        links: {
          web: 'http://www.a-sis.com/'
        }
      }
    ];

    this.page = 0;
  }

  ngOnInit() {
  }

  showDescription(project: Project) {
    this.describeProject.emit(project);
  }

}
