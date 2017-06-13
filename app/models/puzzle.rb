class Puzzle < ApplicationRecord

def previous
  Puzzle.where(["id < ?", id]).last
end

def next
  Puzzle.where(["id > ?", id]).first
end

end
