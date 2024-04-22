import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarPacienteComponent } from './registrar-paciente/registrar-paciente.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { RegistrarMedicoComponent } from './registrar-medico/registrar-medico.component';
import { RegistrarCitaComponent } from './registrar-cita/registrar-cita.component';
import { RegistrarTratamientoComponent } from './registrar-tratamiento/registrar-tratamiento.component';
import { RegistrarMedicamentoComponent } from './registrar-medicamento/registrar-medicamento.component';
import { RegistrarEmpleadoComponent } from './registrar-empleado/registrar-empleado.component';
import { RegistrarConsultorioComponent } from './registrar-consultorio/registrar-consultorio.component';
import { MapaNavegacionComponent } from './mapa-navegacion/mapa-navegacion.component';

const routes: Routes = [
  {path: 'registrar-paciente', component: RegistrarPacienteComponent},
  {path: '', redirectTo: 'iniciar-sesion', pathMatch: 'full'},
  {path: 'iniciar-sesion', component: IniciarSesionComponent},
  {path: 'registrar-medico', component: RegistrarMedicoComponent},
  {path: 'registrar-cita', component: RegistrarCitaComponent},
  {path: 'registrar-tratamiento', component: RegistrarTratamientoComponent},
  {path: 'registrar-medicamento', component: RegistrarMedicamentoComponent},
  {path: 'registrar-empleado', component: RegistrarEmpleadoComponent},
  {path: 'registrar-consultorio', component: RegistrarConsultorioComponent},
  {path: 'mapa-navegacion', component: MapaNavegacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
