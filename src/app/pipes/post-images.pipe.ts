import { Pipe, PipeTransform } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { BACKEND_URL } from '../config/config';

@Pipe({
  name: 'postImages'
})
export class PostImagesPipe implements PipeTransform {

  constructor(
  ) { }

  transform(image: any): any {

    let url = BACKEND_URL + '/images';

    if (!image) {
      return url + '/user/xxx';
    }

    if (image.indexOf('https') >= 0) { // Verifiying if is an url image
      return image;
    }

    url += '/' + image;

    return url;

  }

}
