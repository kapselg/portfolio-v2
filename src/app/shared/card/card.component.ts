import { Component, Input, OnInit } from '@angular/core';
import { LighboxService } from '../lighbox.service';
import { Info } from '../card-info.models';
import { faCalendarCheck, faCalendarPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() project: Info;

  constructor(public lightboxService: LighboxService) { }

  ngOnInit(): void {
  }

  startIco = faCalendarPlus;
  endIco = faCalendarCheck;

}
