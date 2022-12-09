# block of code (block) is a chunk of repeating code
num = 0
# loop do
#   num += 1
#   puts "hello #{num}"

#   # if (num > 10)
#   #   break
#   # end

#   break if num > 10
# end

# num = 0

# while num < 10 do
#   puts "hello #{num}"
#   num += 1
# end

# until num > 10 do

# end

names = ['alice', 'bob', 'carol']
names.push('dean')

# for..in => for..of
# for name in names do
#   puts "hello there #{name}"
# end

# names.each do |name|
#   puts "hello #{name}"
# end

nums = ['one', 'two', 'three', 4, 5]

# select => filter
# selected_arr = nums.select do |num|
#   num > 3
# end

# p selected_arr

(0..nums.length - 1).each do |num|
  puts "hello #{nums[num]}"
end
