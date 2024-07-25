import { Component, OnInit } from '@angular/core';
import { Paciente } from '../modelos/paciente';
import { PacienteService } from '../Servicios/paciente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-paciente',
  templateUrl: './registrar-paciente.component.html',
  styleUrls: ['./registrar-paciente.component.css']
})
export class RegistrarPacienteComponent{
  pacientes: Paciente[];
  paciente: Paciente= new Paciente();

  constructor(private pacienteServicio: PacienteService,
    private enrutador: Router
  ){

  }
  ngOnInit(){
    //cargar todos los productos
    this.obtenerPacientes();
  }

  private obtenerPacientes(){
    //consumir lo datos del observable (suscribirnos)
    this.pacienteServicio.obtenerPacientes().subscribe(
      (datos =>{
        this.pacientes = datos;
      })
    )
  }

  onSubmit(){
    this.guardarProducto();
  
  }
  guardarProducto(){
    this.pacienteServicio.agregarPaciente(this.paciente).subscribe(
      {
        next:(datos) => {
          this.irListaPacientes();
        },
        error: (error: any) => {console.log(error)}
      }
    );
  }
  irListaPacientes(){
   this.obtenerPacientes()
  }

  eliminarPacientes(cedula:number){
    this.pacienteServicio.elimnarPaciente(cedula).subscribe(
      {
        next:(datos) => this.obtenerPacientes(),
        error: (errores) => console.log(errores)
      }
    )
  }
}
