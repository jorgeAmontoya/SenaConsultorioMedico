import { Component } from '@angular/core';
import { Medicamento } from '../modelos/medicamento';
import { MedicamentoService } from '../Servicios/medicamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-medicamento',
  templateUrl: './registrar-medicamento.component.html',
  styleUrls: ['./registrar-medicamento.component.css']
})
export class RegistrarMedicamentoComponent {
  medicamentos: Medicamento[];
  medicamento: Medicamento=new Medicamento();
  
  constructor(private medicamentoServicio: MedicamentoService,
    private enrutador: Router
  ){}
  ngOnInit(){
    //cargar todos los productos
    this.obtenerMedicamento();
  }
  
  private obtenerMedicamento(){
    //consumir lo datos del observable (suscribirnos)
    this.medicamentoServicio.obtenerMedicamentos().subscribe(
      (datos =>{
        this.medicamentos = datos;
      })
    )
  }
  onSubmit(){
    this.guardarMedicamento();
  
  }
  guardarMedicamento(){
    this.medicamentoServicio.agregarMedicamento(this.medicamento).subscribe(
      {
        next:(datos) => {
          this.irListaMedicamentos();
        },
        error: (error: any) => {console.log(error)}
      }
    );
  }
  irListaMedicamentos(){
   this.obtenerMedicamento()
  }
  
  eliminarMedicamento(cedula:number){
    this.medicamentoServicio.elimnarMedicamento(cedula).subscribe(
      {
        next:(datos) => this.obtenerMedicamento(),
        error: (errores) => console.log(errores)
      }
    )
  }
}
