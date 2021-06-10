import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { AuthService } from '../shared/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Alquiler } from '../alquiler.model';
import { Localidad } from '../localidad.model';
import { TokenAuthService } from '../shared/token-auth.service';
@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.scss']
})
export class ExamenComponent implements OnInit {

  users: any;
  currentUser: any;
  filterpost = '';
  localidad = new Localidad();
  numeroVaciada = 2;

  constructor(private data: AuthService, 
    private route: ActivatedRoute, 
    private router_: Router,
    private token: TokenAuthService,
    private dataUsers: AuthService) { }

  ltsAlquiler:Alquiler[] = [];
  ltsLocalidad:Localidad[] = [];

  ngOnInit(): void {
    this.getUsersData();
    this.getUsersConsole();
  }
  currentAlquiler = null;
  currentLocalidad = null;

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

  getLocalidadData() {
    this.data.getMunicipio().subscribe(res => {
      this.ltsLocalidad = res;
    });
  }
  getAlquilerData() {
    this.data.getAlquiler().subscribe(res => {
      this.ltsAlquiler = res;
    });
  }
  getAlquiler(id:any): void{
    this.data.getAlquilerId(id).subscribe(data_ => {
      this.currentAlquiler = data_;
      console.log(data_);
    })
  }
  getAlquilerUbi(ubicacion:any): void{
    this.data.getAlquilerUbi(ubicacion).subscribe(data_ => {
      this.currentAlquiler = data_;
      console.log(data_);
    })
  }
  getMunicipio(): void{
    this.data.getMunicipioId(this.filterpost).subscribe(res => {
      this.localidad = res;
    })
  }
  verAlquileres(id: string){
    this.router_.navigate(["/app-estructura", id]);
  }
  getScrapper(): void{
    console.log(this.data)
    this.data.getSrapper(this.filterpost).subscribe(res => {
      this.numeroVaciada = res;
    })
  }
  search = new FormControl('')

  @Output('search') searchEmitter = new EventEmitter<string>()

} 