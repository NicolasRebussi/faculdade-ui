import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { AlunoService } from '../alunos.service';
import { Aluno } from './../../core/models/aluno.model';

@Component({
  selector: 'app-alunos-cadastro',
  templateUrl: './alunos-cadastro.component.html',
  styleUrls: ['./alunos-cadastro.component.css']
})
export class AlunosCadastroComponent implements OnInit {
  aluno = new Aluno();
  idaluno: number;
  salvando: boolean = false;

  constructor(
    private alunoService: AlunoService,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute,
    private title: Title,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.idaluno = this.route.snapshot.params['id'];
    this.title.setTitle('Cadastro de Aluno');

    if (this.idaluno) {
      this.spinner.show();
      this.carregarAluno(this.idaluno);
    } else {
      this.aluno.status = true;
    }
  }

  get editando() {
    return Boolean(this.aluno.idaluno);
  }

  carregarAluno(id: number) {
    this.alunoService.buscarPorId(id)
      .then((obj) => {
        this.aluno = obj;
        this.atualizarTituloEdicao();
        this.spinner.hide();
      }).catch(() => {
        this.spinner.hide();
      });
  }

  atualizarTituloEdicao() {
    this.title.setTitle(`Edição de Aluno: ${this.aluno.nome}`);
  }

  salvar(form: NgForm) {
    if (this.editando) {
      this.atualizarAluno(form);
    } else {
      this.cadastrarAluno(form);
    }
  }

  cadastrarAluno(form: NgForm) {
    this.salvando = true;
    this.alunoService.adicionar(this.aluno).then(() => {
      this.messageService.add({ severity: 'success', summary: 'Aluno', detail: 'Cadastrado com sucesso!' });
      this.salvando = false;
      this.router.navigate(['/alunos']);
    });
  }

  atualizarAluno(form: NgForm) {
    this.salvando = true;
    this.alunoService.atualizar(this.aluno).then((obj) => {
      this.aluno = obj;
      this.salvando = false;
      this.messageService.add({
        severity: 'info',
        summary: 'Aluno',
        detail: `${obj.nome}, alterado com sucesso`
      });
      this.atualizarTituloEdicao();
      this.router.navigate(['/alunos']);
    }).catch(() => {
      this.salvando = false;
    });
  }
}
