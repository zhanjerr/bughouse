class CreatePuzzles < ActiveRecord::Migration[5.1]
  def change
    create_table :puzzles do |t|
      t.string :title, null:false
      t.integer :difficulty, limit:2, null:false
      t.text :explanation
      t.string :previous_move
      t.text :instruction
      t.string :board1_FEN, null:false
      t.string :board2_FEN, null:false
      t.json :board1_spare, null:false
      t.json :board2_spare, null:false

      t.timestamps
    end
  end
end
