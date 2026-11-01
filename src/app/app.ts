import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirebaseHeader } from './firebase-header/firebase-header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FirebaseHeader],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('prc');
}
