# block of code is denoted with do..end
# Proc (procedure) is a block stored in memory
# lambda is a Proc that cares about how many args it gets passed

names = ['alice', 'bob', 'carol']
names.push('dean')

# names.each do |name|
#   puts "hello there #{name}"
# end
# my_block = Proc.new do |name|
#   puts "hello there #{name}"
# end

my_block = lambda do |name|
  puts "hello there #{name}"
end

names.each_with_index &my_block

puts

['mika', 'molly', 'buster'].each &my_block

# .forEach((element, index) => {})
# .each element
# .each_with_index element index
