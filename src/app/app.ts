import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { Navbar } from './shared/components/layout/navbar/navbar';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CoreModule, SharedModule, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Sistema_Delegacia_Civil');
}
