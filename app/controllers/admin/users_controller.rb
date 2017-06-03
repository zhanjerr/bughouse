class Admin::UsersController < ApplicationController
  before_action :authorize_admin

  def index
    @users = User.all.order(id: :asc)
  end

  def update
    @user = User.find(params[:id])
    case @user.admin
    when false
      @user.update_attributes(admin: true)
      redirect_to '/admin/users', notice: "User_id:#{@user.id} now an admin"
    when true
      @user.update_attributes(admin: false)
      redirect_to '/admin/users', notice: "User_id:#{@user.id} no longer an admin"
    else
      redirect_to '/admin/users', notice: "Unsuccessful Action"
    end
  end

end
