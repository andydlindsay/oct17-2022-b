class PoemsController < ApplicationController
  def index
    character_id = params[:character_id]

    @character = Character.find character_id
    @poems = @character.poems
  end
end
