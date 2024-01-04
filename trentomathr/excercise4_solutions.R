## Excercies

#  1- Create a matrix as follows and call it `M`:
#    8  4   2    
#   -2 -1  0.5
#    2  1   2
m_values <- c(8, 4, 3, -2, -1, 0.5, 3, 1, 2)

M <- matrix(m_values, ncol=3, byrow=TRUE)

print(M)
# 2- Multiply it with
# a- Scalar 32
# b- Muliply with another 3 x 2 matrix you define your own 

# a-
32 * M 


# b- I am making a matrix up
N <- matrix(c(1,2,3,4,5,6), nrow=3, ncol=2)
M %*% N


# 3- Take the inverse of matrix `M`. Save it as `invM`. 
# Multiply the original matrix with the inverse matrix. 
# What did you get multiplying a matrix with its inverse?
# If you find long decimal numbers, try to round the matrix
# with round() function using 4 digits of decimals. Now what do you see?

invM <- solve(M)
print(invM)

print(M %*% invM)
print(round(M %*% invM),4)

# 4- Create a 3x3 matrix of ones. Save it as `O`. Multiply `M` with it and see how the matrix changes. 
# How are row values are calculated? Now change the multiplication order? How is it now?
# Remember: Matrix multiplication(cross-product) in R is `%*%` and order matters

O <- matrix(1, ncol=3, nrow=3) # Matrix of 1's

print(O) 

M %*% O
O %*% M

# 5- Create an 3x3 identity matrix. Multiply `M` with it with and see whether M changes.
Id3 <- diag(3)
M %*% Id3

# 6- Create the same matrix M but this time create separate vectors for each column and create the matrix
# combining those three columns by using `cbind`, not matrix function. Look at the documentation of cbind
#by writing ?cbind if necessary.
vector1 <- c(8,4,3)
vector2 <- c(-2,-1,0.5)
vector3 <- c(3,1,2)

cbind(vector1,vector2,vector3)
