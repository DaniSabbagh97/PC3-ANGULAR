import { Component, OnInit } from '@angular/core';
import { TokenAuthService } from '../shared/token-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  isLoggedIn = false;
  name?: string;

  constructor(
    private tokenService: TokenAuthService
  ) { }
 /*Creación de un sistema de filtrado en el cuál aparecen las diferentes busquedas realizadas recientement*/
 /*En desarrollo*/
  ngOnInit(): void { 
    this.isLoggedIn = !!this.tokenService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenService.getUser();
      this.name = user.name;
    }
  }

  logout(): void {
    this.tokenService.signOut();
    window.location.reload();
  }
}
