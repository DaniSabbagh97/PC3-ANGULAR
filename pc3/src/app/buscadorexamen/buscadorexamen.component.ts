import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { AuthService } from '../shared/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Alquiler } from '../alquiler.model';
import { Localidad } from '../localidad.model';
import { User } from '../user.model';

@Component({
  selector: 'app-buscadorexamen',
  templateUrl: './buscadorexamen.component.html',
  styleUrls: ['./buscadorexamen.component.scss']
})
export class BuscadorexamenComponent implements OnInit {

  filterpost = '';
  localidad = new Localidad();
  user = new User();
  numeroVaciada = 2;

  constructor(private data: AuthService, 
    private route: ActivatedRoute, 
    private router_: Router) { }

  ltsAlquiler:Alquiler[] = [];
  ltsLocalidad:Localidad[] = [];

  ngOnInit(): void {
  }

  currentAlquiler = null;
  currentLocalidad = null;
  

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
  // getMunicipio(municipio:any): void{
  //   this.data.getMunicipioId(municipio).subscribe(data_ => {
  //     this.currentLocalidad = data_;
  //     console.log(data_);
  //   })
  // }
  getMunicipio(): void{
    this.data.getMunicipioId(this.filterpost).subscribe(res => {
      this.localidad = res;
    // this.data.getMunicipioId(this.filterpost).subscribe(data_ => {
    //   this.currentLocalidad = data_;
    //   console.log(data_);
    })
  }

  getUsuariosExamen(): void{
    this.data.getUsers().subscribe(res => {
      this.user = res;
      console.log(res);
    })
  }
  verAlquileres(id: string){
    this.router_.navigate(["/app-estructura", id]);
  }
  /*verAlquileres(id: string){
    this.router_.navigate(["/app-estructura", id]);
  }*/

  getScrapper(): void{
    console.log(this.data)
    this.data.getSrapper(this.filterpost).subscribe(res => {
      this.numeroVaciada = res;
    })
  }

  search = new FormControl('')

  @Output('search') searchEmitter = new EventEmitter<string>()
}
