import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PrimengModule } from 'src/app/primeng.module';
import { SharedModule } from '../shared/shared.module';
import { AlunosCadastroComponent } from './alunos-cadastro/alunos-cadastro.component';
import { AlunosListaComponent } from './alunos-lista/alunos-lista.component';
import { AlunosRoutingModule } from './alunos.routing';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AlunosRoutingModule,
    PrimengModule,
    SharedModule
  ],
  declarations: [
  AlunosListaComponent,
  AlunosCadastroComponent
  ]
})
export class AlunosModule { }