import { Component } from '@angular/core';
import { Medico } from '../modelos/medico';
import { MedicoService } from '../Servicios/medico.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-registrar-medico',
  templateUrl: './registrar-medico.component.html',
  styleUrls: ['./registrar-medico.component.css']
})
export class RegistrarMedicoComponent {
medicos: Medico[];
medico: Medico=new Medico();

constructor(private medicoServicio: MedicoService,
  private enrutador: Router
){}
ngOnInit(){
  //cargar todos los productos
  this.obtenerMedicos();
}

private obtenerMedicos(){
  //consumir lo datos del observable (suscribirnos)
  this.medicoServicio.obtenerMedicos().subscribe(
    (datos =>{
      this.medicos = datos;
    })
  )
}
onSubmit(){
  this.guardarMedico();

}
guardarMedico(){
  this.medicoServicio.agregarMedico(this.medico).subscribe(
    {
      next:(datos) => {
        this.irListaMedicos();
      },
      error: (error: HttpErrorResponse) => {
        console.log(error)
        debugger;
        if(error.status==400){
        alert(error.error.errors)
        }
      }
    }
  );
}
irListaMedicos(){
 this.obtenerMedicos()
}

eliminarMedicos(cedula:number){
  this.medicoServicio.elimnarMedico(cedula).subscribe(
    {
      next:(datos) => this.obtenerMedicos(),
      error: (errores) => console.log(errores)
    }
  )
}
}
