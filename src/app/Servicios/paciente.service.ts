import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from '../modelos/paciente';


@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  private urlBase = "http://localhost:8080/centromedico-app/pacientes";

  constructor(private clienteHttp: HttpClient) { }

  obtenerPacientes(): Observable <Paciente[]>{
    return this.clienteHttp.get<Paciente[]>(this.urlBase);
  }

  agregarPaciente(paciente: Paciente): Observable<Object>{
    return this.clienteHttp.post(this.urlBase,paciente)
  }

  elimnarPaciente(cedula:number): Observable<Object>{
    return this.clienteHttp.delete(`${this.urlBase}/${cedula}`);
  }
}
