class Notes {
  constructor() {
    this.notes = []
    this.adapter = new NotesAdapter()
    this.bindEventListeners()
    this.fetchAndLoadNotes()
  }

  fetchAndLoadNotes() {
    this.adapter.getNotes().then(notes => {
      console.log(notes);
    })
  }
}