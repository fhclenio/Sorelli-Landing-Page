import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HrefService {
  private hrefSource = new BehaviorSubject<string>('/default');
  href$ = this.hrefSource.asObservable();

  setHref(novoHref: string) {
    this.hrefSource.next(novoHref);
  }
}
