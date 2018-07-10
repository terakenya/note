class UsersController < ApplicationController
  def index
    @users = User.where('nickname LIKE(?) and id !=?', "%#{params[:keyword]}%", current_user)
    respond_to do |format|
      format.html
      format.json
    end
  end
end
