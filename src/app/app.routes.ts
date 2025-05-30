import { Routes } from '@angular/router';
import { NomeComponenteComponent } from './nome-componente/nome-componente.component';
import { PerfilComponenteComponent } from './components/perfil-componente/perfil-componente.component';
import {ProdutosComponent} from './components/produtos/produtos.component';
import { TarefasComponent } from './components/tarefas/tarefas.component';

export const routes: Routes = [
{ path: 'nome',component: NomeComponenteComponent },
{ path: 'perfil',component: PerfilComponenteComponent },
{ path: 'produtos',component: ProdutosComponent },
{ path: "tarefas",component:TarefasComponent},
  {path: '**', redirectTo:'nome'}
];