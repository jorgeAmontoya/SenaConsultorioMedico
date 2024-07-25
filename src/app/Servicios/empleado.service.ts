import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medico } from '../modelos/medico';
import { Empleado } from '../modelos/empleado';


@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private urlBase = "http://localhost:8080/centromedico-app/empleados";

  constructor(private clienteHttp: HttpClient) { }

  obtenerEmpleados(): Observable <Empleado[]>{
    return this.clienteHttp.get<Empleado[]>(this.urlBase);
  }

  agregarEmpleado(empleado: Empleado): Observable<Object>{
    return this.clienteHttp.post(this.urlBase,empleado)
  }

  elimnarEmpleado(cedula:number): Observable<Object>{
    return this.clienteHttp.delete(`${this.urlBase}/${cedula}`);
  }
}
