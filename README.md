# celeb_analysis
Analysing the patterns of tweets by few celebrities and deciding the similarities between them.
Javascript is used to fetch data from twitter and then analysed and stored in csv file. 
Later with the help of pandas of python data is again analysed and results are given.


People are invited to add some more cool stuff to make it more viable and dynamic!

In this whole model is based on javascript and last stages are done by python3 with help of pandas library.
Twit package is used to authenticate by twitter and then list of people for which tweets are to be searched are fetched from a 
twitter account. 
Using get followers I get the list of celebrities I was interested in.
Later with the help of the list their most recents tweets are fetched.
Last twenty tweets of each person is taken and analysed to produce result.
Lastly the result can be found in a csv file. I have uploaded the csv file too!

# dependencies
```
node.js
```
```
1. twit package (npm install twit)

2. csvdata package
```

```
python3
```
```
pandas

```


# how to use.

Its an early stage production. Right now you can download the source code on your machine and run it.
Two methods are to be called to get to the results.

```
1. Run the get_data.js 
```

Data will be fetched and sorted changed analysed and stored in a csv file.
```
2. Run the estimate.py file using python3.
```
This will display the results.

