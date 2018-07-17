class UsersController < ApplicationController
  def index
    @users = User.where('nickname LIKE(?) and id !=?', "%#{params[:keyword]}%", current_user)
    respond_to do |format|
      format.html
      format.json
    end
  end

  def update
    @user = User.find(current_user)
    @user.update(user_params)
    redirect_to user_menu_index_path(current_user)
  end

  private
  def user_params
    params.require(:user).permit(:photoimage,:usericon,:nickname,:bio)
  end
end
