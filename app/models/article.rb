class Article < ApplicationRecord
  belongs_to :user
  has_many :comments, foreign_key: "article_id", dependent: :destroy
  mount_uploader :image, ImageUploader
end
