class PuzzlesController < ApplicationController

def show
  gon.puzzle = Puzzle.find(params[:id])
  @puzzle = gon.puzzle
end

end
