class CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)
    @comment.save
    respond_to do |format|
      format.html {
        redirect_to article_path(params[:article_id])
      }
      format.json
    end
  end

  def comment_params
    params.require(:comment).permit(:text).merge(user_id: current_user.id, article_id: params[:article_id])
  end
end
