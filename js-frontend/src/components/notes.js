class Notes {
  constructor() {
    this.notes = [];
    this.adapter = new NotesAdapter();
    this.initiBindingsAndEventListeners();
    this.fetchAndLoadNotes();
  }

  initiBindingsAndEventListeners() {
    this.notesContainer = document.getElementById("notes-container");
    this.body = document.querySelector("body");
    this.newNoteBody = document.getElementById("new-note-body");
    this.noteForm = document.getElementById('new-note-form');
    this.noteForm.addEventListener('submit', this.createNote.bind(this));
    this.notesContainer.addEventListener('dblclick', this.handleNoteClick.bind(this));
    this.body.addEventListener("blur", this.updateNote.bind(this), true);
  }

  createNote(e) {
    e.preventDefault();  // prevents page from being reload on form submit 
    const value = this.newNoteBody.value

    this.adapter.createNote(value).then(note => {
      // console.log(note)
      this.notes.push(new Note(note))
      this.newNoteBody.value = ""
      this.render()
    })
  }

  handleNoteClick(e) {
    const li = e.target;
    li.contentEditable = true;
    li.focus();
    li.classList.add("editable");  /* add highlight and padding around selected note */
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