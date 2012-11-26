class HomeController < ApplicationController
  #Solo permitir accesar el index sin estar loggeado.
  skip_before_filter :require_login, :only => [:index]  

  def index
  end
end
