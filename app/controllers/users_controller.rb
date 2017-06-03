class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    user = User.new(user_sign_up_params)
    if user.save
      session[:user_id] = user.id
      redirect_to '/'
    else
      redirect_to '/signup'
    end
  end

  private

  def user_sign_up_params
    params.require(:user).permit(:email, :password, :password_confirmation, :hiv, :veteran, :immigrant, :lgbt, :gender, :age)
  end

end
