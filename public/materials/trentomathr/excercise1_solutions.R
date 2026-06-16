## Exercise 1 - Solutions

# (Note that if a line starts with #, R will ignore the line)
# So we can add comments on the code

# Question 1
# Calculate the multiplication of 4, 8 and 12

4 * 8 * 12

# Question 2    
# - Create a variable named `height` with value 4, and another called `width` 10
# - Calculate the area of the rectangle and assign the value to the variable area
# - Check if the value <50
# - Check if the value is equal to 40    
    
 
height <- 10
width <- 20


area <- height * width

print(area)

area < 50
area == 40



# Question 3
# Calculate the distance between the points -4 and 2 
# and take the square root

first_no <- -4
second_no <- 2
distance <- abs(first_no - second_no)
print(distance)
sqrt(distance)

# Question 4
# We have two points (x1,y1) and (x2,y2) in a cartesian system.
# Create a function that calculates their distance and call it distance
# Calculate the distance of (0,0) and (3,4)
# Calculate the distance of (3,3) and (-1,4)


# We first create the function

distance <- function(x1, y1, x2, y2){
dist_x <- x1 - x2
  dist_y <- y1 - y2
  sumsq <- dist_x^2 + dist_y^2
  return(sqrt(sumsq))
}

# Then we execute the function to see the results

# Point 1: (0,0)   point 2: (3,4)
distance(0,0,3,4)

# Point 1 (3,3)    point 2: (-1,4)
distance(3,3,-1,4)
