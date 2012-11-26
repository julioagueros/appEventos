class Category < ActiveRecord::Base
  attr_accessible :description, :name

  validates :name, :description, :presence => true
   validates :name, :length => { :maximum => 70 }
   validates :description, :length => { :maximum => 500 }
end
