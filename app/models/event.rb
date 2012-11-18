class Event < ActiveRecord::Base
  belongs_to :category
  attr_accessible :description, :endDateTime, :latitude, :longitude, :name, :startDateTime, :category_id
end
