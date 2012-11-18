class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :name
      t.datetime :startDateTime
      t.datetime :endDateTime
      t.float :latitude
      t.float :longitude
      t.text :description
      t.belongs_to :category

      t.timestamps
    end
    add_index :events, :category_id
  end
end
