import { Injectable } from '@angular/core';
import { Note } from '../../note';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  actual: Note = {"id":0, "title":"Isso não é uma nota de verdade!", "content":"não é mesmo!", "starred":false, "trashed":false};

  get_notes(): Note[] {
    return [
      {
        "id":1,
        "title":"Coisas que quero fazer esse ano",
        "content":"e tal e tal e tal",
        "starred":false,
        "trashed":false
      },
      {
        "id":2,
        "title":"O que eu acho sobre fazer plantação de pimenta",
        "content":"É uma coisa muito controversa que eu queria testar melhor",
        "starred":false,
        "trashed":false
      },
      {
        "id":3,
        "title":"Lista de piadas para o almoço de família",
        "content":"Eu realmente gosto dessas!",
        "starred":false,
        "trashed":false
      },
    ]
  }

  setActual(note:Note) {
    this.actual = note;
  }



  constructor() { }
}
