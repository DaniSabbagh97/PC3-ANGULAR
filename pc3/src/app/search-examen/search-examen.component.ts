import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Localidad } from '../localidad.model';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-search-examen',
  templateUrl: './search-examen.component.html',
  styleUrls: ['./search-examen.component.scss']
})
export class SearchExamenComponent implements OnInit {

  filterpost = '';
  localidad = new Localidad();
  currentLocalidad = null;
  ltsLocalidad:Localidad[] = [];
  

  constructor(private data: AuthService, 
    private route: ActivatedRoute, 
    private router_: Router) { }

  ngOnInit():void{
    this.getLocalidadData();
    this.getMunicipio(this.route.snapshot.paramMap.get('municipio'));
    
  }

   getMunicipio(municipio:any): void{
     this.data.getMunicipioId(municipio).subscribe(data_ => {
       this.currentLocalidad = data_;
       console.log(data_);
     })
  }
  getMunicipio_Examen(municipio: any){
    this.data.getMunicipioId(municipio).subscribe(res => {
      this.ltsLocalidad = res;
    // this.data.getMunicipioId(this.filterpost).subscribe(data_ => {
    //   this.currentLocalidad = data_;
    //   console.log(data_);
    })
  }

  getMunicipio_Examen_Mostrar(): void{
    this.data.getMunicipio().subscribe(res => {
      this.localidad = res;
    // this.data.getMunicipioId(this.filterpost).subscribe(data_ => {
    //   this.currentLocalidad = data_;
    //   console.log(data_);
    })
  }
  verAlquileres(municipio: string){
    this.router_.navigate(["/app-estructura", municipio]);
  }
  getLocalidadData() {
    this.data.getMunicipio().subscribe(res => {
      this.ltsLocalidad = res;
    });
  }


  search = new FormControl('')

  @Output('search') searchEmitter = new EventEmitter<string>()

}
