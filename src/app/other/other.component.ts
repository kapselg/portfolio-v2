import { Component, OnInit } from '@angular/core';
import { Info } from '../shared/card-info.models';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  education: Info[] = [
    {
      name: 'ZST Wodzisław',
      description: `I am currently attending a technical college and learning the profession of an IT technician.\n
      Thanks to projects carried out at my school I had an oportunity to visit Ireland for a Web Development related activity.`,
      thumbnail: {
        alt: 'Screenshot showcasing the Polyform project main page',
        url: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Zespol_szkol_technicznych_wodzislaw_slaski2.jpg',
      },
    },
  ];

  activities: Info[] = [
    {
      name: 'Erasumus in Ireland',
      description: 'The description',
      buttons: [
        {
          label: 'Demo',
          url: 'https://kapselg.github.io/polyform-front/',
        },
      ],
      thumbnail: {
        alt: 'Screenshot showcasing the Polyform project main page',
        url: 'https://i.ibb.co/dMCFQFy/wto-02-08-2022-18-33.png',
      },
    },
    {
      name: 'Polyform',
      description: 'The description',
      buttons: [
        {
          label: 'Demo',
          url: 'https://kapselg.github.io/polyform-front/',
        },
      ],
      thumbnail: {
        alt: 'Screenshot showcasing the Polyform project main page',
        url: 'https://i.ibb.co/dMCFQFy/wto-02-08-2022-18-33.png',
      },
    },
  ];

}
