import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medico } from '../modelos/medico';


@Injectable({
  providedIn: 'root'
})
export class MedicoService {
  private urlBase = "http://localhost:8080/centromedico-app/medicos";

  constructor(private clienteHttp: HttpClient) { }

  obtenerMedicos(): Observable <Medico[]>{
    return this.clienteHttp.get<Medico[]>(this.urlBase);
  }

  agregarMedico(medico: Medico): Observable<Object>{
    return this.clienteHttp.post(this.urlBase,medico)
  }

  elimnarMedico(cedula:number): Observable<Object>{
    return this.clienteHttp.delete(`${this.urlBase}/${cedula}`);
  }
}
