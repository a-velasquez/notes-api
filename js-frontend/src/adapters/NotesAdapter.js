/*
Sole purpose of adapter is to connect to api
sometimes called service or adapter
*/
class NotesAdapter {
  constructor() {
    this.baseUrl = "http://localhost:3000/api/v1/notes";
  }

  getNotes() {
    return fetch(this.baseUrl).then((res) => res.json());
  }
}