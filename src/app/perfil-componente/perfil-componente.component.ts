import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-perfil-componente',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './perfil-componente.component.html',
  styleUrls: ['./perfil-componente.component.css']
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

  nomes: string = "";
}
