class Notes {
  constructor() {
    this.notes = [];
    this.adapter = new NotesAdapter();
    this.initiBindingsAndEventListeners();
    this.fetchAndLoadNotes();
  }

  initiBindingsAndEventListeners() {
    this.notesContainer = document.getElementById("notes-container");
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