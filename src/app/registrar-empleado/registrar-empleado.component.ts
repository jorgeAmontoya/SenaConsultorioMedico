import { Component } from '@angular/core';
import { Empleado } from '../modelos/empleado';
import { EmpleadoService } from '../Servicios/empleado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css']
})
export class RegistrarEmpleadoComponent {
  empleados: Empleado[];
  empleado: Empleado= new Empleado();

  constructor(private empleadoService: EmpleadoService,
    private enrutador: Router
  ){

  }
  ngOnInit(){
    //cargar todos los productos
    this.obtenerEmpleados();
  }

  private obtenerEmpleados(){
    //consumir lo datos del observable (suscribirnos)
    this.empleadoService.obtenerEmpleados().subscribe(
      (datos =>{
        this.empleados = datos;
      })
    )
  }

  onSubmit(){
    this.guardarProducto();
  
  }
  guardarProducto(){
    this.empleadoService.agregarEmpleado(this.empleado).subscribe(
      {
        next:(datos) => {
          this.irListaEmpleados();
        },
        error: (error: any) => {console.log(error)}
      }
    );
  }
  irListaEmpleados(){
    this.enrutador.navigate(['empleado']),
   this.obtenerEmpleados()
  }

  eliminarEmpleados(cedula:number){
    this.empleadoService.elimnarEmpleado(cedula).subscribe(
      {
        next:(datos) => this.obtenerEmpleados(),
        error: (errores) => console.log(errores)
      }
    )
  }
}
