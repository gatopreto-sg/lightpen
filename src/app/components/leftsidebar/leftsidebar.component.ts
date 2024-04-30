import { Component, inject } from '@angular/core';
import { NoteComponent } from '../note/note.component';
import { NotesService } from '../../services/notes/notes.service';
import { CommonModule } from '@angular/common';
import { NewNoteComponent } from '../new-note/new-note.component';

@Component({
  selector: 'app-leftsidebar',
  standalone: true,
  imports: [
    CommonModule,
    NoteComponent,
    NewNoteComponent
  ],
  templateUrl: './leftsidebar.component.html',
  styleUrl: './leftsidebar.component.css'
})
export class LeftsidebarComponent {
  notesService: NotesService = inject(NotesService)

  notes = this.notesService.get_notes()
}
