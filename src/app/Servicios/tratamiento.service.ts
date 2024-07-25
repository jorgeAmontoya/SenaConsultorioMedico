import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tratamiento } from '../modelos/tratamiento';


@Injectable({
  providedIn: 'root'
})
export class TratamientoService {
  private urlBase = "http://localhost:8080/centromedico-app/tratamientos";

  constructor(private clienteHttp: HttpClient) { }

  obtenerTratamientos(): Observable <Tratamiento[]>{
    return this.clienteHttp.get<Tratamiento[]>(this.urlBase);
  }

  agregarTratamiento(tratamiento: Tratamiento): Observable<Object>{
    return this.clienteHttp.post(this.urlBase,tratamiento)
  }

  elimnarTratamiento(id:number): Observable<Object>{
    return this.clienteHttp.delete(`${this.urlBase}/${id}`);
  }
}
