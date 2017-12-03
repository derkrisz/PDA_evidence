### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

def equals_one(value)
  if value == 1
    return true
  else
    return false
  end
end

def compare(a, b)
  if a > b
    return a
  else
    return b
  end
end

def looper
  for num in 1..10
    puts num
  end
  return num
end

failures = 0

if looper == 10
  puts "looper passed"
else
  puts "looper failed"
  failures = failures + 1
end


if equals_one(3) == false
  puts "func1(3) passed"
else
  puts "func1(3) failed"
  failures = failures + 1
end


if compare(100,1) == 100
  puts "max(100,1) passed"
else
  puts "func1(3) failed"
  failures = failures + 1
end


if failures > 0
  puts "Test Failed"
else
  puts "Test Passed"
end
