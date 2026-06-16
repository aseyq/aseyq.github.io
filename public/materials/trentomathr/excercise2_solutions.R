## Excercise 2

# 1- Create a variable called `my_numeric` with the number 320. 
# Check the type of the variable. Then convert it to character and save the result as `my_character`.

my_numeric <- 320

# see the class
class(my_numeric)

# conversion to characher
my_character <- as.character(my_numeric)

# see to confirm it
class(my_character)

# 2- Calculate the sum and subtraction of the vectors (4,1) and (3,5). Then multipy these vectors. What did you get? Is that a proper vector multiplication?
vectorA <- c(4,1)
vectorB <- c(3,5)

print(vectorA + vectorB)
print(vectorA - vectorB)

print(vectorA * vectorB)

# 3- Here are the temperature of Trento in the previous years
# 2021:  50.2 Fahrenheit  
# 2020:  42.4 Fahrenheit  
# 2019:  34.4 Fahrenheit  
# 2018:  46.3 Fahrenheit  
# 2017:  41.24 Fahrenheit  

# a- Create a function which convert Fahrenheit to Celsius. Call it `f_to_c`
# b- Convert each of these values to Celsius
# c- Create a vector from the years and save it as `vector_year`
# d- Create a vector from the celsius values and save it as `vector_celsius`

# Solution
# a
# You needed to find the conversion from Fahrenheit to Celsius. I invite you to
# just google the formula and try to write a function to R. 
# The formulas you will find will suggest that you to do this calculation:
# (Fahrenheit - 32) / 1.8 
# Let's implement it in R:

f_to_c <- function(fahrenheit) {
  celsius <- (fahrenheit - 32) / 1.8
  return(celsius)
}

f_to_c(212) # just to test if it is working. It should give us 100 in Celsius

# b
# Let's convert the values
c2021 <- f_to_c(50.2)
c2020 <- f_to_c(42.4)
c2019 <- f_to_c(34.4)
c2018 <- f_to_c(46.3)
c2017 <- f_to_c(41.24)

# c 
# Lets put the years in a vector
vector_year  <- c(2021,2020,2019,2018,2017)

# R has a shortcut for these kind of sequential values
# it is useful when we have many values
vector_year <- seq(2021,2017)

# d
# Let's put the values we calculated in b in a vector
vector_celsius <- c(c2021,c2020,c2019,c2018,c2017)
print(vector_celsius) # Let's print it out

# bonus - lets put those values into a graph
plot(vector_year, vector_celsius)


# In the next lecture, we will learn how to quickly put
# a vector in a function and get the values directly.
