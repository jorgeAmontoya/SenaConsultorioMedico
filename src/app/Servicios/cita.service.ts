import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cita } from '../modelos/cita';


@Injectable({
  providedIn: 'root'
})
export class CitaService {
  private urlBase = "http://localhost:8080/centromedico-app/cita";

  constructor(private clienteHttp: HttpClient) { }

  obtenerCitas(): Observable <Cita[]>{
    return this.clienteHttp.get<Cita[]>(this.urlBase);
  }

  agregarCita(cita: Cita): Observable<Object>{
    return this.clienteHttp.post(this.urlBase,cita)
  }

  elimnarCita(id:number): Observable<Object>{
    return this.clienteHttp.delete(`${this.urlBase}/${id}`);
  }
}
