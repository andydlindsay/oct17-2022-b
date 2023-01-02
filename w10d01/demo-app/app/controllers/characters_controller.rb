class CharactersController < ApplicationController
  def index
    # @name = 'Alice'

    @characters = Character.all
  end
end
