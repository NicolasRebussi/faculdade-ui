import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Aluno } from '../core/models/aluno.model';
@Injectable({
  providedIn: 'root',
})
export class AlunoService {
  alunoUrl: string = '';

  constructor(private http: HttpClient) {
    this.alunoUrl =
      'https://6838b9a26561b8d882ae0cec.mockapi.io/aluno';
  }

  listar(): Promise<any> {
    return firstValueFrom(this.http.get(this.alunoUrl)).then(
      (response: any) => {
        return response;
      }
    );
  }

  adicionar(obj: Aluno): Promise<Aluno> {
    return firstValueFrom(this.http.post<Aluno>(this.alunoUrl, obj));
  }

  buscarPorId(id: number) {
    return firstValueFrom(this.http.get(`${this.alunoUrl}/${id}`)).then(
      (response) => response as any
    );
  }

  atualizar(obj: Aluno): Promise<Aluno> {
    return firstValueFrom(
      this.http.put<Aluno>(`${this.alunoUrl}/${obj.idaluno}`, obj)
    ).then((response) => response as Aluno);
  }
}
