## Testing task 1 code:

# Carry out static testing on the code below.
# Read through the code.
# Comment any errors you can see without correcting them.

def func1 val
  if val = 1
  return true
  else
  return false
  end
end

#naming convention and syntax errors on line 8. function name should be descriptive and val should be named value and in brackets because it is a parameter.
# syntax error on line 9, = should be ==. Val should be value (matching the parameter)
#indentation errors on line 10 and 12.

dif max a b
  if a > b
      return a
  else
  b
  end
end
end

#naming errors on line 19. wrong function name(not a good implication of what the function does), a and b shoud be in brackets as they are parameters.
#typo on line 19, dif should be def.
#extra end statement on line 26.
#bad indentations on line 21 and 23.
#missing return on line 23.

def looper
  for i in 1..10
  return i
  end
end

#bad indentation on line 36.
#naming convention error on line 35 and 36. i should be num for because we are returning numbers.
#missing a return statement after line 37

failures = 0

if looper == 10
  puts "looper passed"
else
  puts "looper failed"
  failures = failures + 1
end

#missing end statement on line 51.

if func1(3) == false
  puts "func1(3) passed"
else
  puts "func1(3) failed"
  failures = failures + 1
end

#nothing here, but because of the naming convention changes above, the name of the function we are calling have to be changed.

if max(100,1) == 100
  puts "max(100,1) passed"
else
  puts "func1(3) failed"
  failrues = failures + 1
end

#typo on line 67 (failures)
#max needs to be changed to the renamed function above

if failures
  puts "Test Failed"
else
  puts "Test Passed"
end

# line 76 needs a parameter otherwise it will always return fail
