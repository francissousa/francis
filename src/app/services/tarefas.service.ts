import { Injectable } from '@angular/core';
import { Tarefa } from '../interfaces/Tarefas';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  private tarefas: Tarefa[] = [
    { id: 1, titulo: 'Estudar Angular', descricao:"Fazer um componente de tarefas", concluida: false },
    { id: 2, titulo: 'Fazer exercícios', descricao:"Realizar os exercicios em sala", concluida: true },
    { id: 3, titulo: 'Ler um livro', descricao:"Fazer a atividade para casa", concluida: false }
  ];
  
  getTarefas() {
    return this.tarefas;
  }

  toggleConcluida(id: number) {
    const tarefa = this.tarefas.find(t => t.id === id);
    if (tarefa) {
      tarefa.concluida = !tarefa.concluida;
    }
  }
}
