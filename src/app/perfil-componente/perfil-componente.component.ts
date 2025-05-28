import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil-componente',
  imports: [],
  templateUrl: './perfil-componente.component.html',
  standalone: true,
  styleUrl: './perfil-componente.component.css'
})
export class PerfilComponenteComponent {
    username: string = "fulanodasilva";
    nome: string = "Fulano da Silva";
    local: string = "Manaus";
    idade: number = 28;
    empresa: string = "FPF TECH";
    publicacoes: number = 50;
    seguidores: number = 1560;
    seguindo: number = 963;
    img: URL = new URL("https://i.pinimg.com/originals/28/5a/ff/285aff45c82bb71261161c17f90517c7.jpg");

  }

