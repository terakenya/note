class MenuController < ApplicationController
  def index
    @articles = Article.all.includes(:user).order("created_at DESC").find(current_user)
  end
end
