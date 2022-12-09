# method is a function inside an object
# there are no functions in Ruby; they are all methods

def say_hello name, age = 42
  username = 'jstamos'
  "hi there #{name}, you are #{age} years old!!!! REALLY?!?!?!"
  username
end

return_val = say_hello 'Alice'

puts return_val

# x => x + 2
