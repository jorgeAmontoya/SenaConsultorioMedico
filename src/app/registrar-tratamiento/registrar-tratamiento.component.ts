import { Component } from '@angular/core';
import { Tratamiento } from '../modelos/tratamiento';
import { TratamientoService } from '../Servicios/tratamiento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-tratamiento',
  templateUrl: './registrar-tratamiento.component.html',
  styleUrls: ['./registrar-tratamiento.component.css']
})
export class RegistrarTratamientoComponent {
  tratamientos: Tratamiento[];
  tratamiento: Tratamiento= new Tratamiento();

  constructor(private tratamientoServicio: TratamientoService,
    private enrutador: Router
  ){

  }
  ngOnInit(){
    //cargar todos los productos
    this.obtenerTratamientos();
  }

  private obtenerTratamientos(){
    //consumir lo datos del observable (suscribirnos)
    this.tratamientoServicio.obtenerTratamientos().subscribe(
      (datos =>{
        this.tratamientos = datos;
      })
    )
  }

  onSubmit(){
    this.guardarTratamiento();
  
  }
  guardarTratamiento(){
    this.tratamientoServicio.agregarTratamiento(this.tratamiento).subscribe(
      {
        next:(datos) => {
          this.irListaTratamientos();
        },
        error: (error: any) => {console.log(error)}
      }
    );
  }
  irListaTratamientos(){
   this.obtenerTratamientos()
  }

  eliminarTratamientos(id:number){
    this.tratamientoServicio.elimnarTratamiento(id).subscribe(
      {
        next:(datos) => this.obtenerTratamientos(),
        error: (errores) => console.log(errores)
      }
    )
  }
}
