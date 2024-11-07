import { Component, signal, computed, effect  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EjemploSignalsBasico';
  contador = signal(0);

  dobleContador = computed(() => this.contador() * 2);

  constructor() {
    effect(() => {
      console.log(`Contador ha cambiado a: ${this.contador()}`);
    });
  }

  incrementar() {
    this.contador.update((valor) => valor + 1);
  }


}
