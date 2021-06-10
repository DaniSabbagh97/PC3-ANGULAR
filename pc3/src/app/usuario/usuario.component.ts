import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { TokenAuthService } from '../shared/token-auth.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  currentUser: any;

  constructor(private token: TokenAuthService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }
}
