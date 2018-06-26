class ArticlesController < ApplicationController

  def index
  end

  def show

  end

  def new
    @article = Article.new
  end
  def create
    @article = Article.new(article_params)
    @article.save
    redirect_to (@article)
  end

  private
  def article_params
    params.require(:article).permit(:image, :content, :title).merge(user_id: current_user.id)
  end
end
