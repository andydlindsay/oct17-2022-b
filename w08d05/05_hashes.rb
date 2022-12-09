# collection of key/value pairs
# object, hash, dictionary, associative arrays

user = {
  "username" => "jstamos",
  "password" => "1234"
}

# puts user
# puts user["username"]

# symbols are light-weight strings
# they are as close to primitives as we can get in Ruby
user = {
  :username => "jstamos",
  :password => "1234"
}

# string = "password" # :password
# puts user
# p user[:username]
# p user[string.to_sym]

user = {
  username: "jstamos",
  password: "1234"
}

puts user
