fibonacci = [1, 2]
x = fibonacci[0]
y = fibonacci[1]
i = 0

while i <= 4000000
  i = x + y
  fibonacci << i
  x = y
  y = i
end

evens_sum = fibonacci.select { |n| n % 2 == 0 }.reduce(:+)

puts evens_sum