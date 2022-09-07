import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LighboxService {

  constructor() { }

  selectedImage: string;
  showLightbox = false;
  lightboxDelay = 200;

  toggleLighbox(url?: string){
    if(url){
      this.selectedImage = url;
      this.showLightbox = true
    }else{
      this.showLightbox = false;
      setTimeout(() => {
        this.selectedImage = null;
      }, this.lightboxDelay + 20 /* safety measure */);
    }
  }
}
