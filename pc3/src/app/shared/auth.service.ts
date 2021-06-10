import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from '../users';
import { Alquiler } from '../alquiler.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const urlAlquiler = 'http://127.0.0.1:8000/api/alquiler';
const urlMunicipios = 'http://127.0.0.1:8000/api/localidad';
const urlScrapper = 'http://127.0.0.1:8000/api/processData3';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }

  // User registration
  register(name: string, email: string, password: string, password_confirmation: string): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/auth/register', {name, email, password, password_confirmation}, httpOptions);
  }

  // Login
  signin(email: string, password: string): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/auth/login', {email, password}, httpOptions);
  }

  // Access user profile
  profileUser(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/auth/user-profile');
  }

  getAlquiler(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/alquiler');
  }
  
  getAlquilerId(id: string): Observable<any> {
    return this.http.get(`${urlAlquiler}/${id}`);
  }

  getAlquilerUbi(ubicacion: string): Observable<any> {
    return this.http.get(`${urlAlquiler}/${ubicacion}`);
  }

  getUsers(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/users');
  }
  getMunicipioId(municipio: string): Observable<any>{
    return this.http.get(`${urlMunicipios}/${municipio}`);
  }
  getMunicipio(): Observable<any>{
    return this.http.get(`${urlMunicipios}`);
  }
  getSrapper(municipio: string): Observable<any>{
    return this.http.get(`${urlScrapper}/${municipio}`, {responseType: 'text'}); 
  }

}
