import { Component } from '@angular/core';
import { Cita } from '../modelos/cita';
import { CitaService } from '../Servicios/cita.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-cita',
  templateUrl: './registrar-cita.component.html',
  styleUrls: ['./registrar-cita.component.css']
})
export class RegistrarCitaComponent {
  citas: Cita[];
  cita: Cita=new Cita();
  
  constructor(private citaServicio: CitaService,
    private enrutador: Router
  ){}
  ngOnInit(){
    //cargar todos los productos
    this.obtenerCita();
  }
  
  private obtenerCita(){
    //consumir lo datos del observable (suscribirnos)
    this.citaServicio.obtenerCitas().subscribe(
      (datos =>{
        this.citas = datos;
      })
    )
  }
  onSubmit(){
    this.guardarCita();
  
  }
  guardarCita(){
    this.citaServicio.agregarCita(this.cita).subscribe(
      {
        next:(datos) => {
          this.irListaCitas();
        },
        error: (error: any) => {console.log(error)}
      }
    );
  }
  irListaCitas(){
   this.obtenerCita()
  }
  
  eliminarCita(id:number){
    this.citaServicio.elimnarCita(id).subscribe(
      {
        next:(datos) => this.obtenerCita(),
        error: (errores) => console.log(errores)
      }
    )
  }
}
