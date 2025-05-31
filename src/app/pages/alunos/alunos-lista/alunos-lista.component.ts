import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlunoService } from '../alunos.service';

@Component({
  selector: 'app-alunos-lista',
  templateUrl: './alunos-lista.component.html',
  styleUrls: ['./alunos-lista.component.css']
})
export class AlunosListaComponent implements OnInit {

  alunos = [];

  constructor(
    private alunoService: AlunoService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.carregar();
  }

  carregar() {
    this.spinner.show();
    this.alunoService.listar().then((res) => {
      this.alunos = res;
      this.spinner.hide();
    });
  }

}
