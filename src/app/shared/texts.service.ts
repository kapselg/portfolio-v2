import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, catchError, map, Observable, of, Subject, take, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Info } from './card-info.models';

@Injectable({
  providedIn: 'root',
})
export class TextsService {
  constructor(private http: HttpClient, private translateService: TranslateService) {}

  education = new BehaviorSubject<Info[]>([]);
  projects = new BehaviorSubject<Info[]>([]);
  activities = new BehaviorSubject<Info[]>([]);

  ui: {[key: string]: any};

  error = new Subject<string>();

  private _lang: string;
  /**
   * Get texts from API
   */
  getTexts(): Observable<boolean | null> {
    return this.http
      .get<{ activities: Info[]; projects: Info[]; education: Info[], ui: {[key:string]: string} }>(
        `${environment.apiUrl}texts/${this._lang}.json`
      )
      .pipe(
        take(1),
        map((result) => {
          this.education.next(result.education);
          this.projects.next(result.projects);
          this.activities.next(result.activities);
          this.ui = result.ui;

          return true;
        }),
        catchError((error) => {
          this.error.next(error);
          return of(false);
        })
      );
  }

  /**
   * Sets langugage
   * @param lang New language
   */
  set language(lang: string) {
    this._lang = lang;
    this.cookieServer('language', this._lang);
    this.getTexts().subscribe((success) => {
      if(success){
        this.translateService.setTranslation(lang, this.ui);
        this.translateService.use(this._lang);
      }
    })
  }

  /**
   * Check user's preffered langauge or load it from cookies
   * @returns
   */
  initLanguage() {
    const localLang = this.cookieServer('language');

    if (!localLang) {
      switch (navigator.language) {
        case 'pl-PL':
        case 'pl':
          this.language = 'pl';
          break;
        default:
          this.language = 'en';
      }
      return;
    }
    this.language = localLang;
  }

  /**
   *
   * @param key Local storage key name
   * @param data Data to be saved
   * @returns Data read or saved
   */
  cookieServer(key: string, data?: any){

    if(data) localStorage.setItem(key, data);

    data = localStorage.getItem(key);

    return typeof data === 'object' ? JSON.parse(data) : data;
  }
}
