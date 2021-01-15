class Notes {
  constructor() {
    this.notes = []
    this.adapter = new NotesAdapter()
    this.bindEventListeners()
  }
}