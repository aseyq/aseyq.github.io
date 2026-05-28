# Our system
# 9x+10y=34 
# −6x−5y=−26
# Ax = b

# Cretae the matrix
A <- matrix(c(9,-6,10,-5), nrow=2)
print(A)

b <- matrix(c(34, -26), nrow=2)
print(b)

# Find the determinant of matrix A
detA <- det(A)

# Get the inverse
invA <- solve(A)
print(invA)

# Solve
invA %*% b

