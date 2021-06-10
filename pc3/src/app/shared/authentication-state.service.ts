import { Injectable } from '@angular/core';
import { TokenAuthService } from '../shared/token-auth.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationStateService {
  private userCurrentSate = new BehaviorSubject<boolean>(this.tokenAuthService.isSignedin());
  userAuthState = this.userCurrentSate.asObservable();

  constructor(public tokenAuthService: TokenAuthService) { }

  setAuthState(value: boolean){
    this.userCurrentSate.next(value);
  }
}
