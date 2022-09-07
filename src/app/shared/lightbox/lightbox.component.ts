import { Component, OnInit } from '@angular/core';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { LighboxService } from '../lighbox.service';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.css']
})
export class LightboxComponent implements OnInit {

  constructor(public lightboxService: LighboxService) { }

  ngOnInit(): void {
  }

  exitIco = faClose;

}
