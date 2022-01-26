class Restaurant < ApplicationRecord
    has_many :reviews, through: :user
end
