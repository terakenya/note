class CreateArticles < ActiveRecord::Migration[5.0]
  def change
    create_table :articles do |t|
      t.references :user, foreign_key: true
      t.string :title
      t.text :text
      t.text :image
      t.integer :likes_count
      t.timestamps
    end
  end
end
