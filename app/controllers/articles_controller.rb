class ArticlesController < ApplicationController

  def index

  end

  def show
    @article = Article.find(params[:id])
  end

  def destroy
    article = Article.find(params[:id])
    if article.user_id == current_user.id
      article.destroy
    end
    redirect_to article
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
    params.require(:article).permit(:image, :text, :title).merge(user_id: current_user.id)
  end
end
