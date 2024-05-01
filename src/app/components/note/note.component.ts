import { Component, Input, inject } from '@angular/core';
import { Note } from '../../note';
import { NotesService } from '../../services/notes/notes.service';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [],
  templateUrl: './note.component.html',
  styleUrl: './note.component.css'
})
export class NoteComponent {
  @Input() note!: Note;
  notesService: NotesService = inject(NotesService);

  open() {
    this.notesService.setActual(this.note);
  }
}
