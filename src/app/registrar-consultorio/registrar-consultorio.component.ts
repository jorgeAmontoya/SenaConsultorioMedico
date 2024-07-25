import { Component } from '@angular/core';
import { Consultorio } from '../modelos/consultorio';
import { ConsultorioService } from '../Servicios/consultorio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-consultorio',
  templateUrl: './registrar-consultorio.component.html',
  styleUrls: ['./registrar-consultorio.component.css']
})
export class RegistrarConsultorioComponent {
  consultorios: Consultorio[];
  consultorio: Consultorio=new Consultorio();
  
  constructor(private consultorioServicio: ConsultorioService,
    private enrutador: Router
  ){}
  ngOnInit(){
    //cargar todos los productos
    this.obtenerConsultorios();
  }
  
  private obtenerConsultorios(){
    //consumir lo datos del observable (suscribirnos)
    this.consultorioServicio.obtenerConsultorios().subscribe(
      (datos =>{
        this.consultorios = datos;
      })
    )
  }
  onSubmit(){
    this.guardarConsultorio();
  
  }
  guardarConsultorio(){
    this.consultorioServicio.agregarConsultorio(this.consultorio).subscribe(
      {
        next:(datos) => {
          this.irListaConsultorio();
        },
        error: (error: any) => {console.log(error)}
      }
    );
  }
  irListaConsultorio(){
   this.obtenerConsultorios()
  }
  
  eliminarConsultorios(id:number){
    this.consultorioServicio.elimnarConsultorio(id).subscribe(
      {
        next:(datos) => this.obtenerConsultorios(),
        error: (errores) => console.log(errores)
      }
    )
  }
}
