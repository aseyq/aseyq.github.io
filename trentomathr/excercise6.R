# Part 1

# 1. Create a set of numbers from -10 to 10 with 0.1 increments. 
# Store it in a variable as x

x <- 

# 2. Consider the mathematical function :
#   -2x ^ 2 + 10x - 12.5
# create y values for that and save it in a variable called y
y <- 

# 3. Plot a line graph of the function above 
plot()

# 4. Find the maximum value of y. Save it to a variable called `maxy`
maxy <- 
print(maxy)


# 5. Put a vertical line on the graph using this maximum value
plot()
___() 


# 6. Write that function and check if the numbers you 
# write match well with the graph you've created

calculate_y <-

# 7. Try to find the x value that maximizes the function, by plugging different values in your function.
calculate_y(1)
  

# Part 2

#1 . Consider these equations
#  v + 2x - 3y + 12z = -2
#  v +  x  + 2y +  3z = 6
# 2v + 2x  + 2y +  2z = 2
# 3v + x   - 2y  + z = -10

# Write the left side of the equation as a matrix 
# coefficients. Save it as A
# You can first create a vector, then convert it to
# a matrix

a <- 

A <- matrix()

# 2. Create the vector of constants. Save it as v
# (the right hand side of equations)
b <- 


# 3. Now you have the system Ax = B
# First get the determinant of matrix A
# Is the determinant non-zero?
___()

# If so, get the inverse of A and save it as invA
invA <- ___(A)

# 4. Multiply (matrix mutliplication %*%) invA with b
# this will give you solution of the system


# Confirm that you got the values right by 
# trying out these values on equations



