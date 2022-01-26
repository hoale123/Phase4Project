class ReviewsController < ApplicationController
    def index 
        reviews = Review.all
        render json: reviews, status: :ok
    end 

    def create
        review = Restaurant.create!(review_params)
        render json: review , status: 201
    end 
    private 
    def find_restaurant
        Restaurant.find(params[:id])
    end

    def review_params
        params.permit(:review, :restaurant_id, :user_id)
    end
end
