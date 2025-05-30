import { Component, inject } from '@angular/core';
import { TarefaService } from '../../services/tarefas.service';
import { Tarefa } from '../../interfaces/Tarefas';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tarefas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent {
  private tarefaService = inject(TarefaService);
  listaTarefas: Tarefa[] = [];

  ngOnInit(){
    this.listaTarefas = this.tarefaService.getTarefas();
  }


  toggleConcluido(tarefa: Tarefa) {
    tarefa.concluida = !tarefa.concluida
  }
}
