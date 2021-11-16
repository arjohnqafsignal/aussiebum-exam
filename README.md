# Aussiebum Practical Skillset Test

This output is a command line app solution to calculate the number of full days elapsed in between two dates. However, the first and the last day are considered partial days and never counted. 

## How did I do this?
1. I created the experiment function which accept 2 params(date1, date2).
1. Since Date.parse() only accepts MM/DD/YYYY format, I had to create another function which will convert DD/MM/YYYY(this is the input format) into MM/DD/YYYY.
1. I created another function to validate each input that will check whether the input date is between 01/01/1901 and 31/12/2999, if the date is invalid we had to return error object with message.
1. I converted the parsed date into a Date Object so I can use the Timestamp.
1. After I get timestamp of both dates, I can now calculate the difference of Timestamp2 and Timestamp1.
1. Once I have the difference of timestamp, I can now convert the timestamp into days.
1. Since  the first and the last day are considered partial days and never counted we will always deduct 1 day from the output.
1. After we finished the experiment function, I had to create the unit test for experiment function with 3 test cases.
1. I create additional test case for us to get the correct expected result from case # 3.
1. Next is we have to create index to built the user interface.
1. I had to used NodeJS Readline for us to accept input stream from command line.
1. Next is import experiment function to index.js so we can use it when we are getting inputs from readline.
1. Now we create calculate function and call readline question method for us to get the input of first date.
1. Next is the call another readline question inside of the first readline so we can process the value of first date into second readline.
1. Then we have to check the return value of experiment module, if the return function is object, we are getting invalid input .
1. Else if we get integer, that was the result of the experiment function.
1. After we get the result from experiment function, we call again the calculate function to make our app recursive.
1. That's all. Thank you!

## Run locally

1. Install [Node.js and npm](https://nodejs.org/)
1. Run `git clone https://github.com/arjohnqafsignal/aussiebum-exam.git` to clone the source code
1. Run `cd aussiebum-exam`
1. Run `npm install` to install Jest for testing
1. Run `npm run test` to run test cases
1. Run `node .` to run the app

