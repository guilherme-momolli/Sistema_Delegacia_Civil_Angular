import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { Navbar } from './shared/components/layout/navbar/navbar';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CoreModule,
    SharedModule, 
    Navbar,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  template: `<div class="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center p-6">
      <div class="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
        <h1 class="text-3xl font-bold text-gray-800 mb-3">Delegacia Civil</h1>
        <p class="text-gray-600 mb-6">Tailwind v4 + Angular 20 = FUNCIONANDO!</p>
        <button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg">
          Acessar Sistema
        </button>
      </div>
    </div>`
})
export class App {
  protected readonly title = signal('Sistema_Delegacia_Civil');
}
