class Puzzle < ApplicationRecord

def next
  Puzzle.where(["id > ?", id]).first
end

end
