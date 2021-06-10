import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users:any;

  constructor(private dataUsers: AuthService) { }

  ngOnInit(): void {
    this.getUsersData();
    this.getUsersConsole();
  }

  getUsersData() {
    this.dataUsers.getUsers().subscribe(res => {
      this.users = res;
    });
  }
  getUsersConsole() {
    this.dataUsers.getUsers().subscribe(res => {
      console.log(res);
    });
  }
  
  
}
