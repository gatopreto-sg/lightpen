import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Note } from './note';
import { NoteComponent } from './components/note/note.component';
import { LeftsidebarComponent } from './components/leftsidebar/leftsidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NoteComponent,
    LeftsidebarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lightpen';
}
