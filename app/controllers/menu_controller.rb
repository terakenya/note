class MenuController < ApplicationController
  def index
    # @articles = Article.all.includes(:user).order("created_at DESC").find(current_user)
    @user = User.find(params[:user_id])
    @articles = Article.includes(:user).where(user_id: params[:user_id])
    @likes = Like.all
  end

  def new
    @user = User.find(current_user)
  end

  def update
    @user.update(user_params)
  end

  private
  def user_params
    params.require(:group).permit(:name, user_ids: [])

  end
end
