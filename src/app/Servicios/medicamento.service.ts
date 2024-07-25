import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medico } from '../modelos/medico';
import { Medicamento } from '../modelos/medicamento';


@Injectable({
  providedIn: 'root'
})
export class MedicamentoService {
  private urlBase = "http://localhost:8080/centromedico-app/medicamento";

  constructor(private clienteHttp: HttpClient) { }

  obtenerMedicamentos(): Observable <Medicamento[]>{
    return this.clienteHttp.get<Medicamento[]>(this.urlBase);
  }

  agregarMedicamento(medicamento: Medicamento): Observable<Object>{
    return this.clienteHttp.post(this.urlBase,medicamento)
  }

  elimnarMedicamento(referencia:number): Observable<Object>{
    return this.clienteHttp.delete(`${this.urlBase}/${referencia}`);
  }
}
