import { Component, inject } from '@angular/core';
import { Note } from '../../note';
import { NotesService } from '../../services/notes/notes.service';

@Component({
  selector: 'app-textpanel',
  standalone: true,
  imports: [],
  templateUrl: './textpanel.component.html',
  styleUrl: './textpanel.component.css'
})
export class TextpanelComponent {
  notesService: NotesService = inject(NotesService);
  note = this.notesService.actual;
}
