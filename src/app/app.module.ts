import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarPacienteComponent } from './registrar-paciente/registrar-paciente.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { RegistrarMedicoComponent } from './registrar-medico/registrar-medico.component';
import { RegistrarCitaComponent } from './registrar-cita/registrar-cita.component';
import { RegistrarTratamientoComponent } from './registrar-tratamiento/registrar-tratamiento.component';
import { RegistrarMedicamentoComponent } from './registrar-medicamento/registrar-medicamento.component';
import { RegistrarEmpleadoComponent } from './registrar-empleado/registrar-empleado.component';
import { RegistrarConsultorioComponent } from './registrar-consultorio/registrar-consultorio.component';
import { MapaNavegacionComponent } from './mapa-navegacion/mapa-navegacion.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarPacienteComponent,
    IniciarSesionComponent,
    RegistrarMedicoComponent,
    RegistrarCitaComponent,
    RegistrarTratamientoComponent,
    RegistrarMedicamentoComponent,
    RegistrarEmpleadoComponent,
    RegistrarConsultorioComponent,
    MapaNavegacionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
