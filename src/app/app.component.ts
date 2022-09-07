import {
  Component,
  OnInit,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { TextsService } from './shared/texts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit  {
  constructor(private textsService: TextsService) {}

  ngOnInit(){
    this.textsService.initLanguage();
  }

  site: string = '';

}
