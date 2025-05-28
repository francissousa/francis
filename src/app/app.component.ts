import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PerfilComponenteComponent } from './perfil-componente/perfil-componente.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PerfilComponenteComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'perfil_projeto';
}
