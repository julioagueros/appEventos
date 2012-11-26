class Event < ActiveRecord::Base
  belongs_to :category
  belongs_to :user
  attr_accessible :description, :endDateTime, :latitude, :longitude, :name, :startDateTime, :category_id, :user_id
   validates :name, :description, :presence => true
   validates :name, :length => { :maximum => 100 }
   validates :description, :length => { :maximum => 500 }
end
