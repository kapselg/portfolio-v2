import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, map, take } from 'rxjs';

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
  constructor(private route: ActivatedRoute, private router: Router) {}

  site = '';

  ngOnInit(): void {
    this.checkUrl();
    this.router.events.pipe(debounceTime(10)).subscribe(() => {
      this.checkUrl();
    });
  }

  checkUrl() {
    if (this.route.children.length > 0) {
      this.route.children[0].url
        .pipe(
          take(1),
          map((url) => {
            this.site = url[0].path;
          })
        )
        .subscribe();
    } else {
      this.site = '';
    }
  }
}
