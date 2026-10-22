import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';

@Component({
  imports: [MainLayout],
  selector: 'app-root',
   standalone: true,
  styleUrl: './app.css',
 template: '<app-main-layout />'
})
export class App {
  protected readonly title = signal('MiniECommerce');
}
