class ArticlesController < ApplicationController

  def index
  end

  def show
  end

  def new
    @article = Article.new
  end
  def create
    # Article.create(text: article_params[:text])
    @article = Article.new(article_params)
    @article.save
    redirect_to articles_path
  end

  private
  def article_params
    params.require(:article).permit(:image, :content, :title)

  end
end
