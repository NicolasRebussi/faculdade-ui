import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AlunosListaComponent } from "./alunos-lista/alunos-lista.component";
import { AlunosCadastroComponent } from "./alunos-cadastro/alunos-cadastro.component";

const routes: Routes = [
  { path: '', component: AlunosListaComponent }, // Rota padrão → lista de alunos
  { path: 'novo', component: AlunosCadastroComponent }, // /alunos/novo → formulário de criação
  { path: 'editar/:idaluno', component: AlunosCadastroComponent } // /alunos/editar/1 → edição de aluno
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Define as rotas como "filhas" dentro da aplicação
  exports: [RouterModule]
})
export class AlunosRoutingModule {}
