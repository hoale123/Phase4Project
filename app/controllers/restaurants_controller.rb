class RestaurantsController < ApplicationController

    def index
        restaurants = Restaurant.all
        render json: restaurants, status: :ok
    end

    def destroy
        restaurant = find_restaurant
    restaurant.destroy
    end

    def create
        restaurant = Restaurant.create!(restaurant_params)
        render json: restaurant , status: 201
    end 

    def
    end


    private 
    def find_restaurant
        Restaurant.find(params[:id])
    end

    def restaurant_not_found
        render json: {error: "Restaurant not found"}, status: 404
    end

    def restaurant_params
        params.permit(:name, :description, :image, :location)
    end
end
