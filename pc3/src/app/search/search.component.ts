import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { AuthService } from '../shared/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Alquiler } from '../alquiler.model';
import { Localidad } from '../localidad.model';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  filterpost = '';
  localidad = new Localidad();
  numeroVaciada = 2;

  constructor(private data: AuthService, 
    private route: ActivatedRoute, 
    private router_: Router) { }

  ltsAlquiler:Alquiler[] = [];
  ltsLocalidad:Localidad[] = [];

  /*Vamos a decir el buscador nos de por la consola de Google el tecleo que se ha utilizado*/ 
  // ngOnInit():void { 
  //   this.getLocalidadData();
  //   this.getAlquilerData();
  //   this.search.valueChanges
  //   .pipe(
  //     debounceTime(300)/*Tiempo que tarda en generar por consola medido en ms*/
  //   )
  //   .subscribe((value) => this.searchEmitter.emit(value))

  //   //this.getMunicipio(this.route.snapshot.paramMap.get('municipio'));
  //   //this.getAlquilerUbi(this.route.snapshot.paramMap.get('ubicacion'));
  //   this.getAlquiler(this.route.snapshot.paramMap.get('id'));
  // }
  ngOnInit():void{
    
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

