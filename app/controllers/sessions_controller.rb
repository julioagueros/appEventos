class SessionsController < ApplicationController
  
  skip_before_filter :require_login, :only => [:create]  

  #función para crear el usuario en session (logearlo).
  def create
        #raise request.env["omniauth.auth"].to_yaml
    auth = request.env["omniauth.auth"]
    user = User.find_by_provider_and_uid(auth["provider"], auth["uid"]) || User.create_with_omniauth(auth)
    session[:user_id] = user.id
    redirect_to events_url, :notice => "Signed in!"
  end

  #función para log out.
	def destroy
		session[:user_id] = nil
  		redirect_to events_url, :notice => "Signed out!"
	end
end




