class Api::V1::NotesController < ApplicationController

  def index
    @notes = Note.all

    render json: @notes, status: 200
  end

  def show
    @note = Note.find(params[:id])

    render json: @note, status: 200 
  end

  def create
    @note = Notes.create(note_params)

    render json: @note, status: 200
  end

  def update
    @note = Note.find(param[:id])
    @note.update(note_params)
    render json: @note, status: 200 
  end
  
  def destroy 
    @note = Note.find(param[:id])
    @note.delete 

    render json: {noteId: @note.id}
  end

  private 
    def notes_params
      params.require(:note).permit(:body)
    end

end
