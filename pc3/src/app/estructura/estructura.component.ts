import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Alquiler } from '../alquiler.model';
import { Localidad } from '../localidad.model';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-estructura',
  templateUrl: './estructura.component.html',
  styleUrls: ['./estructura.component.scss']
})
export class EstructuraComponent implements OnInit {

  alquiler$: Observable<Alquiler> | undefined;
  localidad$: Observable<Localidad> | undefined;
  alquilerUbi$: Observable<Alquiler> | undefined;




  constructor(private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe((params) => {
      const ubicacion = params['ubicacion'];
      this.alquilerUbi$ = this.authService.getAlquilerUbi(ubicacion);
    })
    this.route.params.pipe(take(1)).subscribe((params) => {
      const id = params['id'];
      this.alquiler$ = this.authService.getAlquilerId(id);
      console.log(this.alquiler$)
    })
    this.route.params.pipe(take(1)).subscribe((params) => {
      const municipio = params['municipio'];
      this.localidad$ = this.authService.getMunicipioId(municipio);
    })
    /*this.route.paramMap.subscribe(params => {
      if (params.has('municipio')){
        const ubicacion = params['municipio'];
        this.authService.getAlquilerUbi(ubicacion).subscribe(ubi => this.localidad$ = ubi);
      }
    })*/
  }

}
