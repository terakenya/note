class ArticlesController < ApplicationController

  def index
  end

  def show
  end

  def new
    @article = Article.new
  end
  def create
    Article.create(text: article_params[:text])
    redirect_to articles_path
  end

  private
  def article_params
    params.permit(:text)
  end
end
