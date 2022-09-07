import { Component, OnInit } from '@angular/core';
import {
  faCake,
  faPhone,
  faAt,
  faMap,
  faStarOfLife,
} from '@fortawesome/free-solid-svg-icons';
import { Info } from '../shared/card-info.models';
import { TextsService } from '../shared/texts.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass'],
})
export class ProjectsComponent implements OnInit {
  constructor(private textsService: TextsService) {}

  ngOnInit(): void {}

  //komentarz

  cakeIco = faCake;
  phoneIco = faPhone;
  mailIco = faAt;
  addressIco = faMap;
  starIco = faStarOfLife;

  projects = this.textsService.projects;
}
