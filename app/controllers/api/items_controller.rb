class Api::ItemsController < ApplicationController 

  def index
    department = Department.find(params{:department_id})
    render json: department.items
  end

  def create
    department = Department.find(params[:department_id])
    render json: department.items.create(item_params)
  end

  def update
  end

  def destroy
    Item.find(params:id).destroy
  end

  private 
  def item_params
    params.require(:item).permit(:name, :description, :price)
  end 
end
