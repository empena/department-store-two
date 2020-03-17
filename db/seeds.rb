# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

shoes = Department.create(name:'Shoes', description:'Shoe Department')
# 5.times do
#   shoes.Items.create(
#     name: Faker::Commerce.product_name,
#     description: Faker::Lorem.sentence,
#     price: Faker::Commerce.price.to_f,
#   )
# end

mensClothing = Department.create(name:'Mens Clothing', description:"Find Men's Clothing here")

# 5.times do
#   mensClothing.Items.create(
#     name: Faker::Commerce.product_name,
#     description: Faker::Lorem.sentence,
#     price: Faker::Commerce.price.to_f )
# end


womensClothing = Department.create(name:'Womens Clothing', description:"Find Women's Clothing here")

# 5.times do
#   womensClothing.Items.create(
#     name: Faker::Commerce.product_name,
#     description: Faker::Lorem.sentence,
#     price: Faker::Commerce.price.to_f,
#     department: Faker::Commerce.department
#   )
# end
puts "Department/items Seeded"