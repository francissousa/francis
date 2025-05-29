import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { Produto } from '../../interfaces/Produto';

@Component({
  selector: 'app-produtos',
  imports: [],
  templateUrl: './produtos.component.html',
  standalone: true,
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {
  
  private produtoService = inject(ProdutoService);
  
  listaProdutos: Produto[]=[];
  ngOnInit(){
    
  }

}
