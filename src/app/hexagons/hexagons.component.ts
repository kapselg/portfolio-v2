import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hexagons',
  templateUrl: './hexagons.component.html',
  styleUrls: ['./hexagons.component.css'],
  animations: [
    trigger('show-1', [
      transition('void => *', [
        style({
          opacity: 0,
        }),
        animate('1s ease-in-out'),
        style({
          opacity: 1,
        }),
      ]),
    ]),
    trigger('show-2', [
      transition('void => *', [
        style({
          opacity: 0,
        }),
        animate('1s 200ms ease-in-out'),
        style({
          opacity: 1,
        }),
      ]),
    ]),
    trigger('show-3', [
      transition('void => *', [
        style({
          opacity: 0,
        }),
        animate('1s 400ms ease-in-out'),
        style({
          opacity: 1,
        }),
      ]),
    ]),
  ],
})
export class HexagonsComponent implements OnInit {
  constructor() {}

  site = '';

  ngOnInit(): void {}
}
