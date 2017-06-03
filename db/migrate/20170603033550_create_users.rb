class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :user_name, null: false
      t.string :first_name
      t.string :last_name
      t.boolean :admin, default: false
      t.string :email, null: false
      t.string :password_digest, null: false
      t.timestamps null: false
    end
  end
end
