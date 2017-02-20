# Version 1

# def multiples(num)
#     multiples_num = []
#     multiples_sum = 0
#     (1...num).each do |n|
#         if n % 3 == 0 || n % 5 == 0
#             multiples_num << n
#         end
#     end
#     multiples_num.each do |n|
#         multiples_sum += n
#     end
    
#     puts multiples_sum
# end

# multiples(1000)

# Version 2

# def multiples(num)
#     multiples_num = []
#     (1...num).each do |n|
#         if n % 3 == 0 || n % 5 == 0
#             multiples_num << n
#         end
#     end
#     sum = multiples_num.inject(:+)
#     puts sum
# end

# multiples(1000)

# Version 3

def multiples(num)
    (1...num).select { |n| n % 3 == 0 || n % 5 == 0 }.inject(:+)
end

multiples(1000)
