# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


puts "creating the characters"

10.times do
  Character.create(
    name: Faker::Fantasy::Tolkien.character,
    race: Faker::Fantasy::Tolkien.race
  )
end

puts "retrieving the characters"

characters = Character.all

puts "creating the poems"

25.times do
  Poem.create(
    location: Faker::Fantasy::Tolkien.location,
    poem: Faker::Fantasy::Tolkien.poem,
    character: characters.sample
  )
end

puts "all done!!"
