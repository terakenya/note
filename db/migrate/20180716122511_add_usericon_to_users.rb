class AddUsericonToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :usericon, :text
  end
end
