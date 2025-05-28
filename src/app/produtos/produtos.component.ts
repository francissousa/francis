import { Component } from '@angular/core';

@Component({
  selector: 'app-produtos',
  imports: [],
  templateUrl: './produtos.component.html',
  standalone: true;
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {
  produtos =[
    {nome: "Notebook", promoca: true}
  ]
}
