import { Component, OnInit } from '@angular/core';
import { faAt, faCake, faMap, faPhone, faStarOfLife } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  interests: [
    'Angular 14',
    'RxJs',
    'NgRx',
    'Bootstrap 5',
    'Tailwind CSS'
  ]

  cakeIco = faCake;
  phoneIco = faPhone;
  mailIco = faAt;
  addressIco = faMap;
  starIco = faStarOfLife;

}
