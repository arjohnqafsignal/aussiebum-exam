
const experiment = require('./experiment');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })

const calculate = () => {
    readline.question(`Enter first date (DD/MM/YYYY): `, firstDate => {
   
        readline.question(`Enter second date (DD/MM/YYYY): `, secondDate => {
    
            const differenceInDays = experiment(firstDate, secondDate);
            if(typeof differenceInDays == 'object'){
                console.log(differenceInDays.message);
            }
            else{
                console.log(`${differenceInDays} days`);
            }        
            calculate();
        })
    })
}

calculate();

