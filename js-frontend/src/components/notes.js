class Notes {
  constructor() {
    this.notes = [];
    this.adapter = new NotesAdapter();
    this.initiBindingsAndEventListeners();
    this.fetchAndLoadNotes();
  }

  initiBindingsAndEventListeners() {
    this.notesContainer = document.getElementById("notes-container");
    this.newNoteBody = document.getElementById("new-note-body");
    this.noteForm = document.getElementById('new-note-form');
    this.noteForm.addEventListener('submit', this.createNote.bind(this));
  }

  createNote(e) {
    e.preventDefault();  // prevents page from being reload on form submit 
    console.log(this.newNoteBody.value);
  }

  fetchAndLoadNotes() {
    this.adapter
      .getNotes()
      .then((notes) => {
        notes
          .sort((a, b) => a.id - b.id)
          .forEach((note) => this.notes.push(new Note(note)));
      })
      .then(() => {
        this.render();
      });
  }

  render() {
    this.notesContainer.innerHTML = this.notes
      .map((note) => note.renderLi())
      .join("");
  }
}