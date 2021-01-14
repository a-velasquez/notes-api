class Api::V1::NotesController < ApplicationController

  def index
    @notes = Note.all

    render json: @notes, status: 200
  end

  def show
    @note = Note.find(params[:id])

    render json: @note, status: 200 
  end

  
end