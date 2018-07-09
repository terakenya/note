class Article < ApplicationRecord
  has_many :likes, dependent: :destroy
  def like_user(user_id)
   likes.find_by(user_id: user_id)
  end
  belongs_to :user
  has_many :comments, foreign_key: "article_id", dependent: :destroy
  mount_uploader :image, ImageUploader
end
