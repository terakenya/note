class ArticlesController < ApplicationController

  def index
    @articles = Article.all.includes(:user).order("created_at DESC")
    @likes = Like.all
    @user = User.find(current_user)
  end

  def show
    @article = Article.includes(:user).find(params[:id])
    @comment = Comment.new
    @comments = @article.comments.includes(:user)
    @likes = Like.all
    @user = User.find(current_user)
  end

  def destroy
    article = Article.find(params[:id])
    if article.user_id == current_user.id
      article.destroy
    end
    redirect_to action: 'index'
  end

  def new
    @article = Article.new
  end

  def create
    @article = Article.new(article_params)
    @article.save
    redirect_to (@article)
  end

  def edit
    @article = Article.find(params[:id])
  end

  def update
    article = Article.find(params[:id])
    article.update(article_params) if article.user_id == current_user.id
    redirect_to action: 'show'
  end

  private
  def article_params
    params.require(:article).permit(:image, :text, :title).merge(user_id: current_user.id)
  end
end
