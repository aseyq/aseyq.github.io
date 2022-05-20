# How to immediately save a data frame as csv and open the file immediately in R?
When I am working with data frames (or tibbles etc.) in R, oftentimes looking at the data 
using the console doesn't suffice. Maybe I'd like to scroll down or right a lot, or expand a long cell etc. 
One thing I often do is to save the data as csv with a filename like `test.csv` and then open it. So I decided to
create a wrapper function to do that on the fly. This is especially useful for long pipe chains.

For instance

```{r}
df %>% 
 filter(...)  %>% 
 mutate(...)  %>% 
 ...
 mutate("test.csv")
```

You can of course open a file using your file browser or you can use your `browseURL()` function to
add `browseURL("test.csv")

So the function I create is basically is doing the two underneath, with an additional helper "tempfile". 
I didn't know that R has a function to create a temporary filename but apparently it has. 

Now here is the my function:

```{r}
# open as CSV file on the fly
flyCSV <- function(df) {
    filename <- tempfile(pattern = "file", tmpdir = tempdir(), fileext = ".csv")
    write.csv(df, filename)
    browseURL(filename)
   }
```

And now you can


```{r}
df %>% 
 filter(...)  %>% 
 mutate(...)  %>% 
 flyCSV()
```

The function returns the orignal data frame. So you can even open the file in the middle of a pipe chain.
```
df %>% 
 filter(...)  %>% 
 flyCSV() %>% 
 mutate(...)  %>% 
 ...
```

Especially if you are not an RStudio user, this could be a good alternative to `View()`.

After writing this post, I actuall thought it might be useful to have it as a package and I created the
tiny R package called `flyCSV`. I added some customizations to it but essentially it does what is written
above. 

<h4> <a href="https://github.com/aseyq/flyCSV/">https://github.com/aseyq/flyCSV/</a> </h4>

I'd appreciate if you let me know in case you give it a try.



