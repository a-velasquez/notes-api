# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Note.create([
  { body: 'Plan what features your app will have. You can write User Stories to help make it clear what you are planning to build'},
  { body: 'Model your domain. You need to know what the nouns in your project are - the objects in the world of your application. It can be helpful to draw the relationships between your models'},
  { body: 'Plan how your features will work.'},
  { body: 'A user is able to view travel locations, add new travel locations, edit travel locations and delete travel locations.'},
  { body: 'A user is able to review a travel location'},
  { body: 'As you turn your user stories into more clear technical specifications for features, you can start by modeling the data that your application will store and show. Identify the nouns in your stories, their properties, and their relationships.'},
  { body: 'A review has a comment and a rating'},
  { body: 'A travel location has a name, a description, a location.'},
  { body: 'Planning: Write down your ideas (use diagrams!)'}
])