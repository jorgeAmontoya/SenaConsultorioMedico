import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medico } from '../modelos/medico';
import { Empleado } from '../modelos/empleado';
import { Consultorio } from '../modelos/consultorio';


@Injectable({
  providedIn: 'root'
})
export class ConsultorioService {
  private urlBase = "http://localhost:8080/centromedico-app/consultorios";

  constructor(private clienteHttp: HttpClient) { }

  obtenerConsultorios(): Observable <Consultorio[]>{
    return this.clienteHttp.get<Consultorio[]>(this.urlBase);
  }

  agregarConsultorio(consultorio: Consultorio): Observable<Object>{
    return this.clienteHttp.post(this.urlBase,consultorio)
  }

  elimnarConsultorio(id:number): Observable<Object>{
    return this.clienteHttp.delete(`${this.urlBase}/${id}`);
  }
}
