# Excercises 3

# 1 - Put the data of the guesses in a vector. (if you can read from csv file... good. but a simple copy past will suffice)

guesses <- c(31,26,50,45,35,34,30,60,41,37,24,24,29,75,55,37,16,48,23,27,45,60,50,44,30,48,43,54,35,55,28,35,34,42,62,34,56,42,70,35)

# 2 - Calculate the mean and save it to `mean_guesses`
mean_guesses <- mean(guesses)
print(mean_guesses)

# 3- Draw a histogram from the guesses data
hist(guesses)

# 4 - Put the real number as a vertical line on the plot.
# The real number of candies in class was 83
the_real_number <- 83

hist(guesses, xlim=c(0,90))
abline(v=the_real_number, col="red")

# 5 - Think about the results. Do you think it was accurate? Were you expecting it? How well did you do?


# 6 - Create the vector of deviations (differences) from the real number. Save it as `accuracies`

accuracies <- guesses - the_real_number


# 7 - Now create a vector from the seating row data. save it as `seatings`
seatings  <- c(1,4,1,1,1,3,6,4,2,3,1,3,4,1,1,2,3,2,5,3,4,2,2,3,1,4,1,1,4,5,3,2,3,2,3,1,5,5,4,5)


# 8 - Plot a graph with `seatings` on the x axis and `accuracies` on the y axis.
plot(seatings, accuracies)

# 9 - Interpret the graph. Do you think the people on the front rows did better?
