class Notes {
  constructor() {
    this.notes = [];
    this.adapter = new NotesAdapter();
    // this.initiBindingsAndEventListeners();
    this.fetchAndLoadNotes();
  }

  fetchAndLoadNotes() {
    this.adapter
    .getNotes()
    .then(notes => {
      notes.forEach(note => this.notes.push(note))
    })
    .then(() => {
      this.render()
    })
  }

  render() {
    const notesContainer = document.getElementById("notes-container")
    notesContainer.innerHTML = 'my notes here'
    console.log('My notes are', this.notes)
  }
}