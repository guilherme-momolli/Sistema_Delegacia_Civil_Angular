import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { Topbar } from './shared/components/navbar/topbar/topbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CoreModule, SharedModule, Topbar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Sistema_Delegacia_Civil');
}
