class CreatePoems < ActiveRecord::Migration[6.1]
  def change
    create_table :poems do |t|
      t.string :location
      t.string :poem

      t.references :character, index: true, foreign_key: true

      t.timestamps
    end
  end
end
