class AddPhotoimageToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :photoimage, :text
  end
end
