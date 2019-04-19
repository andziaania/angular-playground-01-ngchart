import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AnnaLuckyMomentsService {
  getLuckyMoments(): Observable<number[]> {
    return of([23, 43, 35, 34, 25, 46]);
  }

  constructor() { }
}
