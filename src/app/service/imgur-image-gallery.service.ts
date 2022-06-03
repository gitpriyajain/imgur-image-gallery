import { Injectable } from '@angular/core';
import { Observable, tap, catchError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ImgurImageGalleryService {

  constructor(private http: HttpClient) {}

  getAlbum(url: string): Observable<any> {
    return this.http
      .get(url, {
        headers: {
          Authorization: 'Client-ID 50026e76c203a6e',
        },
      })
      .pipe(
        tap((data: any) => console.log(JSON.stringify(data))),
        catchError(async (err) => console.log(err))
      );
  }
}
