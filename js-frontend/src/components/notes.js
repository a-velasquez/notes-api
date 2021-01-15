class Notes {
  constructor() {
    this.notes = [];
    this.adapter = new NotesAdapter();
    // this.initiBindingsAndEventListeners();
    this.fetchAndLoadNotes();
  }

  fetchAndLoadNotes() {
    this.adapter.getNotes().then((notes) => {
      console.log(notes);
    });
  }
}